import { Reducer } from 'redux'
import { appTypes } from './types'

const initialState = {
  userName: '',
  userEmail: '',
  loading: false,
  errors: null,
  isAuth: false,
  ACCESS_TOKEN: null,
  REFRESH_TOKEN: null,
}

// TODO Type
const appReducer: Reducer<any> = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.USER_REGISTRATION_START: {
      return { ...state, loading: true }
    }
    case appTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        userName: action.type.userName,
        userEmail: action.type.userEmail,
      }
    }
    case appTypes.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        ACCESS_TOKEN: action.type.access_token,
        REFRESH_TOKEN: action.type.refresh_token,
      }
    }
    default:
      return state
  }
}

export default appReducer
