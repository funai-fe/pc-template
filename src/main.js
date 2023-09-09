import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import { Message } from 'element-ui';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import VueSSE from 'vue-sse';

import '@/icons' // icon
// import '@/permission' // permission control
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
Vue.use(ElementUI, { locale })

// 延迟加载登录弹窗组件
import GlobalLoginDialog from '@/components/GlobalLoginDialog/index.vue';
const loginDialog = new Vue(GlobalLoginDialog).$mount();
store.dispatch('app/setLoginDialog', loginDialog)
document.body.appendChild(loginDialog.$el);

const whiteList = ['/home'] // 跳过登录验证白名单
router.beforeEach(async(to, from, next) => {
  // 进度条
  NProgress.start()

  // 页面标题设置
  document.title = getPageTitle(to.meta.title)

  // 登陆态获取
  const hasToken = getToken()

  // 登录拦截
  if (!hasToken) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      loginDialog.handleOpen(()=>{next()})
      NProgress.done()
    }
  } else {
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  store.commit('app/SET_PAGE_HEADER_TITLE', '')
  // finish progress bar
  NProgress.done()
})

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.prototype.$store = store

// 全局注册 VueSse 插件
Vue.use(VueSSE)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
