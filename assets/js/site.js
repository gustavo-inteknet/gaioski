// Rota: cada salto "responde" em sequência ao entrar na tela, como um traceroute.
// Menu: marca a seção visível.
(() => {
  const root = document.documentElement;
  const top = document.querySelector('.top');
  const onScroll = () => top && top.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  requestAnimationFrame(onScroll);

  if (!('IntersectionObserver' in window)) return;

  const links = new Map([...document.querySelectorAll('.nav a[href^="#"]')].map((a) => [a.hash.slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      links.forEach((a, id) => (id === e.target.id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const path = document.querySelector('.hops');
  const hops = [...document.querySelectorAll('.hop')];
  if (!path || !hops.length) return;
  root.classList.add('js');

  new IntersectionObserver((entries, io) => {
    if (entries.some((e) => e.isIntersecting)) { path.classList.add('is-drawn'); io.disconnect(); }
  }, { rootMargin: '0px 0px -20% 0px' }).observe(path);

  let queued = 0;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      const delay = 160 * queued++;
      setTimeout(() => { e.target.classList.add('is-live'); queued = Math.max(0, queued - 1); }, delay);
    }
  }, { rootMargin: '0px 0px -12% 0px' });
  hops.forEach((h) => io.observe(h));
})();
