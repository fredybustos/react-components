import React from 'react'
import { ButtonProps } from '../../types/button'

type Variant = ButtonProps['variant']

const variants: { [key in Variant]: Variant } = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  'outline-primary': 'outline-primary',
  'outline-secondary': 'outline-secondary',
  danger: 'danger',
  text: 'text',
  cancel: 'cancel'
}

export function Button({
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button className={`button ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}
