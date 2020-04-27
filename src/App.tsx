import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useRoutes } from './routes'
import { routerHistory } from './utils/history'

const App: React.FC = () => {
  //@ts-ignore
  const isAuth = useSelector(state => state.appReducer.isAuth)
  const routes = useRoutes(isAuth)

  return (
    <div className='App'>
      <Router history={routerHistory}>
        <BrowserRouter>{routes}</BrowserRouter>
      </Router>
    </div>
  )
}

export default App
