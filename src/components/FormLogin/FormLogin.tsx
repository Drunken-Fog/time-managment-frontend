import React from 'react'
import { Field } from '../../ui'
import { Form } from '../Form'
import {
  FieldNames,
  FieldPlaceholders,
  FormLoginSpecific,
} from '../../constants'
import { validateEmail, validatePassword } from '../../utils/'

export const FormLogin: React.FC = () => {
  return (
    <>
      <div
        style={{
          marginLeft: '90px',
        }}
      >
        <Form
          id={FormLoginSpecific.id}
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
