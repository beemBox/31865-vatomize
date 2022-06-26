import React from 'react'
import './Button.css'

type ButtonProps = {
  className: string,
  children: any,
  onClick: () => any
}

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button onClick={ onClick } className={className}>{children}</button>
  )
}

export default Button