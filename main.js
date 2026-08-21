/* =========================================================
   Ana Cristina Velásquez De La Cruz — main.js
   Sin dependencias. Patrón IIFE. Cada init aislado en try/catch:
   si uno falla, el resto del sitio sigue funcionando.
   ========================================================= */
(function () {
  'use strict';

  function safe(fn, name) {
    try { fn(); } catch (err) {
      if (window.console) console.warn('[init] ' + name + ' falló:', err);
    }
  }

  /* ---------- 1 · Cortina de entrada ---------- */
  function initSplash() {
    var splash = document.getElementById('splash');
    if (!splash) return;
    var hide = function () { splash.classList.add('is-done'); };
    // Red de seguridad doble: el CSS ya la oculta a los 2.4s aunque esto falle.
    window.setTimeout(hide, 1800);
    window.addEventListener('load', function () { window.setTimeout(hide, 900); });
  }

  /* ---------- 2 · Aparición por scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    var showAll = function () {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-in');
    };

    if (!('IntersectionObserver' in window)) { showAll(); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });

    for (var i = 0; i < items.length; i++) io.observe(items[i]);

    // Si algo quedó oculto a los 6 segundos, se muestra igual.
    window.setTimeout(showAll, 6000);
  }

  /* ---------- 3 · Índice lateral activo ---------- */
  function initScrollSpy() {
    var links = document.querySelectorAll('.rail__nav a[data-target]');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var map = {};
    for (var i = 0; i < links.length; i++) map[links[i].getAttribute('data-target')] = links[i];

    var sections = document.querySelectorAll('.sec[id]');
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var active = map[entry.target.id];
        if (!active) return;
        for (var j = 0; j < links.length; j++) links[j].classList.remove('is-active');
        active.classList.add('is-active');
      });
    }, { threshold: 0.05, rootMargin: '-45% 0px -45% 0px' });

    for (var k = 0; k < sections.length; k++) spy.observe(sections[k]);
  }

  /* ---------- 4 · Contadores ---------- */
  function initCounters() {
    var nums = document.querySelectorAll('.fig__n[data-count]');
    if (!nums.length || !('IntersectionObserver' in window)) return;

    var run = function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
      // Los años no se animan: contar hasta 1994 se ve absurdo.
      if (target > 500) { el.textContent = target; return; }

      var start = null, dur = 1100;
      var step = function (ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) window.requestAnimationFrame(step);
        else el.textContent = target;
      };
      window.requestAnimationFrame(step);
    };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.05 });

    for (var i = 0; i < nums.length; i++) io.observe(nums[i]);
  }

  /* ---------- 5 · Menú móvil ---------- */
  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mobileNav');
    if (!toggle || !nav) return;

    var close = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) links[i].addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------- 6 · Año del pie ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Arranque ---------- */
  function boot() {
    safe(initSplash, 'splash');
    safe(initReveal, 'reveal');
    safe(initScrollSpy, 'scrollspy');
    safe(initCounters, 'counters');
    safe(initMobileNav, 'mobilenav');
    safe(initYear, 'year');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
