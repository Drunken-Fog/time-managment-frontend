import React from 'react'
import { Field, Button } from '../../ui'
import { Subtext } from '../Subtext'

export const FormAuth: React.FC = () => {
  return (
    <form>
      <div
        style={{
          marginLeft: '90px',
        }}
      >
        <Field id='email' generalType='email' placeholder='Email' withCircle />
        <Field
          id='password'
          generalType='password'
          placeholder='Пароль'
          withCircle
          error
        />
      </div>
      <Button width={211}>Войти</Button>
      <Subtext text='Нет аккаунта?' link='reg' linkTitle='Регистрация' />
    </form>
  )
}
