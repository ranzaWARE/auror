import type { ReactNode, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Header title. Omit for a plain surface with no header rule. */
  title?: ReactNode;
  /** Secondary text on the right of the header — spec, count, hint. */
  meta?: ReactNode;
  /** Wrap children in .cardBody. false when the content manages its own padding. */
  padded?: boolean;
  className?: string;
  children?: ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
