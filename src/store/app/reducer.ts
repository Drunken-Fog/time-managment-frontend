import { Reducer } from 'redux'
import { appTypes } from './types'
import app from './sagas'
import { StaticReadUsage } from 'three'

const REFRESH_TOKEN = localStorage.getItem('REFRESH_TOKEN')
const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')
const uid = localStorage.getItem('uid')
const isAuth = REFRESH_TOKEN && ACCESS_TOKEN && uid

const initialState = {
  username: '',
  email: '',
  loading: false,
  errors: null,
  isAuth: isAuth || false,
  ACCESS_TOKEN: ACCESS_TOKEN || null,
  REFRESH_TOKEN: REFRESH_TOKEN || null,
  uid: uid || null,
  level: null,
  levelStars: null,
  stars: null,
  tasks: {},
  createTaskModalIsOpen: false,
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
        username: action.payload.userName,
        email: action.payload.userEmail,
      }
    }
    case appTypes.FETCH_PROFILE_START: {
      return { ...state, loading: true }
    }
    case appTypes.FETCH_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        level: action.payload.level,
        levelStars: action.payload.level * 10,
        stars: action.payload.stars,
        username: action.payload.username,
      }
    }
    case appTypes.FETCH_TASKS_START: {
      return { ...state, loading: true }
    }
    case appTypes.FETCH_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload,
      }
    }
    case appTypes.USER_LOGIN_START: {
      return { ...state, loading: true }
    }
    case appTypes.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        ACCESS_TOKEN: action.payload.access_token,
        REFRESH_TOKEN: action.payload.refresh_token,
      }
    }
    case appTypes.REFRESH_TOKEN_UPDATED: {
      return {
        ...state,
        isAuth: true,
        ACCESS_TOKEN: action.payload.access_token,
        REFRESH_TOKEN: action.payload.refresh_token,
      }
    }

    case appTypes.TOGGLE_CREATE_TASK_MODAL: {
      return {
        ...state,
        loading: true,
        createTaskModalIsOpen: action.payload,
      }
    }

    case appTypes.CREATE_TASK_START: {
      return {
        ...state,
        loading: true,
      }
    }

    case appTypes.CREATE_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state
  }
}

export default appReducer
