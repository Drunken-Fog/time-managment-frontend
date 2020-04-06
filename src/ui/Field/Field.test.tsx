import React from 'react'
import { render } from '@testing-library/react'
import { Field } from './Field'

function noop() {
  return
}

const DEFAULT_DATA = {
  errorText: 'Ошибка',
  placeholder: 'Денис',
  labelText: 'Лейбл',
  name: 'login',
  id: 'login',
  required: true,
  disabled: true,
  onChange: noop,
}

// Валидные типы для generalType: 'text' | 'email' | 'password'
const FieldDefaultComponent = (
  <Field
    disabled={!DEFAULT_DATA.disabled}
    generalType='text'
    placeholder={DEFAULT_DATA.placeholder}
    name={DEFAULT_DATA.name}
    id={DEFAULT_DATA.id}
    onChange={DEFAULT_DATA.onChange}
    required={DEFAULT_DATA.required}
    errorText={DEFAULT_DATA.errorText}
    labelText={DEFAULT_DATA.labelText}
  />
)

describe('Рендер компонента Field', () => {
  describe('Корректно рендерит элементы внутри компонента Field', function() {
    const {
      errorText,
      placeholder,
      id,
      required,
      disabled,
      name,
      labelText,
    } = DEFAULT_DATA

    test('Должен рендерить элемент input', function() {
      const { getByPlaceholderText } = render(FieldDefaultComponent)
      const input = getByPlaceholderText(placeholder)
      expect(input).toBeInTheDocument()
    })
    test('Должен рендерить элемент label', function() {
      const { container } = render(FieldDefaultComponent)
      const label = container.querySelector(`label[for=${id}]`)
      expect(label).toBeInTheDocument()
    })
    test('Должен рендерить элемент с текстом для label', function() {
      const { getByLabelText } = render(FieldDefaultComponent)
      const label = getByLabelText(labelText)
      expect(label).toBeInTheDocument()
    })
    test('Должен рендерить элемент div внутри label', function() {
      const { container } = render(
        <Field generalType='text' name={name} id={id} withCircle />
      )
      const divInsideLabel = container.querySelector(`label[for=${id}] div`)
      expect(divInsideLabel).toBeInTheDocument()
    })
    test('Должен рендерить компонент c валидным текстом ошибки', function() {
      const { getByText } = render(FieldDefaultComponent)
      const validErrorText = getByText(errorText)
      expect(validErrorText).toBeInTheDocument()
    })
    test('Не должен рендерить span, если нет текста ошибки', function() {
      const { container } = render(
        <Field
          disabled={!disabled}
          generalType={'text'}
          placeholder={placeholder}
          name={name}
          id={id}
          required={required}
        />
      )
      const isSpan = container.querySelector('span')
      expect(isSpan).toBeFalsy()
    })
    test('Должен рендерить input:disabled', function() {
      const { getByPlaceholderText } = render(
        <Field
          disabled={disabled}
          generalType='text'
          placeholder={placeholder}
          id={id}
        />
      )
      const input = getByPlaceholderText(placeholder)
      expect(input).toBeDisabled()
    })
    test('Должен рендерить input:required', function() {
      const { getByPlaceholderText } = render(
        <Field
          disabled={!disabled}
          generalType={'text'}
          placeholder={placeholder}
          name={name}
          id={id}
          required={required}
        />
      )
      const input = getByPlaceholderText(placeholder)
      expect(input).toBeRequired()
    })
  })
})
