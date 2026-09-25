// Rota: cada salto "responde" em sequência ao entrar na tela, como um traceroute.
(() => {
  const root = document.documentElement;
  const top = document.querySelector('.top');
  const onScroll = () => top && top.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  requestAnimationFrame(onScroll);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  const hops = [...document.querySelectorAll('.hop')];
  if (!hops.length) return;
  root.classList.add('js');

  let queued = 0;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      const delay = 140 * queued++;
      setTimeout(() => { e.target.classList.add('is-live'); queued = Math.max(0, queued - 1); }, delay);
    }
  }, { rootMargin: '0px 0px -12% 0px' });
  hops.forEach((h) => io.observe(h));
})();
