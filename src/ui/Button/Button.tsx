import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children?: React.ReactNode
  id?: string
  onClick?: (event: React.SyntheticEvent) => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = props => {
  const { children, id, onClick, disabled } = props

  return (
    <button
      className={styles.button}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
