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
