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

  const loginSubmiter = useCallback(
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
          onSubmit={loginSubmiter}
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
            validate={validateEmail}
            withCircle
          />
          <Field
            id={FieldNames.password}
            name={FieldNames.password}
            generalType='password'
            placeholder={FieldPlaceholders.password}
            validate={validatePassword}
            withCircle
          />
        </Form>
      </div>
    </>
  )
}
