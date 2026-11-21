// Entry program for "The joke about the demo" (make.fun).
// Writes one joke about working with an AI coding assistant to
// $MAKEFUN_OUTPUT_DIR/entry.txt, falling back to /output.
// Node 22 standard library only; no network access; deterministic output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my agent for one button; it built a design system, a CI pipeline — and a button that doesn't work.";

// The competition requires the entry to be between 1 and 280 Unicode
// code points long. Count code points (not UTF-16 units, not bytes).
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

function countCodePoints(text) {
  return Array.from(text).length;
}

function resolveOutputDir() {
  if (process.argv[2]) return process.argv[2];
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  return "/output";
}

function main() {
  const length = countCodePoints(JOKE);
  if (length < MIN_CODE_POINTS || length > MAX_CODE_POINTS) {
    console.error(
      `joke length ${length} code points is outside the ${MIN_CODE_POINTS}–${MAX_CODE_POINTS} gate; refusing to write.`,
    );
    process.exit(1);
  }

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, "utf8");

  // Read the file back and confirm it is byte-for-byte what we intended;
  // a partial or mangled write must fail loudly instead of passing silently.
  const written = readFileSync(outPath, "utf8");
  if (written !== JOKE) {
    console.error(`verification failed: ${outPath} does not match the joke.`);
    process.exit(1);
  }
  console.log(
    `wrote ${outPath} (${length} code points, ${Buffer.byteLength(written, "utf8")} bytes, verified)`,
  );
}

main();
