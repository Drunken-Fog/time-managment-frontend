import React from 'react'
import { FieldWrapper } from './FieldWrapper'

type generalFieldType = 'text' | 'email' | 'password'

type FieldProps = {
  className?: string
  generalType?: generalFieldType
  labelText?: string
  withCircle?: boolean
  error?: string | boolean
  placeholder?: string
  name?: string
  id: string
  required?: boolean
  disabled?: boolean
  value?: string
  validate?: (arg0: string) => void
  onChange?: (
    name: string,
    value: string,
    validate?: (arg0: string) => void
  ) => void
}

export const Field: React.FC<FieldProps> = props => {
  const {
    generalType,
    labelText,
    error,
    placeholder,
    name,
    id,
    required,
    disabled,
    onChange,
    withCircle,
    className,
    value,
    validate,
  } = props

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.name, event.target.value, validate)
  }

  return (
    <FieldWrapper
      className={className}
      htmlFor={id}
      error={error}
      labelText={labelText}
      withCircle={withCircle}
    >
      <input
        type={generalType || 'text'}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        required={required || false}
        disabled={disabled || false}
        onChange={handleChange}
      />
    </FieldWrapper>
  )
}
