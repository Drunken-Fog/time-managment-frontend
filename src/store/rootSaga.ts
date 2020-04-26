import { all, fork } from 'redux-saga/effects'
import app from './app/sagas'

export default function* rootSaga() {
  yield all([fork(app)])
}
