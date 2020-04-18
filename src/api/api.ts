import axios from 'axios'
const url = process.env.BASE_URL

type requestParams = {
  url: string
  data: any
}


class ApiService {
  url: any

  constructor () {
    this.url = url
  }

  _validateStatus (status: number) {
    switch (status) {
      default:
        return status >= 200 && status < 300
      case 401:
        return
    }
  }

  get _bearerToken () {
    const token = localStorage.get('token')
    return `Bearer ${token}`
  }

  _instance () {
    const request: object = {
      baseURL: this.url,
      headers: {
        Authorization: this._bearerToken
      },
      validateStatus: this._validateStatus.bind(this)
    }
    return axios.create(request)
  }

  get (params: requestParams): any {
    return this._instance().get(params.url, params.data)
  }

  post (params: requestParams): any {
    return this._instance().post(params.url, params.data)
  }
}

export default ApiService