import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Field } from '../../ui'
import { Form } from '../Form'
import {
  FieldNames,
  FieldPlaceholders,
  FormLoginSpecific,
} from '../../constants'
import { validateEmail, validatePassword } from '../../utils/'
import { userLogin } from '../../store/app/actions'

export const FormLogin: React.FC = () => {
  const dispatch = useDispatch()

  // TODO: отправляет форму, даже если пустые поля
  const login = useCallback(
    arg => {
      dispatch(userLogin(arg))
    },
    [dispatch]
  )

  return (
    <>
      <div
        style={{
          marginLeft: '90px',
        }}
      >
        <Form
          id={FormLoginSpecific.id}
          onSubmit={login}
          actionText={FormLoginSpecific.actionText}
          subText={FormLoginSpecific.subText}
          subTextLink={FormLoginSpecific.subTextLink}
          subTextLinkTitle={FormLoginSpecific.subTextLinkTitle}
        >
          <Field
            id={FieldNames.email}
            name={FieldNames.email}
            generalType='email'
            placeholder={FieldPlaceholders.email}
            withCircle
            validate={validateEmail}
          />
          <Field
            id={FieldNames.password}
            name={FieldNames.password}
            generalType='password'
            placeholder={FieldPlaceholders.password}
            withCircle
            validate={validatePassword}
          />
        </Form>
      </div>
    </>
  )
}
