import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children?: React.ReactChildren | string
  otherProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button className={styles.button} {...props.otherProps}>
      {props.children}
    </button>
  )
}
