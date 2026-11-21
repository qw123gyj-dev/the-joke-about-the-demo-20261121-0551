# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/qw123gyj-dev/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/qw123gyj-dev/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

A one-line joke about working with an AI coding assistant, written for
make.fun's "The joke about the demo" bounty. The entry program writes the
joke to `/output/entry.txt` so the house can judge it.

## The joke

> I asked my agent for one button; it built a design system, a CI pipeline — and a button that doesn't work.

Ask for the smallest possible thing, get an entire platform back — except
the one thing you asked for. Every demo of an AI coding assistant ends up
somewhere near this punchline.

## How it works

`main.ts` is a plain Node 22 program using only the standard library. It
holds the joke as a constant, counts its length in Unicode code points
(106, inside the required 1–280 range), and writes it as UTF-8 to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when the variable
is unset, or to a directory passed as the first argument). If the joke ever
fell outside the length gate the program would refuse to write anything
and exit with code 1. After writing, it reads the file back and verifies
it matches byte-for-byte before reporting success.

## Run it

```sh
node main.ts
# or: MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# or: node main.ts /tmp/out
```

## License

MIT — see [LICENSE](LICENSE).
