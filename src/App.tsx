import React from 'react'
import { FormBox } from './ui'
import { FormAuth, EnterFromSocialMedia } from './components'

const App: React.FC = () => {
  return (
    <div className='App'>
      <FormBox
        title='Вход'
        form={<FormAuth />}
        bottom={<EnterFromSocialMedia />}
      />
    </div>
  )
}

export default App
