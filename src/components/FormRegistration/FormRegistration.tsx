import React from 'react'
import { Field } from '../../ui'
import { Form } from '../Form'
import {
  FieldNames,
  FieldPlaceholders,
  FormRegistrationSpecific,
} from '../../constants'
import { validateName, validateEmail, validatePassword } from '../../utils/'

export const FormRegistration: React.FC = () => {
  return (
    <>
      <div
        style={{
          marginLeft: '90px',
        }}
      >
        <Form
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
            withCircle
            validate={validateName}
          />
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
