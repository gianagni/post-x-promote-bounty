// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
// The entry is the X post itself: one post of your own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, with a photo of its own, make.fun or @makefunai and your play
// code in its text. This program only copies POST.json, which names the post,
// from the repository root to the output directory, where the gate reads it.
// The output directory is created when it is missing, so the copy works on a
// fresh output path with no prior setup.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error('Could not copy POST.json:', (err as Error).message);
  process.exit(1);
}
