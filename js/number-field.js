/* AUROR — number field stepper.
   Injects the two step buttons into every .inputUnit that wraps a
   number input, so the markup stays just input + unit. Stepping honours
   the input's own step/min/max and fires `input` and `change`, so anything
   listening to the field (the saved-hint flash, validation) still hears it. */
(function (global) {
  'use strict';

  var UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 15l7-7 7 7"></path></svg>';
  var DOWN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 9l7 7 7-7"></path></svg>';

  function decimals(step) {
    var s = String(step);
    var i = s.indexOf('.');
    return i < 0 ? 0 : s.length - i - 1;
  }

  function build(wrap) {
    var input = wrap.querySelector('input[type="number"]');
    if (!input || wrap.querySelector('.stepper')) return;

    var stepper = document.createElement('div');
    stepper.className = 'stepper';

    function make(html, dir, label) {
      var b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = html;
      b.setAttribute('aria-label', label);
      b.tabIndex = -1;                       // the input already takes focus
      b.addEventListener('click', function () { bump(dir); });
      return b;
    }

    function bump(dir) {
      var step = parseFloat(input.step) || 1;
      var min = input.min === '' ? -Infinity : parseFloat(input.min);
      var max = input.max === '' ? Infinity : parseFloat(input.max);
      var cur = parseFloat(input.value);
      if (isNaN(cur)) cur = isFinite(min) ? min : 0;
      var next = cur + dir * step;
      next = Math.min(max, Math.max(min, next));
      input.value = next.toFixed(decimals(step));
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }

    stepper.appendChild(make(UP, 1, 'Increase'));
    stepper.appendChild(make(DOWN, -1, 'Decrease'));
    wrap.appendChild(stepper);
  }

  function init(root) {
    (root || document).querySelectorAll('.inputUnit').forEach(build);
  }

  global.AurorNumberField = { init: init };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();
})(window);
