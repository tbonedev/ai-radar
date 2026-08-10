/**
 * Claude CLI provider — shells out to the locally installed `claude` binary in
 * headless mode, so the digest runs on a Claude subscription instead of a
 * metered API key.
 *
 * Env vars:
 *   CLAUDE_MODEL             - model alias or id (default: sonnet)
 *   CLAUDE_CLI_CONCURRENCY   - max simultaneous `claude` processes (default: 4)
 *   CLAUDE_CODE_OAUTH_TOKEN  - long-lived subscription token from
 *                              `claude setup-token`; needed in CI only, locally
 *                              the CLI reuses the existing login.
 *
 * The prompt goes over stdin, never argv — prompts routinely exceed the OS
 * argument-length limit.
 */

import { spawn } from "node:child_process";
import type { LlmProvider } from "./types.ts";

const DEFAULT_MODEL = "sonnet";
const DEFAULT_CONCURRENCY = 4;

// ponytail: fixed-size gate instead of a queue library. Each `claude` run is a
// whole Node process (~200-300 MB); the pipeline fires ~20 calls in one
// Promise.all, which would otherwise OOM a CI runner. Swap for p-limit only if
// this ever needs per-call priorities.
function createGate(limit: number): <T>(fn: () => Promise<T>) => Promise<T> {
  let active = 0;
  const waiting: Array<() => void> = [];

  return async function run<T>(fn: () => Promise<T>): Promise<T> {
    if (active >= limit) await new Promise<void>((resolve) => waiting.push(resolve));
    active++;
    try {
      return await fn();
    } finally {
      active--;
      waiting.shift()?.();
    }
  };
}

/**
 * GitHub Actions expands an unset repository variable to an empty string rather
 * than omitting it, so `process.env.X ?? default` yields "" instead of the
 * default. Treat blank as unset.
 */
function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

/** Model names reach a shell on Windows — keep them to characters that cannot escape it. */
function assertSafeModel(model: string): string {
  if (!/^[A-Za-z0-9._:-]+$/.test(model)) {
    throw new Error(`Unsafe CLAUDE_MODEL value: ${JSON.stringify(model)}`);
  }
  return model;
}

function spawnClaude(prompt: string, model: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // On Windows `claude` is a .cmd shim, and since CVE-2024-27980 Node refuses
    // to spawn .bat/.cmd without a shell (EINVAL). shell:true concatenates args
    // instead of escaping them — safe here only because the sole interpolated
    // value is `model`, which assertSafeModel has already restricted.
    const child = spawn("claude", ["--print", "--model", model], {
      shell: process.platform === "win32",
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf-8");
    child.stderr.setEncoding("utf-8");
    child.stdout.on("data", (chunk: string) => (stdout += chunk));
    child.stderr.on("data", (chunk: string) => (stderr += chunk));

    child.on("error", (err) =>
      reject(new Error(`Failed to run the "claude" CLI — is it installed and on PATH? (${err.message})`)),
    );
    child.on("close", (code) => {
      if (code === 0 && stdout.trim()) return resolve(stdout.trim());
      reject(new Error(`claude exited with code ${code}: ${(stderr || stdout).slice(0, 500)}`));
    });

    child.stdin.end(prompt, "utf-8");
  });
}

export class ClaudeCliProvider implements LlmProvider {
  readonly name = "claude-cli";
  private readonly model: string;
  private readonly gate: <T>(fn: () => Promise<T>) => Promise<T>;

  constructor(opts?: { model?: string; concurrency?: number }) {
    this.model = assertSafeModel(opts?.model ?? env("CLAUDE_MODEL") ?? DEFAULT_MODEL);
    const envLimit = Number(env("CLAUDE_CLI_CONCURRENCY"));
    const limit =
      opts?.concurrency ?? (Number.isInteger(envLimit) && envLimit > 0 ? envLimit : DEFAULT_CONCURRENCY);
    this.gate = createGate(limit);
  }

  /** maxTokens is ignored — the CLI has no per-call output cap. */
  async call(prompt: string, _maxTokens: number): Promise<string> {
    return this.gate(() => spawnClaude(prompt, this.model));
  }
}
