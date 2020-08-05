import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

test('Должен рендерить кнопку с текстом "Привет"', () => {
  const { getByText } = render(<Button>Привет</Button>)
  const text = getByText(/Привет/i)
  expect(text).toBeInTheDocument()
})

describe('Тестирует рендер кнопок с разными размерами', () => {
  const SMALL = 'small'
  const LARGE = 'large'
  const FLUID = 'fluid'

  test('Должен рендерить маленькую кнопку', () => {
    const { container } = render(<Button size='small'></Button>)
    expect(container.firstChild).toHaveClass(SMALL)
  })

  test('Должен рендерить большую кнопку', () => {
    const { container } = render(<Button size='large'></Button>)
    expect(container.firstChild).toHaveClass(LARGE)
  })

  test('Должен рендерить кнопку с шириной на весь блок', () => {
    const { container } = render(<Button size='fluid'></Button>)
    expect(container.firstChild).toHaveClass(FLUID)
  })
})

describe('Тестирует кнопку с разными типами', () => {
  const PRIMARY = 'primary'
  const DANGER = 'danger'

  test('Должен рендерить кнопку с типом primary', () => {
    const { container } = render(<Button type='primary'></Button>)
    expect(container.firstChild).toHaveClass(PRIMARY)
  })

  test('Должен рендерить кнопку с типом danger', () => {
    const { container } = render(<Button type='danger'></Button>)
    expect(container.firstChild).toHaveClass(DANGER)
  })
})
