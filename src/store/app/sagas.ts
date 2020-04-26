import { takeEvery, all, fork, put, call } from 'redux-saga/effects'
import request from '../../utils/request'
import { appTypes } from './types'
import { routerHistory } from '../../utils/history'
import { userLoginSuccess } from './actions'

function* registrationWatcher() {
  yield takeEvery(appTypes.USER_REGISTRATION_START, registrationWorker)
}

function* registrationWorker({ payload }: any) {
  try {
    const response = yield call(registration, payload)
    routerHistory.push('/login')
    if (response instanceof Error) {
      // TODO: отправить ошибку в стор
    }
  } catch (e) {
    console.log(e)
  }
}

// TODO: types
async function registration(data: any) {
  const { name, email, password } = data
  try {
    const response = await request({
      url: 'https://time-management-sfedu.herokuapp.com/users/registration',
      method: 'POST',
      data: {
        username: name,
        email: email,
        password: password,
      },
    })
    return response
  } catch (e) {
    return new Error('Что-то пошло не так')
  }
}

function* loginWatcher() {
  yield takeEvery(appTypes.USER_LOGIN_START, loginWorker)
}

function* loginWorker({ payload }: any) {
  const response = yield call(login, payload)
  yield put(userLoginSuccess(response))
}

async function login(data: any) {
  const { email, password } = data
  try {
    const response = await request({
      url: 'https://time-management-sfedu.herokuapp.com/users/login',
      method: 'POST',
      data: {
        password,
        email,
      },
    })
    return response
  } catch (e) {
    return new Error('Что-то пошло не так')
  }
}

export default function* app() {
  yield all([fork(registrationWatcher), fork(loginWatcher)])
}
