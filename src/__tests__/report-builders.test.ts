import { describe, it, expect } from "vitest";
import {
  buildCliReportContent,
  buildOpenclawReportContent,
  buildInfraReportContent,
  buildDigestIssueBody,
} from "../report-builders.ts";
import type { RepoDigest } from "../prompts.ts";
import type { GitHubItem, GitHubRelease } from "../github.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function makeDigest(overrides: Partial<RepoDigest> = {}): RepoDigest {
  return {
    config: { id: "test-tool", repo: "org/test-tool", name: "TestTool" },
    issues: [],
    prs: [],
    releases: [],
    summary: "Test summary content",
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// buildCliReportContent
// ---------------------------------------------------------------------------

describe("buildCliReportContent", () => {
  it("includes title, meta, and all sections (zh)", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "OpenAI Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "Skills summary",
      "Comparison content",
      "2026-03-09 00:00",
      "2026-03-09",
      "\n---\nfooter",
      "anthropics/skills",
      "zh",
    );

    expect(result).toContain("# AI CLI 工具社区动态日报 2026-03-09");
    expect(result).toContain("覆盖工具: 2 个");
    expect(result).toContain("[Claude Code](https://github.com/anthropics/claude-code)");
    expect(result).toContain("[Claude Code Skills](https://github.com/anthropics/skills)");
    expect(result).toContain("横向对比");
    expect(result).toContain("Comparison content");
    expect(result).toContain("Skills summary");
    expect(result).toContain("footer");
  });

  it("includes title and meta in English", () => {
    const digests = [makeDigest()];
    const result = buildCliReportContent(
      digests,
      "Skills",
      "Comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "",
      "anthropics/skills",
      "en",
    );
    expect(result).toContain("# AI CLI Tools Community Digest 2026-03-09");
    expect(result).toContain("Cross-Tool Comparison");
  });

  it("nests skills section inside claude-code details only", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "SKILLS_CONTENT",
      "comparison",
      "",
      "",
      "",
      "anthropics/skills",
      "zh",
    );

    // Skills should appear inside claude-code details
    const claudeIdx = result.indexOf("Claude Code");
    const skillsIdx = result.indexOf("SKILLS_CONTENT");
    expect(skillsIdx).toBeGreaterThan(claudeIdx);
    // Skills should not appear after codex section
    expect(result.split("SKILLS_CONTENT")).toHaveLength(2); // appears exactly once
  });
});

// ---------------------------------------------------------------------------
// buildOpenclawReportContent
// ---------------------------------------------------------------------------

describe("buildOpenclawReportContent", () => {
  it("includes all sections (zh)", () => {
    const openclaw = { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" };
    const peers = [{ id: "peer1", repo: "org/peer1", name: "Peer1" }];
    const peerDigests = [makeDigest({ config: peers[0] })];
    const fetchedOpenclaw = {
      cfg: openclaw,
      issues: [{ number: 1 } as unknown as GitHubItem],
      prs: [] as GitHubItem[],
      releases: [] as GitHubRelease[],
    };

    const result = buildOpenclawReportContent(
      fetchedOpenclaw,
      peerDigests,
      "OpenClaw summary",
      "Peers comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "\nfooter",
      openclaw,
      peers,
      "zh",
    );

    expect(result).toContain("# MCP 生态日报 2026-03-09");
    expect(result).toContain("Issues: 1");
    expect(result).toContain("覆盖项目: 2 个");
    expect(result).toContain("[OpenClaw](https://github.com/openclaw/openclaw)");
    expect(result).toContain("[Peer1](https://github.com/org/peer1)");
    expect(result).toContain("MCP 项目深度报告");
    expect(result).toContain("横向生态对比");
    expect(result).toContain("同赛道项目详细报告");
    expect(result).toContain("footer");
  });

  it("renders in English", () => {
    const openclaw = { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" };
    const result = buildOpenclawReportContent(
      { cfg: openclaw, issues: [], prs: [], releases: [] },
      [],
      "summary",
      "comparison",
      "",
      "2026-03-09",
      "",
      openclaw,
      [],
      "en",
    );
    expect(result).toContain("# MCP Ecosystem Digest 2026-03-09");
    expect(result).toContain("MCP Deep Dive");
    expect(result).toContain("Cross-Ecosystem Comparison");
  });
});

// ---------------------------------------------------------------------------
// buildDigestIssueBody
// ---------------------------------------------------------------------------

describe("buildDigestIssueBody", () => {
  const ids = ["ai-cli", "ai-hn"] as const;

  it("renders one linked section per report with its bullets", () => {
    const body = buildDigestIssueBody(
      "2026-03-09",
      ids,
      { "ai-cli": ["Claude Code shipped X", "Codex fixed Y"], "ai-hn": ["Front page: Z"] },
      "me/radar",
    );

    expect(body).toContain(
      "### [AI CLI Tools](https://github.com/me/radar/blob/HEAD/digests/2026-03-09/ai-cli.md)",
    );
    expect(body).toContain("- Claude Code shipped X");
    expect(body).toContain("- Codex fixed Y");
    expect(body).toContain(
      "### [HN Community](https://github.com/me/radar/blob/HEAD/digests/2026-03-09/ai-hn.md)",
    );
    expect(body).toContain("- Front page: Z");
  });

  it("keeps a section when the LLM returned no highlights for it", () => {
    const body = buildDigestIssueBody("2026-03-09", ids, { "ai-cli": ["only this"] }, "me/radar");
    expect(body).toContain("_Nothing notable._");
  });

  it("stays short — a digest, not the reports themselves", () => {
    const body = buildDigestIssueBody(
      "2026-03-09",
      ids,
      { "ai-cli": ["a", "b", "c", "d", "e", "f"], "ai-hn": ["a", "b", "c", "d", "e", "f"] },
      "me/radar",
    );
    expect(body.length).toBeLessThan(2000);
  });
});

// ---------------------------------------------------------------------------
// buildInfraReportContent
// ---------------------------------------------------------------------------

describe("buildInfraReportContent", () => {
  it("includes title, meta, and all sections (zh)", () => {
    const digests = [
      makeDigest({ config: { id: "vllm", repo: "vllm-project/vllm", name: "vLLM" }, summary: "vLLM 摘要" }),
      makeDigest({ config: { id: "ollama", repo: "ollama/ollama", name: "Ollama" }, summary: "Ollama 摘要" }),
    ];
    const result = buildInfraReportContent(
      digests,
      "Comparison content",
      "2026-03-09 00:00",
      "2026-03-09",
      "\n---\nfooter",
      "zh",
    );

    expect(result).toContain("# AI 基础设施日报 2026-03-09");
    expect(result).toContain("覆盖项目: 2 个");
    expect(result).toContain("[vLLM](https://github.com/vllm-project/vllm)");
    expect(result).toContain("[Ollama](https://github.com/ollama/ollama)");
    expect(result).toContain("横向对比");
    expect(result).toContain("Comparison content");
    expect(result).toContain("vLLM 摘要");
    expect(result).toContain("各项目详细报告");
    expect(result).toContain("footer");
  });

  it("renders in English", () => {
    const result = buildInfraReportContent([makeDigest()], "comparison", "", "2026-03-09", "", "en");
    expect(result).toContain("# AI Infrastructure Digest 2026-03-09");
    expect(result).toContain("Projects covered: 1");
    expect(result).toContain("Cross-Project Comparison");
    expect(result).toContain("Per-Project Reports");
  });
});
