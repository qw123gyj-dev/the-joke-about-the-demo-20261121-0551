// the-joke-about-the-demo-20261121-0551 — make.fun program entry.
// One joke about working beside an AI coding agent, written to entry.txt
// in the directory the grader provides. Node 22 standard library only:
// no network, no reads outside this repo, one deterministic output file.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//             (or: node main.ts out)

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

const JOKE =
  "I asked my agent for one button; it built a design system, a CI pipeline — and a button that doesn't work.";

function codePointCount(text: string): number {
  return Array.from(text).length;
}

function resolveOutDir(): string {
  // An explicit path argument wins, then the grader's env var, then /output.
  if (process.argv[2]) return process.argv[2];
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  return '/output';
}

function main(): void {
  const length = codePointCount(JOKE);
  if (length < MIN_CODE_POINTS || length > MAX_CODE_POINTS) {
    throw new Error(
      `joke length ${length} code points is outside the ${MIN_CODE_POINTS}–${MAX_CODE_POINTS} gate; refusing to write.`,
    );
  }
  if (JOKE.trim().length === 0) {
    throw new Error('joke is blank; refusing to write.');
  }

  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, 'entry.txt');
  if (existsSync(target) && statSync(target).isDirectory()) {
    throw new Error(`${target} is a directory; refusing to write.`);
  }
  writeFileSync(target, JOKE, 'utf8');

  // Read the file back and confirm it is exactly the joke: same string
  // and same byte length, so an encoding slip cannot hide behind a match.
  const written = readFileSync(target, 'utf8');
  const writtenBytes = readFileSync(target).length;
  if (written !== JOKE || writtenBytes !== Buffer.byteLength(JOKE, 'utf8')) {
    throw new Error('entry.txt does not match the joke after writing.');
  }
  console.log(`wrote ${target} (${length} code points, ${writtenBytes} bytes)`);
}

main();
