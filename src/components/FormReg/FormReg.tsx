import React from 'react'
import { Field, Button } from '../../ui'
import { Subtext } from '../Subtext'

export const FormReg: React.FC = () => {
  return (
    <form>
      <Field id='name' generalType='text' placeholder='Имя' />
      <Field id='email' generalType='email' placeholder='Email' />
      <Field id='password' generalType='password' placeholder='Пароль' />
      <Button width={211}>Зарегистрироваться</Button>
      <Subtext text='Уже есть аккаунт?' link='auth' linkTitle='Войти' />
    </form>
  )
}
