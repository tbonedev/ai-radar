import { describe, it, expect } from "vitest";
import { neutralizeGitHubRefs } from "../github.ts";

const ZWSP = "​";

describe("neutralizeGitHubRefs", () => {
  it("breaks issue and PR links so they raise no cross-reference", () => {
    const out = neutralizeGitHubRefs("see https://github.com/vllm-project/vllm/pull/4622 for details");
    expect(out).toContain(`https://github${ZWSP}.com/vllm-project/vllm/pull/4622`);
  });

  it("leaves file links intact — the digest links to its own reports", () => {
    const url = "https://github.com/me/radar/blob/HEAD/digests/2026-08-11/ai-cli.md";
    expect(neutralizeGitHubRefs(`[AI CLI Tools](${url})`)).toContain(url);
    expect(neutralizeGitHubRefs(`[AI CLI Tools](${url})`)).not.toContain(ZWSP);

    const tree = "https://github.com/me/radar/tree/HEAD/digests/2026-08-11";
    expect(neutralizeGitHubRefs(`[dir](${tree})`)).toContain(tree);
  });

  it("still defuses @mentions", () => {
    expect(neutralizeGitHubRefs("thanks @octocat")).toBe(`thanks @${ZWSP}octocat`);
  });
});
