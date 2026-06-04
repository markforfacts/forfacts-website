/* ═══════════════════════════════════════════════════════════
   FORFACTS — GSAP ScrollTrigger animaties
   Apple-stijl: invliegende tekst, sticky reveals, stagger
═══════════════════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

/* ── NAV scroll state ────────────────────────────────────── */
const nav = document.getElementById('nav');
ScrollTrigger.create({
  start: 'top -80',
  onUpdate: (self) => {
    nav.classList.toggle('scrolled', self.scroll() > 80);
  }
});

/* ── HERO entrance ───────────────────────────────────────── */
const heroTl = gsap.timeline({ delay: 0.2 });
heroTl
  .to('#heroLabel', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
  .from('#heroHeadline .word', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power4.out'
  }, '-=0.3')
  .to('#heroSub', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
  .to('#heroCtas', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
  .to('#heroScroll', { opacity: 1, duration: 0.5 }, '-=0.2');

gsap.set('#heroSub', { y: 20 });
gsap.set('#heroCtas', { y: 20 });
gsap.set('#heroScroll', { opacity: 0 });

/* hero blocks subtle parallax */
gsap.to('.hero-block--rose', {
  y: -80,
  ease: 'none',
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
});
gsap.to('.hero-block--black', {
  y: -120,
  ease: 'none',
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
});

/* ── STATEMENT reveal ────────────────────────────────────── */
gsap.from('.sq-line--rose', {
  x: -60, opacity: 0, duration: 0.9, ease: 'power3.out',
  scrollTrigger: { trigger: '#statement', start: 'top 75%' }
});
gsap.from('.sq-line--black', {
  x: -40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.15,
  scrollTrigger: { trigger: '#statement', start: 'top 75%' }
});
gsap.from('.statement-body', {
  y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3,
  scrollTrigger: { trigger: '#statement', start: 'top 75%' }
});

/* ── FILOSOFIE sticky scroll + progress bar ──────────────── */
const pijlers = document.querySelectorAll('.pijler');
const progressBar = document.getElementById('filosProgress');

ScrollTrigger.create({
  trigger: '#filosofie',
  start: 'top top',
  end: 'bottom bottom',
  scrub: true,
  onUpdate: (self) => {
    progressBar.style.height = (self.progress * 100) + '%';
    pijlers.forEach((p, i) => {
      const threshold = i / pijlers.length;
      p.classList.toggle('visible', self.progress >= threshold - 0.05);
    });
  }
});

/* ── DIENSTEN kaarten stagger ────────────────────────────── */
gsap.from('#diensten .section-header', {
  y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '#diensten', start: 'top 75%' }
});
document.querySelectorAll('.dienst-card').forEach((card, i) => {
  gsap.to(card, {
    y: 0, opacity: 1, duration: 0.7,
    ease: 'power3.out',
    delay: i * 0.12,
    scrollTrigger: { trigger: card, start: 'top 82%' }
  });
});

/* ── QUOTE BAND stagger ──────────────────────────────────── */
gsap.to('.qb-card', {
  y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out',
  scrollTrigger: { trigger: '#quote-band', start: 'top 75%' }
});

/* ── CASES section header ────────────────────────────────── */
gsap.from('#cases .section-header', {
  y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '#cases', start: 'top 75%' }
});

/* cases card entrance */
document.querySelectorAll('.case-card').forEach((card, i) => {
  gsap.from(card, {
    y: 50, opacity: 0, duration: 0.7,
    ease: 'power3.out',
    delay: i * 0.1,
    scrollTrigger: { trigger: '#cases', start: 'top 70%' }
  });
});

/* cases carousel nav */
const casesTrack = document.getElementById('casesTrack');
const caseCards = casesTrack.querySelectorAll('.case-card');
let currentCase = 0;
const cardWidth = () => caseCards[0].offsetWidth + 24;

document.getElementById('casesNext').addEventListener('click', () => {
  if (currentCase < caseCards.length - 1) {
    currentCase++;
    gsap.to(casesTrack, { x: -(cardWidth() * currentCase), duration: 0.6, ease: 'power3.out' });
  }
});
document.getElementById('casesPrev').addEventListener('click', () => {
  if (currentCase > 0) {
    currentCase--;
    gsap.to(casesTrack, { x: -(cardWidth() * currentCase), duration: 0.6, ease: 'power3.out' });
  }
});

/* ── OVER ONS section ────────────────────────────────────── */
gsap.from('.over-block--rose', {
  x: -60, opacity: 0, duration: 0.9, ease: 'power3.out',
  scrollTrigger: { trigger: '#over', start: 'top 70%' }
});
gsap.from('.over-block--black', {
  x: 60, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
  scrollTrigger: { trigger: '#over', start: 'top 70%' }
});
gsap.from('.over-content .section-label', {
  x: 30, opacity: 0, duration: 0.6, ease: 'power3.out',
  scrollTrigger: { trigger: '#over', start: 'top 72%' }
});
gsap.from('.over-title .word', {
  y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
  scrollTrigger: { trigger: '.over-title', start: 'top 80%' }
});
gsap.from('.over-content p', {
  y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
  scrollTrigger: { trigger: '.over-content', start: 'top 72%' }
});
gsap.from('.stat', {
  y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
  scrollTrigger: { trigger: '.over-stats', start: 'top 80%' }
});

/* stat counter animation */
document.querySelectorAll('.stat-num').forEach(el => {
  const target = parseInt(el.textContent);
  if (isNaN(target)) return;
  const suffix = el.textContent.replace(/[0-9]/g, '');
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.from({ val: 0 }, {
        val: target, duration: 1.5, ease: 'power2.out',
        onUpdate() { el.textContent = Math.round(this.targets()[0].val) + suffix; }
      });
    }
  });
});

/* ── CONTACT section ─────────────────────────────────────── */
gsap.from('.contact-title', {
  y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
  scrollTrigger: { trigger: '#contact', start: 'top 75%' }
});
gsap.from('.contact-detail', {
  y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-details', start: 'top 80%' }
});
gsap.from('.contact-form .form-group', {
  y: 24, opacity: 0, stagger: 0.08, duration: 0.55, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-form', start: 'top 78%' }
});
gsap.from('.contact-form .btn', {
  y: 16, opacity: 0, duration: 0.5, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-form', start: 'top 70%' }
});

/* ── TESTIMONIALS auto-rotate ────────────────────────────── */
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let activeTestimonial = 0;
let testimonialTimer;

function showTestimonial(index) {
  testimonials[activeTestimonial].classList.remove('active');
  dots[activeTestimonial].classList.remove('active');
  activeTestimonial = index;
  testimonials[activeTestimonial].classList.add('active');
  dots[activeTestimonial].classList.add('active');
}

function startTimer() {
  testimonialTimer = setInterval(() => {
    showTestimonial((activeTestimonial + 1) % testimonials.length);
  }, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(testimonialTimer);
    showTestimonial(parseInt(dot.dataset.index));
    startTimer();
  });
});
startTimer();

/* ── MOBILE NAV toggle ───────────────────────────────────── */
document.getElementById('navHamburger').addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

/* ── CONTACT FORM submit feedback ───────────────────────── */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'verstuurd ✓';
  btn.style.background = '#00a854';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});

/* ── SMOOTH ANCHOR SCROLL ────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    }
  });
});
