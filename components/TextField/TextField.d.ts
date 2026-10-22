import type { ReactNode, InputHTMLAttributes } from 'react';

export interface TextFieldOption {
  value: string;
  label: string;
}

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  /** Persistent hint below the control. */
  help?: ReactNode;
  /** Replaces help and colours the line — the field keeps its height. */
  error?: ReactNode;
  /** 'input' (default) or 'select'. */
  as?: 'input' | 'select';
  /** Options when as="select". */
  options?: TextFieldOption[];
  className?: string;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
