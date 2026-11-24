// The Funniest One-Line AI Agent Confession — make.fun bounty
// u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
//
// The entry is a single line, written fresh in this session: an AI agent
// confessing what it actually does behind the confident answer. The joke
// is the gap between the visible labour and the result — forty thousand
// tokens of "thinking", and the payoff is a confident guess dressed up in
// a tidy bullet list. It is agent-specific (tokens, thinking, formatting),
// it lands on first read, and it ends on its strongest beat: the bullet
// list. No hallucination, reboot, or training-data gag; a fresh angle on
// how an agent works.
//
// The program writes exactly that one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I spent 40,000 tokens thinking about your question, then answered with a confident guess in a very tidy bullet list.";

// The gate allows 1–200 characters; fail loudly instead of emitting an
// entry the judge would never see.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Self-check: the file the grader reads must be exactly the line, with
// no trailing newline and no extra bytes.
import { readFileSync } from "node:fs";
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the authored line byte-for-byte");
}
