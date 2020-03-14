import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../Button'

test('Рендер кнопки с текстом "Привет"', () => {
  const { getByText } = render(<Button>Привет</Button>)
  const text = getByText(/Привет/i)
  expect(text).toBeInTheDocument()
})
