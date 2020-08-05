import { appTypes } from './types'

type UserRegistrationData = {
  name: string
  email: string
  password: string
}

export function userRegistration(
  data: UserRegistrationData
): {
  type: appTypes
  payload: UserRegistrationData
} {
  return {
    type: appTypes.USER_REGISTRATION_START,
    payload: data,
  }
}

export function userRegistrationSuccess(
  data: UserRegistrationData
): {
  type: appTypes
  payload: UserRegistrationData
} {
  return {
    type: appTypes.FETCH_SUCCESS,
    payload: data,
  }
}

type UserLoginData = {
  email: string
  password: string
}

export function userLogin(
  data: UserLoginData
): {
  type: appTypes
  payload: UserLoginData
} {
  return {
    type: appTypes.USER_LOGIN_START,
    payload: data,
  }
}

type UserLoginSuccessType = {
  access_token: string
  refresh_token: string
  uid: string
}

export function userLoginSuccess(
  data: UserLoginSuccessType
): {
  type: appTypes
  payload: UserLoginSuccessType
} {
  return {
    type: appTypes.USER_LOGIN_SUCCESS,
    payload: data,
  }
}

type RefreshTokenStartType = {
  refresh_token: string
}

export function refreshTokenStart(
  data: RefreshTokenStartType
): {
  type: appTypes
  payload: RefreshTokenStartType
} {
  return {
    type: appTypes.REFRESH_TOKEN_START,
    payload: data,
  }
}

type RefreshTokenUpdatedType = {
  access_token: string
  refresh_token: string
}

export function refreshTokenUpdated(
  data: RefreshTokenUpdatedType
): {
  type: appTypes
  payload: RefreshTokenUpdatedType
} {
  return {
    type: appTypes.REFRESH_TOKEN_UPDATED,
    payload: data,
  }
}

type FetchProfileStartType = {
  uid: string
}

export function fetchProfileStart(
  data: FetchProfileStartType
): {
  type: appTypes
  payload: FetchProfileStartType
} {
  return {
    type: appTypes.FETCH_PROFILE_START,
    payload: data,
  }
}

type FetchProfileSuccessType = {
  username: string
  level: number
  stars: 0
}

export function fetchProfileSuccess(
  data: FetchProfileSuccessType
): {
  type: appTypes
  payload: FetchProfileSuccessType
} {
  return {
    type: appTypes.FETCH_PROFILE_SUCCESS,
    payload: data,
  }
}

type FetchTasksStartType = {
  uid: string
}

export function fetchTasksStart(
  data: FetchTasksStartType
): {
  type: appTypes
  payload: FetchTasksStartType
} {
  return {
    type: appTypes.FETCH_TASKS_START,
    payload: data,
  }
}

type FetchTasksSuccessType = {
  username: string
  level: number
  stars: 0
}

export function fetchTasksSuccess(
  data: FetchTasksSuccessType
): {
  type: appTypes
  payload: FetchTasksSuccessType
} {
  return {
    type: appTypes.FETCH_TASKS_SUCCESS,
    payload: data,
  }
}

// CREATE TASK MODAL TOGGLE
export function toggleCreateTaskModal(
  isOpen: boolean
): { type: appTypes; payload: boolean } {
  return {
    type: appTypes.TOGGLE_CREATE_TASK_MODAL,
    payload: isOpen,
  }
}

export function taskCreate(uid: string, data: any) {
  return { type: appTypes.CREATE_TASK_START, payload: { uid, ...data } }
}

export function taskCreateSuccess() {
  return {
    type: appTypes.CREATE_TASK_SUCCESS,
  }
}
