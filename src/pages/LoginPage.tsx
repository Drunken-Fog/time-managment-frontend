import React from 'react'
import { FormBox } from '../ui'
import { FormLogin, EnterFromSocialMedia } from '../components'

export const LoginPage: React.FC = () => {
  return (
    <>
      <FormBox
        title='Вход'
        form={<FormLogin />}
        bottom={<EnterFromSocialMedia />}
      />
    </>
  )
}
