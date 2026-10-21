(function () {
  'use strict';
  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  if (!header || !nav) return;
  var pending = false;
  function fit() {
    pending = false;
    header.classList.remove('compact-nav');
    if (window.innerWidth < 1440) return;
    var links = Array.from(nav.children).filter(function (el) {
      return getComputedStyle(el).display !== 'none';
    });
    var gap = parseFloat(getComputedStyle(nav).columnGap) || 0;
    var required = links.reduce(function (sum, el) { return sum + el.getBoundingClientRect().width; }, 0) + Math.max(0, links.length - 1) * gap;
    header.classList.toggle('compact-nav', required > nav.getBoundingClientRect().width + 1);
  }
  function queue() {
    if (!pending) { pending = true; requestAnimationFrame(fit); }
  }
  window.addEventListener('resize', queue, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(queue);
  new MutationObserver(queue).observe(nav, { childList: true, characterData: true, subtree: true });
  new MutationObserver(queue).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  fit();
})();
