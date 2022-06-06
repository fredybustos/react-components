import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: Variant | 'default'
}

type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outline-primary'
  | 'outline-secondary'
  | 'danger'
  | 'text'
  | 'cancel'
