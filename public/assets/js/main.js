(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------- current section */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = navLinks
    .map(function (a) { return document.getElementById((a.getAttribute('href') || '').slice(1)); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* --------------------------------------------------------------- scroll reveal */
  var enterEls = Array.prototype.slice.call(document.querySelectorAll('.enter'));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    enterEls.forEach(function (el) { el.classList.add('is-entered'); });
  } else {
    var reveal = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-entered');
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
    enterEls.forEach(function (el) { reveal.observe(el); });
  }

  /* ------------------------------------------------------------- mobile navigation */
  var menuButton = document.querySelector('.menu-button');
  var menuPanel = document.getElementById('mobile-panel');
  if (menuButton && menuPanel) {
    var setMenu = function (open) {
      menuPanel.hidden = !open;
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    };
    setMenu(false);
    menuButton.addEventListener('click', function () { setMenu(menuPanel.hidden); });
    menuPanel.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !menuPanel.hidden) { setMenu(false); menuButton.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768 && !menuPanel.hidden) setMenu(false);
    });
  }

  /* ------------------------------------------------------ skills band pause control */
  var band = document.querySelector('.marquee-band');
  var bandButton = document.querySelector('.marquee-band__toggle');
  if (band && bandButton) {
    var ICON_PAUSE = '<rect x="14" y="4" width="4" height="16" rx="1"></rect>' +
                     '<rect x="6" y="4" width="4" height="16" rx="1"></rect>';
    var ICON_PLAY = '<polygon points="6 3 20 12 6 21 6 3"></polygon>';
    var icon = bandButton.querySelector('svg');

    var setPaused = function (paused) {
      band.classList.toggle('is-paused', paused);
      bandButton.setAttribute('aria-pressed', paused ? 'true' : 'false');
      bandButton.setAttribute('aria-label',
        paused ? 'Resume the moving skills band' : 'Pause the moving skills band');
      if (icon) {
        icon.innerHTML = paused ? ICON_PLAY : ICON_PAUSE;
        icon.setAttribute('class', paused ? 'lucide lucide-play' : 'lucide lucide-pause');
      }
    };

    setPaused(false);
    bandButton.addEventListener('click', function () {
      setPaused(bandButton.getAttribute('aria-pressed') !== 'true');
    });
  }
})();
