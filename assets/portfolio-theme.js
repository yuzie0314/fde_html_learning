/* ============================================================
   Zorya Portfolio — shared behavior
   Theme toggle, mobile nav, reveal-on-scroll, tooltip helpers.
   Pages may add their own chart-rendering script after this one.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var themeBtn = document.getElementById('themeToggle');
  var THEME_KEY = 'zorya-portfolio-theme';

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function setStoredTheme(v) {
    try { localStorage.setItem(THEME_KEY, v); } catch (e) {}
  }
  var stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var effectiveDark = current ? current === 'dark' : prefersDark;
      var next = effectiveDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      setStoredTheme(next);
    });
  }

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mainNav.classList.remove('open'); });
    });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var tooltip = document.getElementById('chartTooltip');
  function showTooltip(evt, html) {
    if (!tooltip) return;
    tooltip.innerHTML = html;
    tooltip.classList.add('show');
    moveTooltip(evt);
  }
  function moveTooltip(evt) {
    if (!tooltip) return;
    var x = evt.clientX, y = evt.clientY;
    var padding = 14;
    tooltip.style.left = Math.min(x + padding, window.innerWidth - 270) + 'px';
    tooltip.style.top = Math.max(y - 40, 8) + 'px';
  }
  function hideTooltip() { if (tooltip) tooltip.classList.remove('show'); }

  function fmt(n) { return 'NT$ ' + n.toLocaleString('en-US'); }
  function pct(n) { return (n * 100).toFixed(1) + '%'; }
  function cssVar(name) { return getComputedStyle(root).getPropertyValue(name).trim(); }

  window.addEventListener('mousemove', function (evt) {
    if (tooltip && tooltip.classList.contains('show')) moveTooltip(evt);
  });

  // Expose small shared helpers for per-page chart scripts.
  window.ZoryaTheme = { showTooltip: showTooltip, moveTooltip: moveTooltip, hideTooltip: hideTooltip, fmt: fmt, pct: pct, cssVar: cssVar };
})();
