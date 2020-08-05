import React from 'react'
import { render } from '@testing-library/react'
import { Notification } from './Notification'

type ComponentProps = React.ComponentProps<typeof Notification>

const DEFAULT_DATA = {
  title: 'Уведомления',
  pauseLogo: 'pause.svg',
  playLogo: 'play.svg',
}

function renderUI(props: ComponentProps = {}) {
  return render(<Notification {...props} />)
}

describe('Рендер компонента Notification', function() {
  const { title, pauseLogo, playLogo } = DEFAULT_DATA
  describe('Корректно рендерит элементы внутри Notification', function() {
    describe('Заголовок h2', function() {
      test('Должен рендерить дефолтный заголовок компонента, если таковой не передан', function() {
        const { getByText } = renderUI()
        const validTitle = getByText(title)
        expect(validTitle).toBeInTheDocument()
      })
      test('Должен рендерить корректный заголовок, если передан', function() {
        const { getByText } = renderUI({ title: 'Заголовок' })
        const validTitle = getByText('Заголовок')
        expect(validTitle).toBeInTheDocument()
      })
    })
    describe('Иконка таймера', function() {
      test('Должен рендерить иконку таймера', function() {
        const { container } = renderUI()
        const iconInside = container.querySelector('svg')
        expect(iconInside).toBeInTheDocument()
      })
      test('Должен рендерить обертку иконки таймера', function() {
        const { container } = renderUI()
        expect(container.firstChild).toHaveClass('wrapper')
      })
    })
    describe('Иконка экшна', function() {
      test('Должен рендерить элемент Pause', function() {
        const { getByText } = renderUI()
        const mySvg = getByText(pauseLogo)
        expect(mySvg).toBeInTheDocument()
      })
      test('Должен рендерить элемент Play', function() {
        const { getByText } = renderUI({ isActive: false })
        const mySvg = getByText(playLogo)
        expect(mySvg).toBeInTheDocument()
      })
    })
  })
})
