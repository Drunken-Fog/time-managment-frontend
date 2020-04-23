import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'

const App: React.FC = () => {
  const routes = useRoutes(false)

  return (
    <div className='App'>
      <BrowserRouter>{routes}</BrowserRouter>
    </div>
  )
}

export default App
