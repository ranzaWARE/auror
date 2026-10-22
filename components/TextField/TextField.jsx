/**
 * AUROR TextField — label, control, help text as one unit.
 * The help line is always rendered when present, error or not, so the
 * field never changes height when validation fires.
 */
export function TextField({
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

  return (
    <div className="field">
      {label ? <label className="aurorLabel" htmlFor={fieldId}>{label}</label> : null}
      {isSelect ? (
        <select className={controlClass} id={fieldId} aria-invalid={error ? true : undefined} {...rest}>
          {(options || []).map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : (
        <input className={controlClass} id={fieldId} aria-invalid={error ? true : undefined} {...rest} />
      )}
      {error ? (
        <div className="help" style={{ color: 'var(--danger)' }}>{error}</div>
      ) : help ? (
        <div className="help">{help}</div>
      ) : null}
    </div>
  );
}
