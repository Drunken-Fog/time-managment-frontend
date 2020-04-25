import React, { useState, ReactElement } from 'react'
import { ValidateFields } from '../../utils'
import { Button } from '../../ui'
import { Subtext } from '../Subtext'

type FieldErrorsState = { [k: string]: string | boolean } | {}
type FormErrorTextState = string | null
type Validators = { [k: string]: (arg0: string) => void }
type FormState = { [k: string]: string }

type Props = {
  children: React.ReactElement[]
  id: string
  actionText: string
  subText: string
  subTextLink: string
  subTextLinkTitle: string
}

export const Form: React.FC<Props> = props => {
  const {
    children,
    id,
    actionText,
    subText,
    subTextLink,
    subTextLinkTitle,
  } = props
  const validators: Validators = {}
  const initialFormState: FormState = {}

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [formState, setFormState] = useState<FormState>(initialFormState)

  //   Для всей формы
  const [formErrorText, setFormErrorText] = useState<FormErrorTextState>(null)

  //   Для поля
  const [fieldErrors, setFieldErrors] = useState<FieldErrorsState>({})

  function handleFieldChange(name: string, value: string) {
    setFormState({ ...formState, [name]: value })
  }

  function handleChildren(child: ReactElement) {
    const { name, validate } = child.props

    initialFormState[name] = ''
    validators[name] = validate
  }

  React.Children.forEach(children, child => {
    handleChildren(child)
  })

  function handleSubmit(event: React.SyntheticEvent): void {
    event.preventDefault()

    setFormErrorText(null)

    const errors = ValidateFields(formState, validators)

    setFieldErrors(errors || {})

    submitField()
  }

  async function submitField() {
    setIsSubmitting(true)
    try {
      setFormState(initialFormState)
      setIsSubmitting(false)
    } catch (e) {
      setFormErrorText('Произошла неизвестная ошибка')
      setIsSubmitting(false)
    }
  }

  function renderField(child: ReactElement): ReactElement {
    const {
      name,
      validate,
    }: {
      name: keyof FieldErrorsState
      validate: (arg0: string) => void
    } = child.props
    const value = formState[name]
    const Field = React.cloneElement(child, {
      id: `${id}-${name}`,
      key: name,
      disabled: isSubmitting,
      value: value,
      error: fieldErrors[name],
      onChange: (value: string): void => {
        try {
          validate(value)
          setFieldErrors((errors: FieldErrorsState) => {
            const { [name]: omitted, ...rest } = errors
            return rest
          })
        } catch (e) {
          //
        }
        handleFieldChange(name, value)
      },
    })
    return Field
  }

  function renderFooter() {
    return (
      <div style={{ marginRight: ' 90px' }}>
        {/* TODO: Для теста */}
        {formErrorText || null}
        <Button width={211} disabled={isSubmitting}>
          {actionText}
        </Button>
        <Subtext
          text={subText}
          link={subTextLink}
          linkTitle={subTextLinkTitle}
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} id={id} noValidate>
      {React.Children.map(children, renderField)}
      {renderFooter()}
    </form>
  )
}
