/* ═══════════════════════════════════════════════════════════
   OVER ONS — GSAP animaties
═══════════════════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

/* nav altijd scrolled op deze pagina */
document.getElementById('nav').classList.add('scrolled');

/* ── HERO woorden invliegen ──────────────────────────────── */
gsap.from('.oo-hero__title .word', {
  y: 70, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out', delay: 0.3
});
gsap.from('.oo-hero__sub', {
  y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.75
});

/* ── MISSIE ──────────────────────────────────────────────── */
gsap.from('.oo-missie__title', {
  y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-missie', start: 'top 75%' }
});
gsap.from('.oo-missie__left p', {
  y: 20, opacity: 0, stagger: 0.12, duration: 0.65, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-missie__left', start: 'top 75%' }
});
gsap.to('.oo-waarde', {
  x: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-waarden', start: 'top 78%' }
});

/* ── MODEL pijlers ───────────────────────────────────────── */
gsap.to('.oo-model__pijler', {
  y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-model__grid', start: 'top 78%' }
});

/* ── TEAM kaarten staggered grid ─────────────────────────── */
gsap.to('.oo-team__member', {
  y: 0, opacity: 1,
  stagger: { amount: 0.6, grid: 'auto', from: 'start' },
  duration: 0.65, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-team__grid', start: 'top 80%' }
});

/* ── QUOTE ───────────────────────────────────────────────── */
gsap.from('.oo-quote__text', {
  scale: 0.94, opacity: 0, duration: 0.9, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-quote', start: 'top 75%' }
});

/* ── CONTACT CTA ─────────────────────────────────────────── */
gsap.from('.oo-contact-cta h2', {
  y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-contact-cta', start: 'top 78%' }
});
gsap.from('.oo-contact-cta p, .oo-contact-cta .btn', {
  y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
  scrollTrigger: { trigger: '.oo-contact-cta', start: 'top 75%' }
});

/* ── MOBILE NAV ──────────────────────────────────────────── */
document.getElementById('navHamburger').addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
