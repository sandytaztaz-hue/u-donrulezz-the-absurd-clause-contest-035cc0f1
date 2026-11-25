import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Absurd Clause Contest — one sentence, at most 200 characters,
// deadpan legal boilerplate from a terms-of-service agreement that
// quietly turns absurd. The setup is pure boilerplate ("by accepting
// these terms, the user agrees..."); the absurdity lands last, in the
// kitchen, with a stopwatch: 45 seconds of applause, alone.
const ENTRY: string =
  "Section 9.6: by accepting these terms, the user agrees to applaud the Company's quarterly earnings call, alone, in their kitchen, for no fewer than 45 seconds.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
