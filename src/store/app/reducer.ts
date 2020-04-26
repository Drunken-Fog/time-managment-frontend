import { Reducer } from 'redux'
import { appTypes } from './types'

const initialState = {
  userName: '',
  userEmail: '',
  loading: false,
  errors: null,
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
    default:
      return state
  }
}

export default appReducer
