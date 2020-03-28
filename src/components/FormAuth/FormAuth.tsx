import React from 'react'
import { Field, Button } from '../../ui'
import { Subtext } from '../Subtext'

export const FormAuth: React.FC = () => {
  return (
    <form>
      <Field id='email' generalType='email' placeholder='Email' />
      <Field id='password' generalType='password' placeholder='Пароль' />
      <Button width={211}>Войти</Button>
      <Subtext text='Нет аккаунта?' link='reg' linkTitle='Регистрация' />
    </form>
  )
}
