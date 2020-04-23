import React from 'react'
import { FormBox } from '../ui'
import { FormAuth, EnterFromSocialMedia } from '../components'

export const AuthPage: React.FC = () => {
  return (
    <FormBox
      title='Вход'
      form={<FormAuth />}
      bottom={<EnterFromSocialMedia />}
    />
  )
}
