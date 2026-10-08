import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
const base = '/anurak-research-community/';
const routes = [
  '',
  'about/',
  'research/',
  'laboratory/',
  'community/',
  'publications/',
  'news/',
  'contact/',
];
for (const route of routes)
  assert(
    existsSync(join('dist', route, 'index.html')),
    `Missing route: ${route}`,
  );
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((f) =>
    f.isDirectory() ? walk(join(dir, f.name)) : [join(dir, f.name)],
  );
}
const files = walk('dist').filter((f) => f.endsWith('.html'));
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `${file}: exactly one h1`,
  );
  assert(html.includes('lang="en"'), `${file}: language`);
  assert(
    !html.includes('Replace with a verified publication title'),
    'Draft content leaked',
  );
  assert(!html.includes('undefined'), `${file}: undefined output`);
  for (const [, value] of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(value)) continue;
    assert(value.startsWith(base), `${file}: missing base prefix: ${value}`);
    const path = decodeURIComponent(value.split(/[?#]/)[0].slice(base.length));
    assert(
      existsSync(
        join('dist', path, path.endsWith('/') || !path ? 'index.html' : ''),
      ),
      `${file}: broken link ${value}`,
    );
  }
}
assert(
  !existsSync('dist/publications/example-draft/index.html'),
  'Draft detail page leaked',
);
console.log(
  `Passed: ${routes.length} required routes; ${files.length} pages checked for links, headings, language, and draft exclusion.`,
);
