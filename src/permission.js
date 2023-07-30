import Vue from 'vue';
import router from './router'
import store from './store'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
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
  // finish progress bar
  NProgress.done()
})
