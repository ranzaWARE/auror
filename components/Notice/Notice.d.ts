import type { ReactNode, HTMLAttributes } from 'react';

export interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
  /** Tone. danger also sets role="alert". */
  tone?: 'info' | 'success' | 'warn' | 'danger';
  /** Bold first line. Omit for a single-sentence notice. */
  title?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export declare function Notice(props: NoticeProps): JSX.Element;
