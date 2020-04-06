import React from 'react'
import { FieldWrapper } from './FieldWrapper'

type generalFieldType = 'text' | 'email' | 'password'

type FieldProps = {
  generalType?: generalFieldType
  labelText?: string
  withCircle?: boolean
  errorText?: string
  placeholder?: string
  name?: string
  id: string
  required?: boolean
  disabled?: boolean
  onChange?: (e: string) => void | undefined
}

export const Field: React.FC<FieldProps> = props => {
  const {
    generalType,
    labelText,
    errorText,
    placeholder,
    name,
    id,
    required,
    disabled,
    onChange,
    withCircle,
  } = props

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(event.target.value)
  }

  return (
    <FieldWrapper
      htmlFor={id}
      errorText={errorText}
      labelText={labelText}
      withCircle={withCircle}
    >
      <input
        type={generalType || 'text'}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required || false}
        disabled={disabled || false}
        onChange={handleChange}
      />
    </FieldWrapper>
  )
}
