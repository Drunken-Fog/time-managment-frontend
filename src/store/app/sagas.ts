import { takeEvery, all, fork, put, call } from 'redux-saga/effects'
import request from '../../utils/request'
import { appTypes } from './types'
import { routerHistory } from '../../utils/history'
import {
  userLoginSuccess,
  refreshTokenUpdated,
  fetchProfileSuccess,
  fetchTasksSuccess,
  taskCreateSuccess,
  toggleCreateTaskModal,
} from './actions'

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
      url: `${process.env.REACT_APP_MAIN_URL}/users/registration`,
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
  localStorage.setItem('uid', response.data.uid)
  yield setInLocalStorage(response)
  yield put(userLoginSuccess(response.data))
}

async function login(data: any) {
  const { email, password } = data
  try {
    const response = await request({
      url: `${process.env.REACT_APP_MAIN_URL}/users/login`,
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

function* setInLocalStorage({ data }: any) {
  yield localStorage.setItem('ACCESS_TOKEN', data.access_token)
  yield localStorage.setItem('REFRESH_TOKEN', data.refresh_token)
}

function* refreshTokenWatcher() {
  yield takeEvery(appTypes.REFRESH_TOKEN_START, refreshTokenWorker)
}

function* refreshTokenWorker({ payload }: any) {
  const response = yield call(refreshTokenQuery, payload)
  yield setInLocalStorage(response)
  yield put(refreshTokenUpdated(response.data))
}

async function refreshTokenQuery(data: any) {
  const response = await request({
    url: `${process.env.REACT_APP_MAIN_URL}/users/token/refresh`,
    method: 'POST',
    data: {
      refresh_token: data.REFRESH_TOKEN,
    },
  })

  return response
}

function* fetchProfileWatcher() {
  yield takeEvery(appTypes.FETCH_PROFILE_START, fetchProfileWorker)
}

function* fetchProfileWorker({ payload }: any) {
  const response = yield call(fetchProfile, payload)
  yield put(fetchProfileSuccess(response.data))
}

async function fetchProfile(data: any) {
  const response = await request({
    url: `${process.env.REACT_APP_MAIN_URL}/users/profile`,
    params: {
      id: data,
    },
  })
  return response
}

function* fetchTasksWatcher() {
  yield takeEvery(appTypes.FETCH_TASKS_START, fetchTasksWorker)
}

function* fetchTasksWorker({ payload }: any) {
  const response = yield call(fetchTasks, payload)
  yield put(fetchTasksSuccess(response.data))
}

async function fetchTasks(data: any) {
  const response = await request({
    url: `${process.env.REACT_APP_MAIN_URL}/tasks`,
    params: {
      uid: data,
    },
  })
  return response
}

// Task creating
function* createTaskWatcher() {
  yield takeEvery(appTypes.CREATE_TASK_START, createTaskWorker)
}

function* createTaskWorker({ payload }: any) {
  const response = yield call(createTask, payload)
  if (response && response.statusText === 'OK') {
    yield put(taskCreateSuccess())
    yield put(toggleCreateTaskModal(false))
  }
}

async function createTask(data: any) {
  const { uid, taskName, taskDescription, taskImportant, taskUrgent } = data

  const response = await request({
    url: `${process.env.REACT_APP_MAIN_URL}/tasks/create`,
    method: 'POST',
    data: {
      owner: uid,
      name: taskName,
      description: taskDescription,
      important: taskImportant,
      urgent: taskUrgent,
      active: false,
      currentDuration: 0,
      cycles: 0,
    },
  })
  return response
}

export default function* app() {
  yield all([
    fork(registrationWatcher),
    fork(loginWatcher),
    fork(refreshTokenWatcher),
    fork(fetchProfileWatcher),
    fork(fetchTasksWatcher),
    fork(createTaskWatcher),
  ])
}
