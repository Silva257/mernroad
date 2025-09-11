// script.js

// TYPEWRITER: types the title once on load (non-blocking)
(function typewriter() {
  const el = document.getElementById('main-title');
  if (!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  let i = 0;
  const speed = 24; // ms per char
  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else {
      // remove caret after finished
      el.style.borderRight = '0';
    }
  }
  // small delay, then start
  setTimeout(step, 300);
})();

// SMOOTH SCROLL for internal nav links
(function smoothNav() {
  const navLinks = document.querySelectorAll('.top-nav a, .navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (ev) {
      const href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      ev.preventDefault();
      const targetEl = document.querySelector(href);
      if (!targetEl) return;
      // modern smooth scroll
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // update hash without jumping
      history.replaceState(null, '', href);
    });
  });
})();

// REVEAL ON SCROLL: fade-up sections using IntersectionObserver
(function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reveals.length === 0) {
    // fallback: immediately show
    reveals.forEach(r => r.classList.add('active'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // optionally unobserve after revealed
        io.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

  reveals.forEach(r => io.observe(r));
})();

// Optional: small accessibility enhancer — focus outline when using keyboard
(function keyboardOutline() {
  const body = document.body;
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
})();
