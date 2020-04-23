import { Store, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import rootSaga from './rootSaga'

export default function storeConfig(): Store {
  const saga = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(saga),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  saga.run(rootSaga)
  return store
}
