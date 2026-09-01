/* =========================================================
   Shared effects: floating particles + scroll/fade reveals
   ========================================================= */

(function () {
  function spawnParticles(count) {
    var field = document.getElementById('particles');
    if (!field) return;
    var n = count || 22;
    for (var i = 0; i < n; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      var size = (Math.random() * 2.2 + 1).toFixed(1);
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.top = (Math.random() * 100) + 'vh';
      p.style.animationDelay = (Math.random() * 14).toFixed(2) + 's';
      p.style.animationDuration = (10 + Math.random() * 10).toFixed(1) + 's';
      field.appendChild(p);
    }
  }

  function initFadeReveals() {
    var els = document.querySelectorAll('.fade-el, .fade-up');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    spawnParticles(22);
    initFadeReveals();
  });

  window.DariuzFX = { spawnParticles: spawnParticles, initFadeReveals: initFadeReveals };
})();
