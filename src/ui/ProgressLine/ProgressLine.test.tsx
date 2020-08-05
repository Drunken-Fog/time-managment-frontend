import React from 'react'
import { render } from '@testing-library/react'
import { ProgressLine } from './ProgressLine'

const DEFAULT_DATA = {
  total: 100,
  value: 50,
}
const ProgressLineDefaultComponent = (
  <ProgressLine total={DEFAULT_DATA.total} value={DEFAULT_DATA.value} />
)

test('Должен рендерить элемент ProgressLine', function() {
  const { container } = render(ProgressLineDefaultComponent)
  const divInsideDiv = container.querySelector('div')
  expect(divInsideDiv).toBeInTheDocument()
})

test('Должен возвращать null если value > total', function() {
  const { container } = render(<ProgressLine value={10} total={5} />)
  expect(container.firstChild).toBeNull()
})

test('Должен возвращать null если total === 0', function() {
  const { container } = render(<ProgressLine value={0} total={0} />)
  expect(container.firstChild).toBeNull()
})

test('Должен возвращать null если value < 0', function() {
  const { container } = render(<ProgressLine value={-1} total={10} />)
  expect(container.firstChild).toBeNull()
})

test('Должен возвращать null если total < 0', function() {
  const { container } = render(<ProgressLine value={10} total={-5} />)
  expect(container.firstChild).toBeNull()
})

const HEIGHT_AS_NUMBER: number = 5
const WIDTH_AS_NUMBER: number = 50
const HEIGHT_AS_STRING: string = '5%'
const WIDTH_AS_STRING: string = '50%'

test('Должен рендерить ProgressLine с кастомной высотой, когда height: number', function() {
  const { container } = render(
    <ProgressLine value={10} total={100} height={HEIGHT_AS_NUMBER} />
  )
  const component = container.querySelector('div')
  expect(component!.style.height).toBe(HEIGHT_AS_NUMBER + 'px')
})

test('Должен рендерить ProgressLine с кастомной высотой, когда height: string', function() {
  const { container } = render(
    <ProgressLine value={10} total={100} height={HEIGHT_AS_STRING} />
  )
  const component = container.querySelector('div')
  expect(component!.style.height).toBe(HEIGHT_AS_STRING)
})

test('Должен рендерить ProgressLine с кастомной шириной, когда width: number', function() {
  const { container } = render(
    <ProgressLine value={10} total={100} width={WIDTH_AS_NUMBER} />
  )
  const component = container.querySelector('div')
  expect(component!.style.width).toBe(WIDTH_AS_NUMBER + 'px')
})

test('Должен рендерить ProgressLine с кастомной шириной, когда width: string', function() {
  const { container } = render(
    <ProgressLine value={10} total={100} width={WIDTH_AS_STRING} />
  )
  const component = container.querySelector('div')
  expect(component!.style.width).toBe(WIDTH_AS_STRING)
})

test('Должен рендерить ProgressLine с кастомной шириной и высотой, когда width: string и height: string', function() {
  const { container } = render(
    <ProgressLine
      value={10}
      total={100}
      width={WIDTH_AS_STRING}
      height={HEIGHT_AS_STRING}
    />
  )
  const component = container.querySelector('div')
  expect(component!.style.width).toBe(WIDTH_AS_STRING)
  expect(component!.style.height).toBe(HEIGHT_AS_STRING)
})

test('Должен рендерить ProgressLine с кастомной шириной и высотой, когда width: number и height: string', function() {
  const { container } = render(
    <ProgressLine
      value={10}
      total={100}
      width={WIDTH_AS_NUMBER}
      height={HEIGHT_AS_STRING}
    />
  )
  const component = container.querySelector('div')
  expect(component!.style.width).toBe(WIDTH_AS_NUMBER + 'px')
  expect(component!.style.height).toBe(HEIGHT_AS_STRING)
})

test('Должен рендерить ProgressLine с кастомной шириной и высотой, когда width: string и height: number', function() {
  const { container } = render(
    <ProgressLine
      value={10}
      total={100}
      width={WIDTH_AS_STRING}
      height={HEIGHT_AS_NUMBER}
    />
  )
  const component = container.querySelector('div')
  expect(component!.style.width).toBe(WIDTH_AS_STRING)
  expect(component!.style.height).toBe(HEIGHT_AS_NUMBER + 'px')
})

test('Должен рендерить ProgressLine с кастомной шириной и высотой, когда width: number и height: number', function() {
  const { container } = render(
    <ProgressLine
      value={10}
      total={100}
      width={WIDTH_AS_NUMBER}
      height={HEIGHT_AS_NUMBER}
    />
  )
  const component = container.querySelector('div')
  expect(component!.style.width).toBe(WIDTH_AS_NUMBER + 'px')
  expect(component!.style.height).toBe(HEIGHT_AS_NUMBER + 'px')
})
