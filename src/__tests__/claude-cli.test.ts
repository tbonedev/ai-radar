import { describe, it, expect, vi, beforeEach } from "vitest";
import { EventEmitter } from "node:events";

vi.mock("node:child_process", () => ({ spawn: vi.fn() }));

import { spawn } from "node:child_process";
import { ClaudeCliProvider } from "../providers/claude-cli.ts";

const spawnMock = vi.mocked(spawn);

/** Minimal stand-in for a spawned `claude` process. */
function fakeChild() {
  const child = new EventEmitter() as EventEmitter & {
    stdout: EventEmitter & { setEncoding: () => void };
    stderr: EventEmitter & { setEncoding: () => void };
    stdin: { end: ReturnType<typeof vi.fn> };
  };
  const stream = () => Object.assign(new EventEmitter(), { setEncoding: () => {} });
  child.stdout = stream();
  child.stderr = stream();
  child.stdin = { end: vi.fn() };
  return child;
}

beforeEach(() => spawnMock.mockReset());

describe("ClaudeCliProvider", () => {
  it("sends the prompt over stdin and returns trimmed stdout", async () => {
    const child = fakeChild();
    spawnMock.mockReturnValue(child as never);

    const promise = new ClaudeCliProvider({ model: "sonnet" }).call("summarize this", 1024);
    child.stdout.emit("data", "  digest text  ");
    child.emit("close", 0);

    await expect(promise).resolves.toBe("digest text");
    expect(child.stdin.end).toHaveBeenCalledWith("summarize this", "utf-8");
    expect(spawnMock.mock.calls[0]?.[1]).toEqual(["--print", "--model", "sonnet"]);
  });

  it("rejects when the CLI exits non-zero, surfacing stderr", async () => {
    const child = fakeChild();
    spawnMock.mockReturnValue(child as never);

    const promise = new ClaudeCliProvider().call("x", 16);
    child.stderr.emit("data", "not logged in");
    child.emit("close", 1);

    await expect(promise).rejects.toThrow(/exited with code 1.*not logged in/s);
  });

  it("never runs more processes at once than the concurrency limit", async () => {
    const children: ReturnType<typeof fakeChild>[] = [];
    spawnMock.mockImplementation((() => {
      const c = fakeChild();
      children.push(c);
      return c;
    }) as never);

    const provider = new ClaudeCliProvider({ concurrency: 2 });
    const calls = [1, 2, 3, 4].map((n) => provider.call(`p${n}`, 16));

    await Promise.resolve();
    expect(children).toHaveLength(2); // the other two are queued

    children[0]!.stdout.emit("data", "a");
    children[0]!.emit("close", 0);
    await Promise.resolve();
    await Promise.resolve();
    expect(children).toHaveLength(3); // one slot freed, one queued call started

    // Drain so the test does not leave dangling promises.
    for (let i = 1; i < 4; i++) {
      children[i]?.stdout.emit("data", "x");
      children[i]?.emit("close", 0);
      await Promise.resolve();
      await Promise.resolve();
    }
    await expect(Promise.all(calls)).resolves.toHaveLength(4);
  });
});
