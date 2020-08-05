import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Field } from '../../ui'
import { Form } from '../Form'
import {
  FieldNames,
  FieldPlaceholders,
  FormRegistrationSpecific,
} from '../../constants'
import { validateName, validateEmail, validatePassword } from '../../utils/'
import { userRegistration } from '../../store/app/actions'

export const FormRegistration: React.FC = () => {
  const dispatch = useDispatch()

  const registrationSubmiter = useCallback(
    arg => {
      dispatch(userRegistration(arg))
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
          onSubmit={registrationSubmiter}
          id={FormRegistrationSpecific.id}
          actionText={FormRegistrationSpecific.actionText}
          subText={FormRegistrationSpecific.subText}
          subTextLink={FormRegistrationSpecific.subTextLink}
          subTextLinkTitle={FormRegistrationSpecific.subTextLinkTitle}
        >
          <Field
            id={FieldNames.name}
            name={FieldNames.name}
            generalType='text'
            placeholder={FieldPlaceholders.name}
            validate={validateName}
            withCircle
          />
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
