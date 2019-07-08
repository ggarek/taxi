#!/usr/bin/env node

const [a, p, b, c] = process.argv.slice(2);

if ([a, p, b].filter(Boolean).length !== 3) {
  throw new Error('Please give me three characters!');
}

const currentProgress = Number(c);
if (
  !Number.isFinite(currentProgress) ||
  currentProgress < 0 ||
  currentProgress > 100
) {
  throw new Error('Please, give me a number in [0, 100] as well');
}

const PROGRESS_CHAR_LEN = 25;
const progress = Math.ceil((c / 100) * 25);

if (progress <= 0) {
  console.log('💥');
} else {
  console.log([a, new Array(progress).join(p), b].join(''));
}
