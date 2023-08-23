import Vue from 'vue'
import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false,
    pageHeaderTitle: ''
  },
  device: 'desktop',
  loginDialog: null, // 弹窗实例
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LOGIN_DIALOG: (state, dialog) => {
    state.loginDialog = dialog
  },
  SHOW_LOGIN_DIALOG: (state, opt) => {
    state.loginDialog.handleOpen(opt)
  },
  HIDE_LOGIN_DIALOG: (state) => {
    state.loginDialog.handleClose()
  },
  // 设置页面标题
  SET_PAGE_HEADER_TITLE: (state, pageHeaderTitle) => {
    state.pageHeaderTitle = pageHeaderTitle
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setLoginDialog({ commit }, dialog) {
    commit('SET_LOGIN_DIALOG', dialog)
  },
  showLoginDalog({ commit }, opt) {
    commit('SHOW_LOGIN_DIALOG', opt)
  },
  showHideDalog({ commit }) {
    commit('HIDE_LOGIN_DIALOG')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
