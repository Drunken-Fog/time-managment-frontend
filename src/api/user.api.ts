import ApiService from './api'
import { UserType } from './interfaces'

export default class {
  api: any
  constructor () {
    this.api = new ApiService()
  }

  createUser (data: UserType) {
    return this.api.post({
      url: 'user/registration'
    })
  }

  userLogin (data: UserType) {
    return this.api.post({
      url: 'user/login',
      data
    })
  }

  getUserProfileInfo (id: string) {
    return this.api.get({
      url: `user/profile/id=${id}`
    })
  }


}
