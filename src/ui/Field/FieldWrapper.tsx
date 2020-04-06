import React from 'react'
import styles from './Field.module.css'

type FieldWrapperProps = {
  children?: React.ReactNode
  labelText?: string
  withCircle?: boolean
  errorText?: string
  htmlFor?: string
}

export const FieldWrapper: React.FC<FieldWrapperProps> = props => {
  const { children, labelText, errorText, htmlFor, withCircle } = props
  const classes = [styles.Field]

  //TODO
  if (errorText) {
    //classes.push(styles.invalid)
  }
  return (
    <>
      <div className={classes.join(' ')}>
        {children}
        {labelText ? (
          <label htmlFor={htmlFor}>{labelText}</label>
        ) : (
          withCircle && (
            <label className={styles.FieldLabelDefault} htmlFor={htmlFor}>
              <div />
            </label>
          )
        )}
      </div>
      {errorText && <span>{errorText}</span>}
    </>
  )
}
