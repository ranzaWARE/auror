/**
 * AUROR Notice — an in-page message tied to the thing it is about.
 * Tone lives in the icon and the top rule; the body stays on the page
 * surface so long text remains readable.
 */
const TONE_ICON = {
  info: <><circle cx="12" cy="12" r="10" /><path d="M12 11v5M12 7.5v.5" /></>,
  success: <path d="M20 6L9 17l-5-5" />,
  warn: <><path d="M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17v.5" /></>,
  danger: <><circle cx="12" cy="12" r="10" /><path d="M12 7v6M12 16.5v.5" /></>
};

export function Notice({ tone = 'info', title = null, className = '', children, ...rest }) {
  const classes = ['aurorNotice', `aurorNotice--${tone}`];
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')} role={tone === 'danger' ? 'alert' : undefined} {...rest}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {TONE_ICON[tone] || TONE_ICON.info}
      </svg>
      <div>
        {title ? <strong>{title}</strong> : null}
        {children}
      </div>
    </div>
  );
}
