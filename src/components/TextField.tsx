import type { InputHTMLAttributes } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>

/** White input with 2.5px ink border, hard shadow that grows on focus. */
export function TextField({ className = '', ...rest }: TextFieldProps) {
  return (
    <input
      className={`h-12 w-full rounded-lg border-brutal border-ink bg-white px-space-md font-body text-body text-on-surface shadow-brutal-sm outline-none transition-shadow placeholder:text-outline focus:bg-canvas focus:shadow-brutal-md ${className}`}
      {...rest}
    />
  )
}
