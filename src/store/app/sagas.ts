import { takeEvery, all, fork, put, call } from 'redux-saga/effects'
import axios from 'axios'
import { appTypes } from './types'
import { userRegistration } from './actions'

function* watcher() {
  yield takeEvery(appTypes.USER_REGISTRATION_START, worker)
}

function* worker({ payload }: any) {
  try {
    const response = yield call(registration, payload)
    if (response instanceof Error) {
      // TODO: отправить ошибку в стор
    }
    yield put(userRegistration(response))
  } catch (e) {
    console.log(e)
  }
}

// TODO: types
async function registration(data: any) {
  const { name, email, password } = data
  try {
    const response = await axios(
      'https://time-management-sfedu.herokuapp.com/users/registration',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
        },
        data: {
          username: name,
          email: email,
          password: password,
        },
      }
    )
    return response
  } catch (e) {
    return new Error('Что-то пошло не так')
  }
}

export default function* app() {
  yield all([fork(watcher)])
}
