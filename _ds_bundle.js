/* @ds-bundle: {"format":4,"namespace":"AURORDesignSystem_d785d2","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Notice","sourcePath":"components/Notice/Notice.jsx"},{"name":"TextField","sourcePath":"components/TextField/TextField.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"8c1f4afc5d0e","components/Card/Card.jsx":"d7dc952ee414","components/Notice/Notice.jsx":"ea725965b233","components/TextField/TextField.jsx":"599be2d6d0db","js/audio-bar.js":"b1c2712ec5ea","js/brand.js":"0100432e08fb","js/i18n.js":"8f5104814240","js/number-field.js":"1cd7aa9f28c0","js/overlays.js":"add4f7e9b6bb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AURORDesignSystem_d785d2 = window.AURORDesignSystem_d785d2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AUROR Button.
 * Square-cornered, 1px line, 36px tall. The system has exactly one
 * emphasis step above default (primary) and one destructive tone (danger) —
 * a third emphasis level always ends up competing with the first two.
 */
function Button({
  variant = 'default',
  icon = null,
  iconAfter = null,
  active = false,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = ['aurorBtn'];
  if (variant && variant !== 'default') classes.push(variant);
  if (active) classes.push('active');
  if (disabled) classes.push('disabled');
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classes.join(' '),
    disabled: disabled
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "btnIco"
  }, icon) : null, children, iconAfter ? /*#__PURE__*/React.createElement("span", {
    className: "btnIco"
  }, iconAfter) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** AUROR Card — the panel every section sits in. Header is optional. */
function Card({
  title = null,
  meta = null,
  padded = true,
  className = '',
  children,
  ...rest
}) {
  const classes = ['card'];
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes.join(' ')
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    className: "cardHeader"
  }, /*#__PURE__*/React.createElement("h3", null, title), meta ? /*#__PURE__*/React.createElement("span", {
    className: "small"
  }, meta) : null) : null, padded ? /*#__PURE__*/React.createElement("div", {
    className: "cardBody"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Notice/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AUROR Notice — an in-page message tied to the thing it is about.
 * Tone lives in the icon and the top rule; the body stays on the page
 * surface so long text remains readable.
 */
const TONE_ICON = {
  info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 7.5v.5"
  })),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  warn: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17v.5"
  })),
  danger: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v6M12 16.5v.5"
  }))
};
function Notice({
  tone = 'info',
  title = null,
  className = '',
  children,
  ...rest
}) {
  const classes = ['aurorNotice', `aurorNotice--${tone}`];
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes.join(' '),
    role: tone === 'danger' ? 'alert' : undefined
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, TONE_ICON[tone] || TONE_ICON.info), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("strong", null, title) : null, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Notice/Notice.jsx", error: String((e && e.message) || e) }); }

// components/TextField/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AUROR TextField — label, control, help text as one unit.
 * The help line is always rendered when present, error or not, so the
 * field never changes height when validation fires.
 */
function TextField({
  label = null,
  help = null,
  error = null,
  id = null,
  as = 'input',
  options = null,
  className = '',
  ...rest
}) {
  const fieldId = id || rest.name || undefined;
  const isSelect = as === 'select';
  const controlClass = (isSelect ? 'aurorSelect' : 'aurorInput') + (className ? ' ' + className : '');
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "aurorLabel",
    htmlFor: fieldId
  }, label) : null, isSelect ? /*#__PURE__*/React.createElement("select", _extends({
    className: controlClass,
    id: fieldId,
    "aria-invalid": error ? true : undefined
  }, rest), (options || []).map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))) : /*#__PURE__*/React.createElement("input", _extends({
    className: controlClass,
    id: fieldId,
    "aria-invalid": error ? true : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("div", {
    className: "help",
    style: {
      color: 'var(--danger)'
    }
  }, error) : help ? /*#__PURE__*/React.createElement("div", {
    className: "help"
  }, help) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TextField/TextField.jsx", error: String((e && e.message) || e) }); }

// js/audio-bar.js
try { (() => {
/* AUROR — audio bar behaviour (drag + width resize).
   Attach with AurorAudioBar.init(barEl) or leave it to the auto-init below,
   which claims every .aurorAudioBar that has a [data-ab-auto] attribute.
   The bar is positioned absolutely inside its offsetParent; movement and
   width are clamped to that parent so it can never be dragged out of reach. */
(function (global) {
  'use strict';

  function clamp(v, lo, hi) {
    return v < lo ? lo : v > hi ? hi : v;
  }
  function init(bar) {
    if (!bar || bar.__aurorAudioBar) return;
    bar.__aurorAudioBar = true;
    var stage = bar.offsetParent || bar.parentElement;
    var grip = bar.querySelector('.abGrip');
    var handle = bar.querySelector('.abResize');
    function bounds() {
      return {
        w: stage.clientWidth,
        h: stage.clientHeight
      };
    }
    function park() {
      var b = bounds();
      var w = bar.offsetWidth,
        h = bar.offsetHeight;
      bar.style.left = clamp(bar.offsetLeft, 0, Math.max(0, b.w - w)) + 'px';
      bar.style.top = clamp(bar.offsetTop, 0, Math.max(0, b.h - h)) + 'px';
      if (bar.__aurorPlaceConfirm) bar.__aurorPlaceConfirm();
    }
    if (grip) {
      grip.addEventListener('pointerdown', function (e) {
        e.preventDefault();
        var b = bounds();
        var startX = e.clientX,
          startY = e.clientY;
        var originX = bar.offsetLeft,
          originY = bar.offsetTop;
        var maxX = Math.max(0, b.w - bar.offsetWidth);
        var maxY = Math.max(0, b.h - bar.offsetHeight);
        bar.setAttribute('data-dragging', '');
        bar.removeAttribute('data-confirm');
        grip.setPointerCapture(e.pointerId);
        function move(ev) {
          bar.style.left = clamp(originX + ev.clientX - startX, 0, maxX) + 'px';
          bar.style.top = clamp(originY + ev.clientY - startY, 0, maxY) + 'px';
        }
        function up() {
          bar.removeAttribute('data-dragging');
          grip.removeEventListener('pointermove', move);
          grip.removeEventListener('pointerup', up);
          grip.removeEventListener('pointercancel', up);
        }
        grip.addEventListener('pointermove', move);
        grip.addEventListener('pointerup', up);
        grip.addEventListener('pointercancel', up);
      });
    }
    if (handle) {
      handle.addEventListener('pointerdown', function (e) {
        e.preventDefault();
        var b = bounds();
        var startX = e.clientX;
        var startW = bar.offsetWidth;
        var minW = parseFloat(getComputedStyle(bar).minWidth) || 132;
        var maxW = Math.max(minW, b.w - bar.offsetLeft);
        handle.setPointerCapture(e.pointerId);
        function move(ev) {
          bar.style.width = clamp(startW + ev.clientX - startX, minW, maxW) + 'px';
          if (bar.__aurorPlaceConfirm) bar.__aurorPlaceConfirm();
        }
        function up() {
          handle.removeEventListener('pointermove', move);
          handle.removeEventListener('pointerup', up);
          handle.removeEventListener('pointercancel', up);
        }
        handle.addEventListener('pointermove', move);
        handle.addEventListener('pointerup', up);
        handle.addEventListener('pointercancel', up);
      });
    }

    // Keep the bar inside the stage when the stage itself changes size.
    if (global.ResizeObserver) new ResizeObserver(park).observe(stage);

    // Discard asks first. Confirming fires auror-audio-discard on the bar;
    // the host decides what "delete the take" actually means.
    var discard = bar.querySelector('[data-ab-discard]');
    var cancel = bar.querySelector('[data-ab-cancel]');
    var confirm = bar.querySelector('[data-ab-confirm]');
    var popover = bar.querySelector('.abConfirm');

    // Place the popover in stage coordinates, then convert back to the bar's
    // own box. Above the bar when there is room, below when there is not,
    // clamped sideways — the stage clips overflow, so an unplaced popover
    // would simply vanish.
    function placeConfirm() {
      if (!popover || !bar.hasAttribute('data-confirm')) return;
      popover.style.left = popover.style.top = '';
      popover.style.right = popover.style.bottom = '';
      var sr = stage.getBoundingClientRect();
      // The bar is the containing block, so a narrow bar would squeeze the
      // popover to its own width. max-content lifts that cap; max-width then
      // holds it inside the stage.
      popover.style.width = 'max-content';
      popover.style.maxWidth = Math.max(150, sr.width - 16) + 'px';
      var pr = popover.getBoundingClientRect();
      var br = bar.getBoundingClientRect();
      var gap = 8;
      var above = br.top - gap - pr.height;
      var top = above >= sr.top ? above : br.bottom + gap;
      top = clamp(top, sr.top, Math.max(sr.top, sr.bottom - pr.height));
      var left = clamp(br.right - pr.width, sr.left, Math.max(sr.left, sr.right - pr.width));
      popover.style.right = 'auto';
      popover.style.bottom = 'auto';
      popover.style.left = left - br.left - bar.clientLeft + 'px';
      popover.style.top = top - br.top - bar.clientTop + 'px';
    }
    function closeConfirm() {
      bar.removeAttribute('data-confirm');
    }
    if (discard) {
      discard.addEventListener('click', function (e) {
        e.stopPropagation();
        if (bar.hasAttribute('data-confirm')) closeConfirm();else {
          bar.setAttribute('data-confirm', '');
          placeConfirm();
        }
      });
    }
    if (cancel) cancel.addEventListener('click', closeConfirm);
    if (confirm) {
      confirm.addEventListener('click', function () {
        closeConfirm();
        bar.dispatchEvent(new CustomEvent('auror-audio-discard', {
          bubbles: true
        }));
      });
    }
    document.addEventListener('click', function (e) {
      if (bar.hasAttribute('data-confirm') && !bar.contains(e.target)) closeConfirm();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeConfirm();
    });
    global.addEventListener('resize', placeConfirm);
    bar.__aurorPlaceConfirm = placeConfirm;
  }
  function autoInit(root) {
    (root || document).querySelectorAll('.aurorAudioBar[data-ab-auto]').forEach(init);
  }
  global.AurorAudioBar = {
    init: init,
    autoInit: autoInit
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      autoInit();
    });
  } else {
    autoInit();
  }
})(window);
})(); } catch (e) { __ds_ns.__errors.push({ path: "js/audio-bar.js", error: String((e && e.message) || e) }); }

// js/brand.js
try { (() => {
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
    try {
      return localStorage.getItem(KEY) || FALLBACK;
    } catch (e) {
      return FALLBACK;
    }
  }
  function apply(name) {
    var value = (name || '').trim() || FALLBACK;
    document.querySelectorAll('.dsBrandWord').forEach(function (el) {
      el.textContent = value;
    });
    document.querySelectorAll('.dsBrandMark').forEach(function (el) {
      if (el.querySelector('img')) return; // a logo overrides the initial
      el.textContent = value.charAt(0).toUpperCase();
    });
    document.querySelectorAll('[data-brand-name]').forEach(function (el) {
      if (el === document.activeElement) return; // never rewrite what is being typed
      if ('value' in el && el.tagName === 'INPUT') el.value = value;else el.textContent = value;
    });
  }
  function set(name) {
    var value = (name || '').trim() || FALLBACK;
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {}
    apply(value);
    return value;
  }
  global.AurorBrand = {
    get: get,
    set: set,
    apply: apply,
    reset: function () {
      return set(FALLBACK);
    }
  };
  function init() {
    apply(get());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);else init();
  global.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(get());
  });
})(window);
})(); } catch (e) { __ds_ns.__errors.push({ path: "js/brand.js", error: String((e && e.message) || e) }); }

// js/i18n.js
try { (() => {
/* AUROR — i18n.
   Every user-facing string lives here under a stable key. Markup carries
   the key, never the copy:

     <h3 data-i18n="settings.brand"></h3>
     <input data-i18n-placeholder="brand.name.placeholder">
     <button data-i18n-title="tool.line"></button>

   IT is the base and the source of truth: every key exists in `it`. EN is
   filled in over time, so a key it does not carry yet falls back to the
   Italian string rather than to the raw key — a page in mixed languages is
   readable, a page showing `section.snapGrid` is not.
   AurorI18n.set('en') writes the choice through, like brand.js; other open
   pages follow via the storage event. */
(function (global) {
  'use strict';

  var KEY = 'auror.lang';
  var DEFAULT = 'it';
  var STRINGS = {
    it: {
      'nav.general': 'Generale',
      'nav.editor': 'Editor',
      'nav.defaults': 'Disegno',
      'nav.shortcuts': 'Scorciatoie',
      'nav.storage': 'Archivio',
      'nav.about': 'Info',
      'nav.admin': 'Admin',
      'page.settings': 'Impostazioni',
      'settings.lede': 'Configura il comportamento di AUROR su questo dispositivo. Le modifiche si salvano da sole.',
      'settings.saved': 'Tutto salvato',
      'settings.saving': 'Salvataggio…',
      'section.brand': 'Brand',
      'section.locale': 'Lingua e tema',
      'section.behavior': 'Comportamento',
      'section.snapGrid': 'Snap e griglia',
      'field.name': 'Nome',
      'field.preview': 'Anteprima',
      'field.language': 'Lingua',
      'field.theme': 'Tema',
      'brand.name.help': 'Compare nell\u2019header di ogni pagina. L\u2019iniziale diventa il segno.',
      'brand.name.placeholder': 'AUROR',
      'brand.preview.help': 'Il segno è fisso in altezza e libero in larghezza.',
      'lang.help': 'Usata per menu e tooltip.',
      'theme.help': 'Ha la precedenza sul pulsante nell\u2019header.',
      'theme.system': 'Come il sistema',
      'theme.light': 'Chiaro',
      'theme.dark': 'Scuro',
      'theme.eink': 'E-ink',
      'behavior.autosave': 'Salvataggio automatico',
      'behavior.autosave.help': 'Conserva il disegno corrente in questo browser mentre lavori.',
      'behavior.confirmClear': 'Conferma prima di svuotare',
      'behavior.confirmClear.help': 'Chiede conferma quando svuoti l\u2019area di lavoro.',
      'behavior.tooltips': 'Tooltip',
      'behavior.tooltips.help': 'Suggerimenti al passaggio su strumenti e dock.',
      'behavior.stats': 'Statistiche anonime',
      'behavior.stats.help': 'Solo conteggi di disegni creati. Nessun contenuto, nessuna identità.',
      'action.cancel': 'Annulla',
      'action.delete': 'Elimina',
      'action.save': 'Salva',
      'action.import': 'Importa',
      'action.newProject': 'Nuovo progetto',
      'action.back': 'Torna al design system',
      'action.menu': 'Menu',
      'action.theme': 'Cambia tema',
      'table.user': 'Utente',
      'table.role': 'Ruolo',
      'table.source': 'Origine',
      'table.status': 'Stato',
      'table.lastSeen': 'Ultimo accesso',
      'table.projects': 'Progetti',
      'table.storage': 'Spazio',
      'role.admin': 'Admin',
      'role.user': 'Utente',
      'status.active': 'Attivo',
      'status.invited': 'Invitato',
      'section.units': 'Unità e precisione',
      'section.performance': 'Prestazioni',
      'section.stroke': 'Tratto',
      'section.text': 'Testo',
      'section.newDocs': 'Nuovi documenti',
      'section.tools': 'Strumenti',
      'section.editing': 'Modifica',
      'section.view': 'Vista',
      'section.overview': 'Panoramica',
      'section.branding': 'Brand · Logo',
      'section.users': 'Gestione utenti',
      'section.usage': 'Utilizzo per utente',
      'section.backend': 'Backend',
      'section.backup': 'Backup e migrazione',
      'section.accessLog': 'Registro accessi',
      'editor.snapGrid': 'Snap alla griglia',
      'editor.snapObj': 'Snap agli oggetti',
      'editor.ortho': 'Modo orto',
      'editor.rulers': 'Mostra righelli',
      'editor.snapGrid.help': 'Aggancia il cursore alle intersezioni della griglia mentre disegni.',
      'editor.snapObj.help': 'Aggancia a estremi, punti medi, centri e intersezioni.',
      'editor.ortho.help': 'Vincola le nuove linee a orizzontale o verticale.',
      'editor.rulers.help': 'Mostra i righelli in alto e a sinistra della tela.',
      'field.units': 'Unità di disegno',
      'field.precision': 'Precisione coordinate',
      'field.angleUnit': 'Unità angolari',
      'field.historyDepth': 'Profondità annullamenti',
      'field.renderQuality': 'Qualità di resa',
      'field.historyDepth.help': 'Valori alti occupano più memoria.',
      'unit.mm': 'Millimetri (mm)',
      'unit.cm': 'Centimetri (cm)',
      'unit.m': 'Metri (m)',
      'unit.in': 'Pollici (in)',
      'unit.ft': 'Piedi (ft)',
      'angle.deg': 'Gradi',
      'angle.rad': 'Radianti',
      'quality.low': 'Bassa (più veloce)',
      'quality.balanced': 'Bilanciata',
      'quality.high': 'Alta (più fluida)',
      'unit.steps': 'passi',
      'field.strokeWidth': 'Spessore tratto',
      'field.lineStyle': 'Stile linea',
      'field.lineCap': 'Terminale',
      'field.font': 'Carattere predefinito',
      'field.textSize': 'Corpo predefinito',
      'field.paper': 'Formato predefinito',
      'field.orientation': 'Orientamento',
      'line.solid': 'Continua',
      'line.dashed': 'Tratteggiata',
      'line.dotted': 'Punteggiata',
      'line.dashdot': 'Tratto-punto',
      'cap.round': 'Arrotondato',
      'cap.butt': 'Netto',
      'cap.square': 'Quadrato',
      'paper.custom': 'Personalizzato',
      'orient.portrait': 'Verticale',
      'orient.landscape': 'Orizzontale',
      'defaults.note': 'Valgono per le nuove entità. La geometria esistente non cambia.',
      'shortcuts.note': 'In questa build le scorciatoie sono di sola lettura. Le combinazioni personalizzate arrivano più avanti.',
      'stat.users': 'Utenti',
      'stat.sessions': 'Sessioni attive',
      'stat.projects': 'Progetti',
      'stat.storage': 'Spazio usato',
      'table.lastActive': 'Ultima attività',
      'admin.oidc': 'Abilita accesso OIDC',
      'admin.ldap': 'Abilita accesso LDAP',
      'admin.autoProvision': 'Crea utenti al primo accesso',
      'admin.oidc.help': 'Mostra “Continua con SSO” nella pagina di accesso.',
      'admin.ldap.help': 'Consente l’autenticazione sulla tua directory.',
      'admin.autoProvision.help': 'Crea automaticamente account locali per gli utenti verificati.',
      'admin.note': 'Impostazioni riservate agli amministratori. Valgono per ogni utente di questa istanza e sono salvate sul backend.',
      'field.issuer': 'URL issuer',
      'field.clientId': 'Client ID',
      'field.clientSecret': 'Client secret',
      'field.scopes': 'Scope',
      'field.redirect': 'Redirect URI',
      'field.adminClaim': 'Claim gruppo admin',
      'field.server': 'Server',
      'field.baseDn': 'Base DN',
      'field.bindDn': 'Bind DN',
      'field.bindPw': 'Password di bind',
      'field.userFilter': 'Filtro ricerca utenti',
      'field.adminDn': 'DN gruppo admin',
      'field.issuer.help': 'URL base di discovery del provider OpenID.',
      'field.redirect.help': 'Aggiungi questo URI ai callback consentiti del provider.',
      'field.adminClaim.help': 'I membri di questo gruppo ricevono il ruolo admin.',
      'field.email': 'Email',
      'field.displayName': 'Nome visualizzato',
      'field.tempPw': 'Password temporanea',
      'field.newPw': 'Nuova password',
      'field.tempPw.help': 'All’utente verrà chiesto di cambiarla al primo accesso.',
      'field.newPw.help': 'Minimo 8 caratteri. L’utente dovrà aggiornarla al prossimo accesso.',
      'role.administrator': 'Amministratore',
      'ds.foundations': 'Fondamenti',
      'ds.color': 'Colore',
      'ds.type': 'Tipografia',
      'ds.space': 'Spazio',
      'ds.shape': 'Forma',
      'ds.motion': 'Movimento',
      'ds.icons': 'Icone',
      'ds.components': 'Componenti',
      'ds.patterns': 'Pattern',
      'ds.voice': 'Voce',
      'action.settings': 'Impostazioni',
      'sec.principles.t': 'Principi',
      'sec.principles.l': 'Quattro regole che tengono AUROR fedele a sé stesso. Valgono quando estendi strumenti, pannelli, export o qualunque schermata nuova.',
      'sec.palette.t': 'Palette',
      'sec.type.t': 'Tipografia',
      'sec.space.t': 'Scala di spaziatura',
      'sec.shape.t': 'Raggi ed elevazione',
      'sec.motion.t': 'Il movimento è facoltativo',
      'sec.icons.t': 'Icone',
      'sec.components.t': 'Componenti',
      'sec.patterns.t': 'Pattern',
      'sec.voice.t': 'Voce e tono',
      'card.state': 'Stato',
      'card.state.m': 'Con parsimonia. Quasi tutti i messaggi usano Ink/Muted.',
      'card.radii': 'Raggi',
      'card.radii.m': 'Un raggio per tutto',
      'card.elevation': 'Elevazione',
      'card.elevation.m': 'Tre livelli, usati in questo ordine',
      'card.button': 'Pulsante',
      'card.button.m': 'Alto 36–40 px · raggio 10 · bordo 1 px · gap 8 tra icona e testo',
      'card.inputs': 'Campi e select',
      'card.inputs.m': 'Altezza 36 · raggio 10 · padding orizzontale 10 px',
      'card.tagToggle': 'Tag, toggle, tastiera',
      'card.tagToggle.m': 'Stato, modalità, scorciatoie',
      'card.dock': 'Dock strumenti',
      'card.dock.m': 'Verticale, larghezza fissa 64 px · strumenti 44 px · gap 10 px',
      'card.layers': 'Elenco livelli',
      'card.inspector': 'Pannello proprietà',
      'card.inspector.m': 'A destra · largo 420 px · sezioni cardSec impilate',
      'card.ctxMenu': 'Menu contestuale della tela',
      'card.ctxMenu.m': 'Tasto destro sulla tela · piatto, senza sottomenu',
      'card.audioBar': 'Barra audio',
      'card.audioBar.m': 'Registrazione vocale flottante · trascina dalla presa, stringi dal bordo destro',
      'card.feedback': 'Riscontro',
      'card.feedback.m': 'Quattro modi per dire qualcosa · scegli in base a chi deve agire, e quando',
      'card.statusBar': 'Barra di stato e campo comandi',
      'card.statusBar.m': 'In fondo allo spazio di lavoro · sempre visibile',
      'card.picker': 'Selettore colore',
      'card.shell': 'Struttura dello spazio di lavoro',
      'card.shell.m': 'Header · dock · tela · proprietà · stato',
      'card.bilingual': 'Contenuto bilingue',
      'card.bilingual.m': 'Prima l’italiano, l’inglese alla pari',
      'card.voiceCtx': 'La voce in contesto',
      'card.voiceCtx.m': 'Come si manifesta',
      'lbl.floating': 'Flottante, non agganciata',
      'lbl.shrink': 'Ordine di riduzione',
      'lbl.recordNotDanger': 'Registrazione ≠ pericolo',
      'lbl.notice': 'Notice — nella pagina, accanto a ciò che riguarda',
      'lbl.toast': 'Toast — già fatto, niente da decidere',
      'lbl.modal': 'Modale — l’app non può proseguire senza risposta',
      'lbl.empty': 'Stato vuoto — dove starebbe il contenuto',
      'empty.projects': 'Nessun progetto',
      'empty.projects.body': 'I progetti che crei compaiono qui. Puoi iniziare da un foglio vuoto o importare un file esistente.'
    },
    en: {
      'nav.general': 'General',
      'nav.editor': 'Editor',
      'nav.defaults': 'Drawing',
      'nav.shortcuts': 'Shortcuts',
      'nav.storage': 'Storage',
      'nav.about': 'About',
      'nav.admin': 'Admin',
      'page.settings': 'Settings',
      'settings.lede': 'Configure how AUROR behaves on this device. Changes save automatically.',
      'settings.saved': 'All changes saved',
      'settings.saving': 'Saving…',
      'section.brand': 'Brand',
      'section.locale': 'Language and theme',
      'section.behavior': 'Behavior',
      'section.snapGrid': 'Snap and grid',
      'field.name': 'Name',
      'field.preview': 'Preview',
      'field.language': 'Language',
      'field.theme': 'Theme',
      'brand.name.help': 'Appears in the header of every page. The initial becomes the mark.',
      'brand.name.placeholder': 'AUROR',
      'brand.preview.help': 'The mark is fixed in height and free in width.',
      'lang.help': 'Used for menus and tooltips.',
      'theme.help': 'Overrides the toggle in the header.',
      'theme.system': 'Match system',
      'theme.light': 'Light',
      'theme.dark': 'Dark',
      'theme.eink': 'E-ink',
      'behavior.autosave': 'Autosave to local storage',
      'behavior.autosave.help': 'Persist the current sketch in this browser as you draw.',
      'behavior.confirmClear': 'Confirm before clearing',
      'behavior.confirmClear.help': 'Show a confirmation dialog when emptying the workspace.',
      'behavior.tooltips': 'Tooltips',
      'behavior.tooltips.help': 'Hover hints over toolbar tools and dock items.',
      'behavior.stats': 'Anonymous usage stats',
      'behavior.stats.help': 'Counts of drawings created. No content, no identity.',
      'action.cancel': 'Cancel',
      'action.delete': 'Delete',
      'action.save': 'Save',
      'action.import': 'Import',
      'action.newProject': 'New project',
      'action.back': 'Back to design system',
      'action.menu': 'Menu',
      'action.theme': 'Toggle theme',
      'table.user': 'User',
      'table.role': 'Role',
      'table.source': 'Source',
      'table.status': 'Status',
      'table.lastSeen': 'Last seen',
      'table.projects': 'Projects',
      'table.storage': 'Storage',
      'role.admin': 'Admin',
      'role.user': 'User',
      'status.active': 'Active',
      'status.invited': 'Invited',
      'section.units': 'Units & precision',
      'section.performance': 'Performance',
      'section.stroke': 'Stroke',
      'section.text': 'Text',
      'section.newDocs': 'New documents',
      'section.tools': 'Tools',
      'section.editing': 'Editing',
      'section.view': 'View',
      'section.overview': 'Overview',
      'section.branding': 'Branding · App logo',
      'section.users': 'User management',
      'section.usage': 'Usage by user',
      'section.backend': 'Backend',
      'section.backup': 'Backup &amp; migration',
      'section.accessLog': 'Access log',
      'editor.snapGrid': 'Grid snap',
      'editor.snapObj': 'Object snap',
      'editor.ortho': 'Ortho mode',
      'editor.rulers': 'Show rulers',
      'editor.snapGrid.help': 'Snap cursor to grid intersections while drawing.',
      'editor.snapObj.help': 'Snap to endpoints, midpoints, centers, intersections.',
      'editor.ortho.help': 'Constrain new lines to horizontal or vertical only.',
      'editor.rulers.help': 'Display rulers along the top and left of the canvas.',
      'field.units': 'Drawing units',
      'field.precision': 'Coordinate precision',
      'field.angleUnit': 'Angle units',
      'field.historyDepth': 'Undo history depth',
      'field.renderQuality': 'Render quality',
      'field.historyDepth.help': 'Higher values use more memory.',
      'unit.mm': 'Millimeters (mm)',
      'unit.cm': 'Centimeters (cm)',
      'unit.m': 'Meters (m)',
      'unit.in': 'Inches (in)',
      'unit.ft': 'Feet (ft)',
      'angle.deg': 'Degrees',
      'angle.rad': 'Radians',
      'quality.low': 'Low (fastest)',
      'quality.balanced': 'Balanced',
      'quality.high': 'High (smoothest)',
      'unit.steps': 'steps',
      'field.strokeWidth': 'Stroke width',
      'field.lineStyle': 'Line style',
      'field.lineCap': 'Line cap',
      'field.font': 'Default font',
      'field.textSize': 'Default text size',
      'field.paper': 'Default paper size',
      'field.orientation': 'Orientation',
      'line.solid': 'Solid',
      'line.dashed': 'Dashed',
      'line.dotted': 'Dotted',
      'line.dashdot': 'Dash-dot',
      'cap.round': 'Round',
      'cap.butt': 'Butt',
      'cap.square': 'Square',
      'paper.custom': 'Custom',
      'orient.portrait': 'Portrait',
      'orient.landscape': 'Landscape',
      'defaults.note': "These settings apply to newly drawn entities. Existing geometry isn't changed.",
      'shortcuts.note': 'Keyboard shortcuts are read-only in this build. Custom bindings ship in a future release.',
      'stat.users': 'Users',
      'stat.sessions': 'Active sessions',
      'stat.projects': 'Projects',
      'stat.storage': 'Storage used',
      'table.lastActive': 'Last active',
      'admin.oidc': 'Enable OIDC sign-in',
      'admin.ldap': 'Enable LDAP sign-in',
      'admin.autoProvision': 'Auto-provision users on first login',
      'admin.oidc.help': 'Show \"Continue with SSO\" on the login page.',
      'admin.ldap.help': 'Allow users to authenticate against your directory.',
      'admin.autoProvision.help': 'Create local accounts for verified directory users automatically.',
      'admin.note': 'Administrator-only settings. These changes affect every user of this AUROR instance and are persisted on the backend.',
      'field.issuer': 'Issuer URL',
      'field.clientId': 'Client ID',
      'field.clientSecret': 'Client secret',
      'field.scopes': 'Scopes',
      'field.redirect': 'Redirect URI',
      'field.adminClaim': 'Admin group claim',
      'field.server': 'Server',
      'field.baseDn': 'Base DN',
      'field.bindDn': 'Bind DN',
      'field.bindPw': 'Bind password',
      'field.userFilter': 'User search filter',
      'field.adminDn': 'Admin group DN',
      'field.issuer.help': 'OpenID provider discovery base URL.',
      'field.redirect.help': "Add this URI to your provider's allowed callbacks.",
      'field.adminClaim.help': 'Members of this group are granted admin role.',
      'field.email': 'Email',
      'field.displayName': 'Display name',
      'field.tempPw': 'Temporary password',
      'field.newPw': 'New password',
      'field.tempPw.help': 'User will be prompted to change it on first login.',
      'field.newPw.help': 'Minimum 8 characters. The user will be required to update it at next sign-in.',
      'role.administrator': 'Administrator',
      'ds.foundations': 'Foundations',
      'ds.color': 'Color',
      'ds.type': 'Type',
      'ds.space': 'Space',
      'ds.shape': 'Shape',
      'ds.motion': 'Motion',
      'ds.icons': 'Icons',
      'ds.components': 'Components',
      'ds.patterns': 'Patterns',
      'ds.voice': 'Voice',
      'action.settings': 'Settings',
      'sec.principles.t': 'Principles',
      'sec.principles.l': 'Four rules that keep AUROR feeling like AUROR. Apply them when extending tools, panels, exports or any new screen.',
      'sec.palette.t': 'Palette',
      'sec.type.t': 'Typography',
      'sec.space.t': 'Spacing scale',
      'sec.shape.t': 'Radii &amp; elevation',
      'sec.motion.t': 'Motion is optional',
      'sec.icons.t': 'Icons',
      'sec.components.t': 'Components',
      'sec.patterns.t': 'Patterns',
      'sec.voice.t': 'Voice &amp; tone',
      'card.state': 'State',
      'card.state.m': 'Sparingly. Most messaging uses Ink/Muted.',
      'card.radii': 'Radii',
      'card.radii.m': 'One radius for everything',
      'card.elevation': 'Elevation',
      'card.elevation.m': 'Three steps, used in this order',
      'card.button': 'Button',
      'card.button.m': '36–40 px tall · radius 10 · border 1 px line · gap 8 between icon + label',
      'card.inputs': 'Inputs &amp; selects',
      'card.inputs.m': 'Height 36 · radius 10 · 10 px horizontal padding',
      'card.tagToggle': 'Tag, toggle, keyboard',
      'card.tagToggle.m': 'State, mode, shortcuts',
      'card.dock': 'Tool dock',
      'card.dock.m': 'Vertical, fixed 64 px wide · 44 px tools · 10 px gap',
      'card.layers': 'Layer list',
      'card.inspector': 'Inspector panel',
      'card.inspector.m': 'Right-side · 420 px wide · stacked cardSec sections',
      'card.ctxMenu': 'Canvas context menu',
      'card.ctxMenu.m': 'Right-click anywhere on the canvas · keep flat, no submenus',
      'card.audioBar': 'Audio bar',
      'card.audioBar.m': 'Floating voice capture · drag the grip, pull the right edge to narrow it',
      'card.feedback': 'Feedback',
      'card.feedback.m': 'Four ways to say something · pick by who has to act, and when',
      'card.statusBar': 'Status bar &amp; command field',
      'card.statusBar.m': 'Bottom of the workspace · always visible',
      'card.picker': 'Color picker',
      'card.shell': 'Workspace shell',
      'card.shell.m': 'Header · dock · stage · inspector · status',
      'card.bilingual': 'Bilingual content',
      'card.bilingual.m': 'Italian first, English equal',
      'card.voiceCtx': 'Voice in context',
      'card.voiceCtx.m': 'How it shows up',
      'lbl.floating': 'Floating, not docked',
      'lbl.shrink': 'Shrink order',
      'lbl.recordNotDanger': 'Record ≠ danger',
      'lbl.notice': 'Notice — in the page, next to what it is about',
      'lbl.toast': 'Toast — already done, nothing to decide',
      'lbl.modal': 'Modal — the app cannot proceed without an answer',
      'lbl.empty': 'Empty state — where the content would be',
      'empty.projects': 'No projects yet',
      'empty.projects.body': 'Projects you create show up here. Start from a blank sheet or import an existing file.'
    }
  };
  function get() {
    try {
      return STRINGS[localStorage.getItem(KEY)] ? localStorage.getItem(KEY) : DEFAULT;
    } catch (e) {
      return DEFAULT;
    }
  }
  function t(key, lang) {
    var l = lang || get();
    var dict = STRINGS[l] || STRINGS[DEFAULT];
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    // Not translated yet — show the Italian rather than the bare key.
    var base = STRINGS[DEFAULT];
    if (Object.prototype.hasOwnProperty.call(base, key)) return base[key];
    // Genuinely unknown key: loud in the UI, so it gets fixed.
    return key;
  }

  /* Which keys still need an English string. Run AurorI18n.todo() in the
     console to see what is left to translate. */
  function todo(lang) {
    var l = lang || 'en';
    return Object.keys(STRINGS[DEFAULT]).filter(function (k) {
      return !Object.prototype.hasOwnProperty.call(STRINGS[l] || {}, k);
    });
  }
  function apply(lang) {
    var l = STRINGS[lang] ? lang : get();
    document.documentElement.setAttribute('lang', l);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'), l);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'), l));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var s = t(el.getAttribute('data-i18n-title'), l);
      el.setAttribute('title', s);
      if (el.hasAttribute('aria-label')) el.setAttribute('aria-label', s);
    });
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-label'), l));
    });
    document.dispatchEvent(new CustomEvent('auror-lang', {
      detail: {
        lang: l
      }
    }));
  }
  function set(lang) {
    var l = STRINGS[lang] ? lang : DEFAULT;
    try {
      localStorage.setItem(KEY, l);
    } catch (e) {}
    apply(l);
    return l;
  }
  global.AurorI18n = {
    get: get,
    set: set,
    apply: apply,
    t: t,
    todo: todo,
    languages: Object.keys(STRINGS),
    strings: STRINGS
  };
  function init() {
    apply(get());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);else init();
  global.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(get());
  });
})(window);
})(); } catch (e) { __ds_ns.__errors.push({ path: "js/i18n.js", error: String((e && e.message) || e) }); }

// js/number-field.js
try { (() => {
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
      b.tabIndex = -1; // the input already takes focus
      b.addEventListener('click', function () {
        bump(dir);
      });
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
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      input.dispatchEvent(new Event('change', {
        bubbles: true
      }));
    }
    stepper.appendChild(make(UP, 1, 'Increase'));
    stepper.appendChild(make(DOWN, -1, 'Decrease'));
    wrap.appendChild(stepper);
  }
  function init(root) {
    (root || document).querySelectorAll('.inputUnit').forEach(build);
  }
  global.AurorNumberField = {
    init: init
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () {
    init();
  });else init();
})(window);
})(); } catch (e) { __ds_ns.__errors.push({ path: "js/number-field.js", error: String((e && e.message) || e) }); }

// js/overlays.js
try { (() => {
/* AUROR — overlays: modal + toast.
   AurorModal.open(id) / .close(id) / .confirm({...})
   AurorToast.show({ message, tone, action, onAction, duration })

   The modal traps focus and restores it on close, because a dialog the
   keyboard can walk out of is not a dialog. Esc and scrim clicks close it
   unless the element carries [data-locked]. */
(function (global) {
  'use strict';

  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  var lastFocus = null;
  function scrimFor(el) {
    var s = document.querySelector('.aurorScrim[data-for="' + el.id + '"]');
    if (!s) {
      s = document.createElement('div');
      s.className = 'aurorScrim';
      s.setAttribute('data-for', el.id);
      document.body.appendChild(s);
      s.addEventListener('click', function () {
        if (!el.hasAttribute('data-locked')) close(el.id);
      });
    }
    return s;
  }
  function open(id) {
    var el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return;
    lastFocus = document.activeElement;
    scrimFor(el).setAttribute('data-open', '');
    el.setAttribute('data-open', '');
    var first = el.querySelector(FOCUSABLE);
    if (first) first.focus();
  }
  function close(id) {
    var el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return;
    el.removeAttribute('data-open');
    var s = document.querySelector('.aurorScrim[data-for="' + el.id + '"]');
    if (s) s.removeAttribute('data-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }
  function openModals() {
    return Array.prototype.slice.call(document.querySelectorAll('.aurorModal[data-open]'));
  }
  document.addEventListener('keydown', function (e) {
    var open_ = openModals();
    if (!open_.length) return;
    var el = open_[open_.length - 1];
    if (e.key === 'Escape' && !el.hasAttribute('data-locked')) {
      close(el);
      return;
    }
    if (e.key !== 'Tab') return;
    var items = Array.prototype.slice.call(el.querySelectorAll(FOCUSABLE));
    if (!items.length) return;
    var first = items[0],
      last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Declarative wiring: [data-modal-open="id"] and [data-modal-close]
  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-modal-open]');
    if (o) {
      open(o.getAttribute('data-modal-open'));
      return;
    }
    var c = e.target.closest('[data-modal-close]');
    if (c) {
      var m = c.closest('.aurorModal');
      if (m) close(m);
    }
  });
  global.AurorModal = {
    open: open,
    close: close
  };

  /* ---- Toast ---- */
  var ICONS = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>',
    danger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 7v6M12 16.5v.5"></path></svg>',
    neutral: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 11v5M12 7.5v.5"></path></svg>'
  };
  function stack() {
    var s = document.querySelector('.aurorToastStack');
    if (!s) {
      s = document.createElement('div');
      s.className = 'aurorToastStack';
      s.setAttribute('role', 'status');
      s.setAttribute('aria-live', 'polite');
      document.body.appendChild(s);
    }
    return s;
  }
  function show(opts) {
    opts = opts || {};
    var tone = opts.tone || 'neutral';
    var el = document.createElement('div');
    el.className = 'aurorToast' + (tone !== 'neutral' ? ' aurorToast--' + tone : '');
    el.innerHTML = (ICONS[tone] || ICONS.neutral) + '<span class="toastMsg"></span>';
    el.querySelector('.toastMsg').textContent = opts.message || '';
    if (opts.action) {
      var b = document.createElement('button');
      b.className = 'toastAct';
      b.type = 'button';
      b.textContent = opts.action;
      b.addEventListener('click', function () {
        if (opts.onAction) opts.onAction();
        dismiss(el);
      });
      el.appendChild(b);
    }
    stack().appendChild(el);
    // An offered action needs time to be taken; a bare confirmation does not.
    var life = opts.duration || (opts.action ? 8000 : 4000);
    var timer = setTimeout(function () {
      dismiss(el);
    }, life);
    el.addEventListener('mouseenter', function () {
      clearTimeout(timer);
    });
    el.addEventListener('mouseleave', function () {
      timer = setTimeout(function () {
        dismiss(el);
      }, 2000);
    });
    return el;
  }
  function dismiss(el) {
    if (!el || el.hasAttribute('data-leaving')) return;
    el.setAttribute('data-leaving', '');
    setTimeout(function () {
      el.remove();
    }, 200);
  }
  global.AurorToast = {
    show: show,
    dismiss: dismiss
  };
})(window);
})(); } catch (e) { __ds_ns.__errors.push({ path: "js/overlays.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.TextField = __ds_scope.TextField;

})();
