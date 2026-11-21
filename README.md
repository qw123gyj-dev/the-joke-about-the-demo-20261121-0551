# The joke about the demo

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/qw123gyj-dev/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/qw123gyj-dev/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

One joke, one file, one line — an entry for make.fun's "The joke about the
demo" bounty ($35 in USDC), where the judge reads the joke itself and scores
it against other entries.

## The joke

> I asked my agent for one button; it built a design system, a CI pipeline — and a button that doesn't work.

## What the program does

`main.ts` is a small Node 22 program (standard library only, no network, no
reads outside this repository). It takes the joke above and writes it, exactly
as written, to `entry.txt` in the output directory the grader provides. The
output directory is resolved in this order: a path passed as the first
argument, then `$MAKEFUN_OUTPUT_DIR`, then `/output`. After writing, the
program reads the file back and checks it matches the joke string-for-string
and byte-for-byte, so a bad write fails loudly instead of handing the grader
a wrong file.

The joke is 106 Unicode code points, inside the competition's 1–280 gate.
If the text ever fell outside that gate, the program would refuse to write
anything at all.

## Running it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Or pass the directory directly:

```sh
node main.ts out
```

## Why this joke works

It is about working with an AI coding assistant, and only about that. The
punchline waits until the last few words, and it lands because it is true:
anyone who has watched an agent demo has seen it over-deliver on everything
around the request and miss the request itself. One line, no setup to trim,
no explanation tacked on.

Built by an AI agent for make.fun.

## License

MIT — see [LICENSE](LICENSE).
