import React from 'react'
import { FormBox } from '../ui'
import { FormRegistration, EnterFromSocialMedia } from '../components'

export const RegistrationPage: React.FC = () => {
  return (
    <FormBox
      title='Регистрация'
      form={<FormRegistration />}
      bottom={<EnterFromSocialMedia />}
    />
  )
}
