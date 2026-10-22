/* AUROR — brand name.
   One stored string drives every header on every page. The mark shows the
   first character, the wordmark the whole name; the mark is fixed in height
   and free in width, so a long name simply pushes the wordmark right.
   Settings writes through AurorBrand.set(); other pages pick the change up
   on load, and live via the storage event when they are open side by side. */
(function (global) {
  'use strict';

  var KEY = 'auror.brandName';
  var FALLBACK = 'AUROR';

  function get() {
    try { return localStorage.getItem(KEY) || FALLBACK; }
    catch (e) { return FALLBACK; }
  }

  function apply(name) {
    var value = (name || '').trim() || FALLBACK;
    document.querySelectorAll('.dsBrandWord').forEach(function (el) { el.textContent = value; });
    document.querySelectorAll('.dsBrandMark').forEach(function (el) {
      if (el.querySelector('img')) return;         // a logo overrides the initial
      el.textContent = value.charAt(0).toUpperCase();
    });
    document.querySelectorAll('[data-brand-name]').forEach(function (el) {
      if (el === document.activeElement) return;   // never rewrite what is being typed
      if ('value' in el && el.tagName === 'INPUT') el.value = value;
      else el.textContent = value;
    });
  }

  function set(name) {
    var value = (name || '').trim() || FALLBACK;
    try { localStorage.setItem(KEY, value); } catch (e) {}
    apply(value);
    return value;
  }

  global.AurorBrand = { get: get, set: set, apply: apply, reset: function () { return set(FALLBACK); } };

  function init() { apply(get()); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  global.addEventListener('storage', function (e) { if (e.key === KEY) apply(get()); });
})(window);
