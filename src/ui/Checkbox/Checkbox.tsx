import React from 'react'
import styles from './Checkbox.module.css'

type CheckboxProps = {
  id: string
  labelText?: string
  name?: string
  onClick?: (event: React.SyntheticEvent) => void
}

export const Checkbox: React.FC<CheckboxProps> = props => {
  const { id, labelText, name, onClick } = props
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.input}
        type='checkbox'
        name={name}
        id={id}
        onClick={onClick}
      />
      <label className={styles.label} htmlFor={id} />
      {labelText}
    </div>
  )
}
