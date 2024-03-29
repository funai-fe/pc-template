import { login, logout } from '@/api/user'
import { getToken, getUserName, getUserId, getUserLevel, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { Message } from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: getUserName(),
    userId: getUserId(),
    avatar: '',
    userLevel: getUserLevel(),
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USER_LEVEL: (state, userLevel) => {
    state.userLevel = userLevel
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { loginAcct, password, loginType } = userInfo
    return new Promise((resolve, reject) => {
      login({ loginAcct: loginAcct.trim(), password: password, loginType: loginType }).then(response => {      
        const { data } = response
        commit('SET_TOKEN', data.token)
        commit('SET_USERID', data.userId)
        commit('SET_NAME', data.username)
        commit('SET_USER_LEVEL', data.userLevel)
        setToken(data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logOut({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.userId).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        Message.success('退出成功！')
        dispatch('app/showLoginDalog', { showClose: false }, { root: true })
        resolve()
      }).catch(error => {
        this.$message.error(error.message || '退出异常，请稍后再试');
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

