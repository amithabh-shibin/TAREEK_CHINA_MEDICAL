(function () {
  'use strict';
  var SUPPORTED = ['en', 'zh', 'ar', 'ru'];
  var dictionaries = window.SITE_TRANSLATIONS || {};
  var picker = document.getElementById('site-language');
  var status = document.getElementById('language-status');
  var originals = new WeakMap();
  var attributes = new WeakMap();
  var originalTitle = document.title;
  var current = 'en';
  function normalize(value) { return value.replace(/\s+/g, ' ').trim(); }
  function desired() { return 'en'; }
  function translated(value) {
    if (current === 'en') return value;
    var map = dictionaries[current] || {};
    var result = map[normalize(value)];
    if (typeof result !== 'string') return value;
    var leading = (value.match(/^\s*/) || [''])[0];
    var trailing = (value.match(/\s*$/) || [''])[0];
    return leading + result + trailing;
  }
  function excluded(element) {
    return !element || !!element.closest('script,style,noscript,code,pre,textarea,.notranslate,[translate="no"]');
  }
  function translateText(node) {
    if (excluded(node.parentElement) || !node.nodeValue.trim()) return;
    var entry = originals.get(node);
    // Preserve the source across language changes; accept new source content from forms/cards.
    if (!entry || node.nodeValue !== entry.last) entry = { source: node.nodeValue, last: node.nodeValue };
    var next = translated(entry.source);
    if (node.nodeValue !== next) node.nodeValue = next;
    entry.last = next;
    originals.set(node, entry);
  }
  function translateAttributes(element) {
    if (excluded(element)) return;
    var entry = attributes.get(element) || {};
    ['placeholder', 'title', 'aria-label'].forEach(function (name) {
      var value = element.getAttribute(name);
      if (value === null) return;
      if (!entry[name] || value !== entry[name].last) entry[name] = { source: value, last: value };
      var next = translated(entry[name].source);
      if (value !== next) element.setAttribute(name, next);
      entry[name].last = next;
    });
    attributes.set(element, entry);
  }
  function updateLinks() {
    document.querySelectorAll('a[href]').forEach(function (anchor) {
      var href = anchor.getAttribute('href');
      if (!href || /^(?:[a-z]+:|\/\/|#)/i.test(href) || !/\.html(?:[?#]|$)/i.test(href)) return;
      var url = new URL(href, location.href);
      url.searchParams.delete('lang');
      anchor.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
    });
  }
  var observer = new MutationObserver(function () { apply(); });
  function apply() {
    observer.disconnect();
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) translateText(node);
    document.querySelectorAll('[placeholder],[title],[aria-label]').forEach(translateAttributes);
    document.documentElement.lang = current;
    document.documentElement.dir = current === 'ar' ? 'rtl' : 'ltr';
    if (picker) picker.querySelectorAll('[data-language]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.language === current));
    });
    updateLinks();
    if (current === 'en') document.title = originalTitle;
    else {
      var heading = document.querySelector('main h1');
      document.title = (heading ? heading.textContent.trim() : translated(originalTitle)) + ' | TAREEK AL BAHAR TOURS LLC';
    }
    if (status) status.textContent = '';
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  function select(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    current = lang;
    try {
      var url = new URL(location.href); url.searchParams.delete('lang');
      history.replaceState(null, '', url.href);
    } catch (e) {}
    apply();
  }
  if (picker) picker.addEventListener('click', function (event) {
    var button = event.target.closest('[data-language]');
    if (button && picker.contains(button)) select(button.dataset.language);
  });
  window.addEventListener('popstate', function () { select(desired()); });
  select(desired());
})();
