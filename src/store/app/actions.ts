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
