// Gera a seção de artigos a partir de _artigos/artigos.md.
// Uso: node tools/build-artigos.mjs
//
// Formato de cada artigo no arquivo-fonte (separados por uma linha "---"):
//   ---
//   slug: nome-na-url
//   title: Título do artigo
//   date: 2026-10-02
//   tema: Segurança
//   linkedin: 7511739051981529089      (id da atividade no LinkedIn)
//   description: Resumo de até ~160 caracteres para o Google.
//   ---
//   Parágrafos separados por linha em branco.
//   - Linhas iniciadas por "- " viram lista.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://gaioski.com.br';
const CSP = "default-src 'self'; img-src 'self' data:; style-src 'self'; font-src 'self'; script-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'";
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const dataPT = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} de ${MESES[m - 1]} de ${y}`; };
const icon = (id, cls = 'icon') => `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="/assets/img/icons.svg?v=2#${id}"/></svg>`;

// ---------- leitura ----------
function parse(src) {
  const parts = src.split(/\r?\n/).join('\n').split(/^---\n(?=slug:)/m).slice(1);
  return parts.map((part) => {
    const end = part.indexOf('\n---\n');
    if (end < 0) throw new Error('cabeçalho sem fechamento: ' + part.slice(0, 40));
    const meta = Object.fromEntries(part.slice(0, end).split('\n').filter(Boolean).map((l) => {
      const i = l.indexOf(':'); return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }));
    for (const k of ['slug', 'title', 'date', 'tema', 'linkedin', 'description'])
      if (!meta[k]) throw new Error(`artigo sem "${k}": ${meta.slug || part.slice(0, 40)}`);
    if (!/^[a-z0-9-]+$/.test(meta.slug)) throw new Error('slug inválido: ' + meta.slug);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) throw new Error('data inválida: ' + meta.slug);
    return { ...meta, body: part.slice(end + 5).trim() };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

function bodyHtml(body) {
  return body.split(/\n\s*\n/).map((block) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.every((l) => l.startsWith('- '))) return `<ul>\n${lines.map((l) => `  <li>${esc(l.slice(2))}</li>`).join('\n')}\n</ul>`;
    if (lines.length === 1 && lines[0].startsWith('> ')) return `<blockquote><p>${esc(lines[0].slice(2))}</p></blockquote>`;
    if (lines.length === 1 && lines[0].startsWith('## ')) return `<h2>${esc(lines[0].slice(3))}</h2>`;
    return `<p>${lines.map(esc).join(' ')}</p>`;
  }).join('\n');
}

// ---------- moldura comum ----------
const head = ({ title, description, canonical, ogType = 'website', jsonld }) => `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="${CSP}">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="pt-BR" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${SITE}/en/">
  <link rel="alternate" hreflang="x-default" href="${canonical}">
  <meta name="theme-color" content="#001f35">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="/assets/fonts/manrope-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/manrope-latin-300-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/site.css">
  <meta property="og:type" content="${ogType}">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${SITE}/assets/img/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">
${JSON.stringify(jsonld, null, 2).replace(/^/gm, '  ')}
  </script>
  <script src="/assets/js/site.js" defer></script>
</head>`;

const topbar = `  <a class="skip" href="#conteudo">Pular para o conteúdo</a>

  <header class="top">
    <div class="wrap">
      <a class="brand" href="/" aria-label="Gustavo Gaioski, início">gaioski<span>.</span></a>
      <nav class="nav" aria-label="Seções">
        <a href="/#sobre">Sobre</a>
        <a href="/#rota">Rota</a>
        <a href="/#atuacao">Atuação</a>
        <a href="/artigos/" aria-current="page">Artigos</a>
        <a href="/#contato">Contato</a>
      </nav>
      <div class="lang" role="group" aria-label="Idioma">
        <span aria-current="true" lang="pt-BR">PT</span>
        <a href="/en/" hreflang="en" lang="en">EN</a>
      </div>
    </div>
  </header>`;

const footer = `  <footer class="foot">
    <div class="wrap">
      <span>&copy; 2026 Gustavo Gaioski · Curitiba, PR</span>
      <span>Feito à mão. Sem cookies, sem rastreadores.</span>
      <a href="#conteudo">voltar ao topo &uarr;</a>
    </div>
  </footer>
</body>
</html>
`;

const author = { '@type': 'Person', name: 'Gustavo Gaioski', url: `${SITE}/`, jobTitle: 'Chief Commercial Officer (CCO)', worksFor: { '@type': 'Organization', name: 'IntekNet', url: 'https://inteknet.com.br/' } };

// ---------- páginas ----------
function articlePage(a, all) {
  const url = `${SITE}/artigos/${a.slug}/`;
  const li = `https://www.linkedin.com/feed/update/urn:li:activity:${a.linkedin}/`;
  const related = all.filter((x) => x.slug !== a.slug && x.tema === a.tema).concat(all.filter((x) => x.slug !== a.slug && x.tema !== a.tema)).slice(0, 3);
  const jsonld = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.title, description: a.description, datePublished: a.date, inLanguage: 'pt-BR', mainEntityOfPage: url, url, image: `${SITE}/assets/img/og-image.jpg`, author, publisher: author, sameAs: [li] };
  return `${head({ title: `${a.title} · Gustavo Gaioski`, description: a.description, canonical: url, ogType: 'article', jsonld })}
<body>
${topbar}

  <main id="conteudo">
    <article class="post">
      <div class="wrap">
        <header class="post__head">
          <p class="post__meta"><a href="/artigos/">Artigos</a><span>${esc(a.tema)}</span><time datetime="${a.date}">${dataPT(a.date)}</time></p>
          <h1>${esc(a.title)}</h1>
          <p class="post__lede">${esc(a.description)}</p>
        </header>
        <div class="post__body">
${bodyHtml(a.body).replace(/^/gm, '          ')}
        </div>
        <footer class="post__foot">
          <p class="signature"><img src="/assets/img/gustavo-480.webp" width="52" height="52" alt="Foto de Gustavo Gaioski" loading="lazy"><span><strong>Gustavo Gaioski</strong><span>CCO · IntekNet</span></span></p>
          <div class="post__links">
            <a href="${li}" rel="noopener" target="_blank">${icon('linkedin')}Publicado originalmente no LinkedIn${icon('arrow-up-right', 'icon icon--ext')}</a>
            <a class="btn" href="/#contato">Vamos conversar</a>
          </div>
        </footer>
      </div>
    </article>

    <section class="post-more" aria-labelledby="mais-t">
      <div class="wrap">
        <p class="label"><b>+</b> Continue lendo</p>
        <h2 id="mais-t" class="visually-hidden">Outros artigos</h2>
        <ul class="post-list post-list--compact">
${related.map(card).join('\n')}
        </ul>
        <p class="post-more__all"><a class="link-arrow" href="/artigos/">ver todos os artigos${icon('arrow-right')}</a></p>
      </div>
    </section>
  </main>

${footer}`;
}

function card(a) {
  return `          <li class="post-card">
            <p class="post-card__meta"><span>${esc(a.tema)}</span><time datetime="${a.date}">${dataPT(a.date)}</time></p>
            <h3><a href="/artigos/${a.slug}/">${esc(a.title)}</a></h3>
            <p>${esc(a.description)}</p>
          </li>`;
}

function indexPage(all) {
  const url = `${SITE}/artigos/`;
  const temas = [...new Set(all.map((a) => a.tema))];
  const jsonld = { '@context': 'https://schema.org', '@type': 'Blog', name: 'Artigos de Gustavo Gaioski', url, inLanguage: 'pt-BR', author, blogPost: all.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: `${SITE}/artigos/${a.slug}/`, datePublished: a.date })) };
  return `${head({ title: 'Artigos · Gustavo Gaioski · Infraestrutura, Microsoft 365, segurança e gestão de TI', description: 'Casos reais e ideias sobre infraestrutura, Microsoft 365, segurança da informação, continuidade e gestão de TI, escritos por Gustavo Gaioski, CCO na IntekNet.', canonical: url, jsonld })}
<body>
${topbar}

  <main id="conteudo">
    <section class="posts-hero" aria-labelledby="artigos-t">
      <div class="wrap">
        <p class="label"><b>${String(all.length).padStart(2, '0')}</b> Artigos</p>
        <h1 id="artigos-t">O que a operação me ensinou, <em>escrito para quem decide.</em></h1>
        <p class="posts-hero__lede">Casos reais e ideias sobre infraestrutura, Microsoft 365, segurança e gestão de TI. Publicados primeiro no LinkedIn, reunidos aqui.</p>
        <p class="post-tags">${temas.map((t) => `<span>${esc(t)}</span>`).join('')}</p>
      </div>
    </section>
    <section class="posts" aria-label="Lista de artigos">
      <div class="wrap">
        <ul class="post-list">
${all.map(card).join('\n')}
        </ul>
      </div>
    </section>
  </main>

${footer}`;
}

function sitemap(all) {
  const today = new Date().toISOString().slice(0, 10);
  const alt = (pt, en) => `\n    <xhtml:link rel="alternate" hreflang="pt-BR" href="${pt}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${pt}"/>`;
  const u = (loc, lastmod, extra = '') => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>${extra}\n  </url>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[
    u(`${SITE}/`, today, alt(`${SITE}/`, `${SITE}/en/`)),
    u(`${SITE}/en/`, today, alt(`${SITE}/`, `${SITE}/en/`)),
    u(`${SITE}/artigos/`, all[0].date),
    ...all.map((a) => u(`${SITE}/artigos/${a.slug}/`, a.date)),
  ].join('\n')}
</urlset>
`;
}

// ---------- execução ----------
const all = parse(readFileSync(join(root, '_artigos/artigos.md'), 'utf8'));
const slugs = new Set();
for (const a of all) { if (slugs.has(a.slug)) throw new Error('slug repetido: ' + a.slug); slugs.add(a.slug); }

const outDir = join(root, 'artigos');
if (existsSync(outDir)) rmSync(outDir, { recursive: true });
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'index.html'), indexPage(all));
for (const a of all) {
  mkdirSync(join(outDir, a.slug), { recursive: true });
  writeFileSync(join(outDir, a.slug, 'index.html'), articlePage(a, all));
}
writeFileSync(join(root, 'sitemap.xml'), sitemap(all));
console.log(`✓ ${all.length} artigos gerados em /artigos/ e sitemap atualizado`);
