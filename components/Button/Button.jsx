/**
 * AUROR Button.
 * Square-cornered, 1px line, 36px tall. The system has exactly one
 * emphasis step above default (primary) and one destructive tone (danger) —
 * a third emphasis level always ends up competing with the first two.
 */
export function Button({
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

  return (
    <button type={type} className={classes.join(' ')} disabled={disabled} {...rest}>
      {icon ? <span className="btnIco">{icon}</span> : null}
      {children}
      {iconAfter ? <span className="btnIco">{iconAfter}</span> : null}
    </button>
  );
}
