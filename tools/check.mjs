// Verificador estático do site. Uso: node tools/check.mjs
// Falha (exit 1) em qualquer violação das regras globais do plano.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);
const read = (p) => readFileSync(join(root, p), 'utf8');

const PAGES = [
  { file: 'index.html', lang: 'pt-BR' },
  { file: 'en/index.html', lang: 'en' },
];
const SECTIONS = ['sobre', 'rota', 'atuacao', 'casos', 'formacao', 'contato'];
const ALLOWED_EMAIL = 'contato@gaioski.com.br';
const ALLOWED_HOSTS = ['www.linkedin.com', 'linkedin.com', 'inteknet.com.br', 'www.inteknet.com.br', 'gaioski.com.br'];

function checkLocalRef(file, ref) {
  if (/^(https?:|mailto:|#|data:)/.test(ref)) return;
  const clean = ref.split(/[?#]/)[0];
  if (!clean) return;
  const base = clean.startsWith('/') ? root : join(root, dirname(file));
  let target = join(base, clean);
  if (clean.endsWith('/')) target = join(target, 'index.html');
  if (!existsSync(target)) fail(file, `referência local inexistente: ${ref}`);
}

function checkCommon(file, html) {
  if (/<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>/i.test(html))
    fail(file, 'script inline não permitido (CSP)');
  if (/\son[a-z]+\s*=/i.test(html)) fail(file, 'atributo on* não permitido');
  if (/\p{Extended_Pictographic}/u.test(html)) fail(file, 'emoji encontrado');
  if (/\(?\d{2}\)?\s?9?\d{4}[-\s]\d{4}/.test(html.replace(/<[^>]+>/g, ' ')))
    fail(file, 'padrão de telefone encontrado');
  for (const [, e] of html.matchAll(/([\w.+-]+@[\w-]+\.[\w.]+)/g))
    if (e !== ALLOWED_EMAIL) fail(file, `e-mail não permitido: ${e}`);

  for (const [tag] of html.matchAll(/<img\b[^>]*>/gi))
    for (const a of ['alt', 'width', 'height'])
      if (!new RegExp(`\\s${a}=`).test(tag)) fail(file, `<img> sem ${a}: ${tag.slice(0, 60)}`);

  for (const [, attr, ref] of html.matchAll(/\s(src|srcset|href)="([^"]+)"/gi)) {
    const refs = attr === 'srcset' ? ref.split(',').map((s) => s.trim().split(/\s+/)[0]) : [ref];
    for (const r of refs) {
      if (/^https?:/.test(r)) {
        const host = new URL(r).host;
        if (attr !== 'href') fail(file, `recurso externo: ${r}`);
        else if (!ALLOWED_HOSTS.includes(host)) fail(file, `link externo fora da lista: ${r}`);
      } else checkLocalRef(file, r);
    }
  }
  for (const [tag] of html.matchAll(/<link\b[^>]*>/gi))
    if (/rel="(stylesheet|preload|icon|modulepreload)"/.test(tag) && /href="https?:/.test(tag))
      fail(file, `<link> externo: ${tag}`);
}

for (const { file, lang } of PAGES) {
  if (!existsSync(join(root, file))) { fail(file, 'arquivo não existe'); continue; }
  const html = read(file);
  checkCommon(file, html);
  if (!html.includes(`<html lang="${lang}"`)) fail(file, `lang deve ser ${lang}`);
  for (const h of ['pt-BR', 'en', 'x-default'])
    if (!html.includes(`hreflang="${h}"`)) fail(file, `falta hreflang ${h}`);
  if (!/http-equiv="Content-Security-Policy"/.test(html)) fail(file, 'falta CSP');
  if (!/rel="canonical"/.test(html)) fail(file, 'falta canonical');
  if (!/property="og:image"/.test(html)) fail(file, 'falta og:image');
  if (!/application\/ld\+json/.test(html)) fail(file, 'falta JSON-LD');
  const ids = [...html.matchAll(/<section[^>]*\sid="([^"]+)"/g)].map((m) => m[1]);
  if (ids.join() !== SECTIONS.join()) fail(file, `seções ${ids.join()} ≠ ${SECTIONS.join()}`);
  if ((html.match(/class="hop[ "]/g) || []).length !== 6) fail(file, 'rota deve ter 6 saltos');
}

if (existsSync(join(root, '404.html'))) checkCommon('404.html', read('404.html'));
else fail('404.html', 'arquivo não existe');

const css = existsSync(join(root, 'assets/css/site.css')) ? read('assets/css/site.css') : '';
if (!css) fail('assets/css/site.css', 'arquivo não existe');
for (const [, u] of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
  if (/^https?:/.test(u)) fail('site.css', `url externa: ${u}`);
  else if (!u.startsWith('data:') && !existsSync(join(root, 'assets/css', u))) fail('site.css', `url inexistente: ${u}`);
}
if (/@import/.test(css)) fail('site.css', '@import não permitido');
if (!css.includes('prefers-reduced-motion')) fail('site.css', 'falta prefers-reduced-motion');

for (const f of ['CNAME', 'robots.txt', 'sitemap.xml', 'favicon.svg'])
  if (!existsSync(join(root, f))) fail(f, 'arquivo não existe');
if (existsSync(join(root, 'CNAME')) && read('CNAME').trim() !== 'gaioski.com.br') fail('CNAME', 'deve ser gaioski.com.br');

if (errors.length) {
  console.error(`✗ ${errors.length} problema(s):\n` + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('✓ site ok');
