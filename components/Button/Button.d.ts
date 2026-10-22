import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Emphasis. One step up (primary) and one destructive tone (danger). */
  variant?: 'default' | 'primary' | 'danger';
  /** Icon before the label. Pass an <svg>; the button sizes it. */
  icon?: ReactNode;
  /** Icon after the label — use for disclosure, not decoration. */
  iconAfter?: ReactNode;
  /** Persistent on-state, for toggles in a toolbar. */
  active?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
