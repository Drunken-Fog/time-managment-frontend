import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { select } from 'redux-saga/effects'

const getAppReducer = (state: any) => state.appReducer

interface AxiosConfig {
  method: string
  url: string
  params: any | null
  data: any | null
  headers: any
}

let requestQueue: Array<any> = []
let lastRequest: any = {}

const service = axios.create()

let isPending = false

const serviceDecorator = (config: AxiosRequestConfig) => {
  const checking = false
  if (isPending && checking) {
    return new Promise<AxiosResponse>(function(resolve, reject) {
      requestQueue.push({ config, resolve, reject })
    })
  }

  return new Promise<AxiosResponse>(async function(resolve, reject) {
    if (checking) {
      config.url = `${process.env.VUE_APP_API_PATH}${config.url}`
      lastRequest = { config, resolve, reject }
    }
    try {
      const response = await service(config)
      resolve(response)
    } catch (error) {
      console.log(`Error in request: ${error}`)
      reject(error)
    }
  })
}

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    }
    //@ts-ignore
    const state = select(getAppReducer)
    // console.log(state)
    //@ts-ignore

    const token = state.ACCESS_TOKEN
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    console.log('error on request', error)
    return Promise.reject(error)
  }
)

// async function refreshToken() {
//   return new Promise((resolve, _) => {
//     store.dispatch('user/RefreshToken').then(() => {
//       resolve()
//     }).catch(() => {
//       router.push({path: '/login'})
//     })
//   })
// }

function resendPendingRequests() {
  requestQueue.forEach(async deferredRequest => {
    const config = deferredRequest.config
    const resolve = deferredRequest.resolve
    try {
      const response = await service(config)
      resolve(response)
    } catch (error) {
      console.log(`errResolve ${error}`)
    }
  })
  requestQueue = []
}

service.interceptors.response.use(
  (response: any) => {
    lastRequest = {}
    return response
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      if (error.response.data.error === 'access_denied') {
        // store.dispatch('LogOut').then(() => {
        //   router.push('/login')
        // })
        return
      }
      // if (!isPending) {
      //   isPending = true
      //   refreshToken().then(() => {
      //     isPending = false
      //     resendPendingRequests()
      //   })
      // }

      return new Promise((resolve, reject) => {
        lastRequest.resolve = resolve
        lastRequest.reject = reject
        requestQueue.push({ resolve, reject, config: error.config })
      })
    } else {
      return new Promise((_, reject) => {
        reject(error)
      })
    }
  }
)

export default serviceDecorator
