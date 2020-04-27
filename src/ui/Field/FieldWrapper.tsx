import React from 'react'
import { ErrorIcon } from '../../assets/icons'
import styles from './Field.module.css'

type FieldWrapperProps = {
  children?: React.ReactNode
  className?: string
  labelText?: string
  withCircle?: boolean
  error?: string | boolean
  htmlFor?: string
}

export const FieldWrapper: React.FC<FieldWrapperProps> = props => {
  const { children, className, labelText, error, htmlFor, withCircle } = props
  const containerClass = [styles.Field, className]
  const labelClass = [styles.FieldLabelDefault]

  if (error) {
    containerClass.push(styles.invalid)
    labelClass.push(styles.invalid)
  }

  return (
    <>
      <div className={containerClass.join(' ')}>
        <div>
          {children}
          {labelText ? (
            <label htmlFor={htmlFor}>{labelText}</label>
          ) : (
            withCircle && (
              <label className={labelClass.join(' ')} htmlFor={htmlFor}>
                <div />
              </label>
            )
          )}
          {typeof error === 'boolean' ? (
            <div className={styles.iconWrapper}>
              <ErrorIcon />
            </div>
          ) : null}
        </div>
      </div>
      {typeof error === 'string' && <span>{error}</span>}
    </>
  )
}
