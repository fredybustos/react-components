import React from 'react'
import './Button.css'
import './button.sass'

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button className="button primary">{props.label}</button>
}

export default Button
