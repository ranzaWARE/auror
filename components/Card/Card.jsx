/** AUROR Card — the panel every section sits in. Header is optional. */
export function Card({ title = null, meta = null, padded = true, className = '', children, ...rest }) {
  const classes = ['card'];
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')} {...rest}>
      {title ? (
        <div className="cardHeader">
          <h3>{title}</h3>
          {meta ? <span className="small">{meta}</span> : null}
        </div>
      ) : null}
      {padded ? <div className="cardBody">{children}</div> : children}
    </div>
  );
}
