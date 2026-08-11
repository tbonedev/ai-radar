/**
 * Practitioner feeds — RSS/Atom sources that carry craft rather than changelog:
 * how people actually work with these models, what they tried, what broke.
 *
 * Release notes are already covered by the GitHub and vendor-blog sources; this
 * is the half that answers "how should I be working" instead of "what shipped".
 *
 * Reddit is included on a best-effort basis. Its JSON API answers 403 to
 * unauthenticated clients and even the Atom feeds rate-limit aggressively from
 * datacenter IPs, so those entries are expected to fail some of the time — the
 * blogs carry the section when they do.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FeedItem {
  title: string;
  url: string;
  /** Human-readable source name, e.g. "Simon Willison" or "r/LocalLLaMA". */
  source: string;
  publishedAt: string;
  /** Body text, tags stripped and truncated — the technique is usually in here. */
  excerpt: string;
}

export interface FeedsData {
  items: FeedItem[];
  fetchSuccess: boolean;
}

interface FeedSource {
  name: string;
  url: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const FEEDS: FeedSource[] = [
  { name: "Simon Willison", url: "https://simonwillison.net/atom/everything/" },
  { name: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml" },
  { name: "Latent Space", url: "https://www.latent.space/feed" },
  { name: "Eugene Yan", url: "https://eugeneyan.com/rss/" },
  { name: "Lilian Weng", url: "https://lilianweng.github.io/index.xml" },
  { name: "Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/feed" },
  { name: "Martin Fowler", url: "https://martinfowler.com/feed.atom" },
  { name: "r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA/top/.rss?t=day" },
  { name: "r/ClaudeAI", url: "https://www.reddit.com/r/ClaudeAI/top/.rss?t=day" },
  { name: "r/mcp", url: "https://www.reddit.com/r/mcp/top/.rss?t=day" },
  { name: "r/AI_Agents", url: "https://www.reddit.com/r/AI_Agents/top/.rss?t=day" },
];

const PER_FEED = 6;
const EXCERPT_CHARS = 1500;
const MAX_AGE_DAYS = 4;
/** ponytail: fixed pause between requests. Swap for backoff if 429s reappear. */
const REQUEST_SPACING_MS = 1500;
const USER_AGENT = "ai-radar/1.0 (daily AI digest; +https://github.com/tbonedev/ai-radar)";

// ---------------------------------------------------------------------------
// Parsing — handles both Atom (<entry>) and RSS 2.0 (<item>)
// ---------------------------------------------------------------------------

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

function decodeEntities(s: string): string {
  return s.replace(/&(?:amp|lt|gt|quot|#39|apos|nbsp);/g, (m) => ENTITIES[m] ?? m);
}

function stripCdata(s: string): string {
  return s.replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, "$1");
}

/** Feed bodies are HTML; the digest only needs the prose. */
function toPlainText(html: string): string {
  return decodeEntities(decodeEntities(stripCdata(html)).replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function tagContent(entry: string, tag: string): string {
  const match = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`).exec(entry);
  return match?.[1] ? stripCdata(match[1]) : "";
}

/** Atom puts the URL in link/@href; RSS 2.0 puts it in the element's text. */
function extractLink(entry: string): string {
  const atom = /<link[^>]*\shref="([^"]+)"/.exec(entry)?.[1];
  if (atom) return decodeEntities(atom);
  return decodeEntities(tagContent(entry, "link").trim());
}

export function parseFeed(xml: string, source: string, now = Date.now()): FeedItem[] {
  const blocks = [...xml.matchAll(/<(entry|item)[\s>][\s\S]*?<\/\1>/g)].map((m) => m[0]);
  const cutoff = now - MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
  const items: FeedItem[] = [];

  for (const block of blocks) {
    const title = decodeEntities(toPlainText(tagContent(block, "title")));
    const url = extractLink(block);
    if (!title || !url) continue;

    const dateText =
      tagContent(block, "updated").trim() ||
      tagContent(block, "published").trim() ||
      tagContent(block, "pubDate").trim();
    const published = Date.parse(dateText);
    // Undated entries are kept: a missing date is not evidence of staleness.
    if (Number.isFinite(published) && published < cutoff) continue;

    items.push({
      title,
      url,
      source,
      publishedAt: Number.isFinite(published) ? new Date(published).toISOString() : dateText,
      excerpt: toPlainText(
        tagContent(block, "content") ||
          tagContent(block, "content:encoded") ||
          tagContent(block, "description") ||
          tagContent(block, "summary"),
      ).slice(0, EXCERPT_CHARS),
    });

    if (items.length >= PER_FEED) break;
  }

  return items;
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchFeedsData(): Promise<FeedsData> {
  const collected: FeedItem[][] = [];
  let anySucceeded = false;

  // Sequential with a pause: several of these sources answer 429 to a burst.
  for (const [index, feed] of FEEDS.entries()) {
    if (index > 0) await new Promise((resolve) => setTimeout(resolve, REQUEST_SPACING_MS));
    try {
      const resp = await fetch(feed.url, {
        headers: { "User-Agent": USER_AGENT, Accept: "application/atom+xml, application/rss+xml, */*" },
      });
      if (!resp.ok) {
        console.error(`  [feeds] ${feed.name}: HTTP ${resp.status}`);
        continue;
      }
      anySucceeded = true;
      collected[index] = parseFeed(await resp.text(), feed.name);
      console.log(`  [feeds] ${feed.name}: ${collected[index]?.length ?? 0} recent items`);
    } catch (err) {
      console.error(`  [feeds] ${feed.name}: ${err}`);
    }
  }

  // Interleave by rank so one prolific source can't crowd out the rest.
  const items: FeedItem[] = [];
  for (let rank = 0; rank < PER_FEED; rank++) {
    for (const feedItems of collected) {
      const item = feedItems?.[rank];
      if (item) items.push(item);
    }
  }

  console.log(`  [feeds] ${items.length} items from ${collected.filter(Boolean).length} sources`);
  return { items, fetchSuccess: anySucceeded };
}
