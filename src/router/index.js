import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','tourist']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes 基础路由（日常新增页面就在这加）
 */
export const constantRoutes = [
  {
    path: '/home', // 首页官网
    component: () => import('@/views/home/index'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'Index',
      component: () => import('@/views/index/index'),
      hidden: true,
      meta: { title: 'Index', icon: '', showHeader: true, headerTitle: '你可以尝试这样问我' }
    }]
  },

  {
    path: '/chat',
    component: Layout,
    children: [
      {
        path: '/chat/:sessionId',
        name: 'Chat',
        component: () => import('@/views/chat/index'),
        meta: { title: 'Chat', icon: '' }
      }
    ]
  },
  {
    path: '/chatWithFile',
    component: Layout,
    children: [
      {
        path: '/chatWithFile/:type',
        name: 'ChatWithFile',
        component: () => import('@/views/chatWithFile/create'),
        meta: { title: 'ChatWithFile', icon: '', showHeader: true, headerTitle: '与文件聊天' },
      }
    ]
  },
  {
    path: '/singleFileChat',
    component: Layout,
    children: [
      {
        path: '/singleFileChat/:sessionId',
        name: 'SingleFileChat',
        meta: { title: 'SingleFileChat', icon: '', showHeader: false },
        component: () => import('@/views/chatWithFile/singleFile')
      }
    ]
  },
  {
    path: '/multipleFileChat',
    component: Layout,
    children: [
      {
        path: '/multipleFileChat/:sessionId',
        name: 'MultipleFileChat',
        meta: { title: 'MultipleFileChat', icon: '', showHeader: false },
        component: () => import('@/views/chatWithFile/multipleFile')
      }
    ]
  },

  {
    path: '/chatWithGame',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'ChatWithGame',
        meta: { title: 'ChatWithGame', icon: '', showHeader: true, headerTitle: '选择您的冒险游戏' },
        // component: () => import('@/views/chatWithFile/singleFile')
      }
    ]
  },

  {
    path: '/gameChat',
    component: Layout,
    children: [
      {
        path: '/gameChat/:sessionId',
        name: 'GameChat',
        meta: { title: 'GameChat', icon: '', showHeader: false },
        // component: () => import('@/views/chatWithFile/singleFile')
      }
    ]
  },
  {
    path: '/smart-language',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'SmartLanguage',
        component: () => import('@/views/smart-language/index'),
        // hidden: true,
        meta: { title: 'SmartLanguage', icon: 'index', showHeader: true, headerTitle: '让翻译跟简单', secondTitle: '自信而准确地进行多语言交流' }
      }
    ]
  },
  {
    path: '/customerService',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'CustomerService',
        component: () => import('@/views/customerService/index'),
        // hidden: true,
        meta: { title: 'CustomerService', icon: 'index', showHeader: false }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
]

/**
 * asyncRoutes 权限路由（暂时不用）
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
