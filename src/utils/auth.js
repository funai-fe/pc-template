import Cookies from 'js-cookie'

const TokenKey = 'token'
const UserIdKey = 'userId'
const UserNameKey = 'userName'
const UserLevelKey = 'userLevel'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getUserId() {
  return Cookies.get(UserIdKey)
}
export function getUserName() {
  return Cookies.get(UserNameKey)
}
export function getUserLevel() {
  return Cookies.get(UserLevelKey)
}

export function setToken(data) {
  Cookies.set(TokenKey, data.token)
  Cookies.set(UserIdKey, data.userId)
  Cookies.set(UserNameKey, data.username)
  Cookies.set(UserLevelKey, data.userLevel)
}

export function removeToken() {
  Cookies.remove(TokenKey)
  Cookies.remove(UserIdKey)
  Cookies.remove(UserNameKey)
  Cookies.remove(UserLevelKey)
}
