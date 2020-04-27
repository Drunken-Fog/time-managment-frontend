import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages'
import { HomePage, LoginPage, RegistrationPage } from './pages'

type Props = boolean

export const useRoutes: React.FC<Props> = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/home' component={HomePage} />
        <Redirect to='/home' />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path='/login' component={LoginPage} exact />
      <Route path='/registration' component={RegistrationPage} exact />
      <Redirect to='/login' />
    </Switch>
  )
}