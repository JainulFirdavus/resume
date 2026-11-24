// Build: copies the static site into dist/ for Render (or any static host).
// No dependencies. Usage: npm run build
import { rmSync, mkdirSync, copyFileSync, readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
const FILES = ['index.html', 'favicon.svg'];

const html = readFileSync(join(root, 'index.html'), 'utf8');
for (const must of ['<!doctype html>', '<title>', '</html>']) {
  if (!html.toLowerCase().includes(must.toLowerCase())) {
    console.error(`Build failed: index.html is missing ${must}`);
    process.exit(1);
  }
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const f of FILES) {
  copyFileSync(join(root, f), join(dist, f));
  console.log(`  dist/${f}  ${(statSync(join(dist, f)).size / 1024).toFixed(1)} KB`);
}
console.log('Build complete → dist/');
