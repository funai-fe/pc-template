import Cookies from 'js-cookie'
import { myStorage }from '@/utils/index'

const TokenKey = 'token'
const UserIdKey = 'userId'
const UserNameKey = 'userName'
const UserLevelKey = 'userLevel'
const CurrentSessionKey = 'currentSession'
const typeKey = 'type'

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

export function getCurrentSession() {
  return myStorage.get(CurrentSessionKey)
}
export function getCurrentType() {
  return myStorage.get(typeKey)
}
export function setCurrentSession(data) {
  myStorage.set(CurrentSessionKey, data.currentSession)
  myStorage.set(typeKey, data.type)
}
export function removeCurrentSession() {
  myStorage.remove(CurrentSessionKey)
  myStorage.remove(typeKey)
}
