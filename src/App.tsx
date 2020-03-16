import React from 'react'
import { Button, Field } from './ui'

export default function App() {
  return (
    <>
      <Field
        generalType='text'
        placeholder='Денис'
        name='name'
        id='name'
        required={false}
        disabled={false}
      />
      <Field
        generalType='password'
        placeholder='Почта'
        name='email'
        id='email'
        required={false}
        disabled={true}
      />
      <Button>UI кнопочка</Button>
      <Button disabled>Disabled</Button>
    </>
  )
}
