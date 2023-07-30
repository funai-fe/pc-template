import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import { Message } from 'element-ui';
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false
Vue.prototype.$message = Message

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
