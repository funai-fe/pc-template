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
    path: '/404',
    component: () => import('@/views/404'),
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
    }, {
      path: '/chat/:sessionId',
      name: 'Chat',
      meta: { title: 'Chat', icon: '' },
      component: () => import('@/views/chat/index')
    }, {
      path: '/chatWithFile/:type',
      name: 'ChatWithFile',
      meta: { title: 'ChatWithFile', icon: '', showHeader: true, headerTitle: '与文件聊天' },
      component: () => import('@/views/chatWithFile/create')
    }, {
      path: '/fileChat/:type',
      name: 'FileChat',
      meta: { title: 'FileChat', icon: '', showHeader: false },
      component: () => import('@/views/chatWithFile/index')
    }, {
      path: '/chatWithGame',
      name: 'ChatWithGame',
      meta: { title: 'ChatWithGame', icon: '', showHeader: true, headerTitle: '选择您的冒险游戏' },
      // component: () => import('@/views/chatWithFile/index')
    }, {
      path: '/gameChat',
      name: 'GameChat',
      meta: { title: 'GameChat', icon: '', showHeader: false, },
      // component: () => import('@/views/chatWithFile/index')
    }]
  }
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
