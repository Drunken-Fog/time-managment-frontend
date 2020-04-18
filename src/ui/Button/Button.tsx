import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

type ButtonType = 'primary' | 'danger'
type ButtonSize = 'fluid' | 'small' | 'large'

type ButtonProps = {
  children?: React.ReactNode
  id?: string
  onClick?: (event: React.SyntheticEvent) => void
  disabled?: boolean
  width?: number | string
  type?: ButtonType
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = props => {
  const {
    children,
    id,
    onClick,
    disabled,
    width,
    type = 'primary',
    size = 'fluid',
  } = props

  return (
    <button
      className={cn(styles.button, styles[type], styles[size])}
      id={id}
      onClick={onClick}
      disabled={disabled}
      style={{
        width,
      }}
    >
      {children}
    </button>
  )
}
