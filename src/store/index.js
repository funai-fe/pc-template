import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import settings from './modules/settings'
import user from './modules/user'
import chat from './modules/chat'
import fileChat from './modules/fileChat'
import gameChat from './modules/gameChat'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    settings,
    user,
    menu,
    chat,
    fileChat,
    gameChat
  },
  getters
})

export default store
