import { menuMap } from '@/config/index'
const getters = {
  // 基础信息
  pageHeaderTitle: state => state.app.pageHeaderTitle,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userId: state => state.user.userId,
  userLevel: state => state.user.userLevel,
  name: state => state.user.name,
  roles: state => state.user.roles,
// permission_routes: state => state.permission.routes
  
// 菜单
  currentSession: state => state.menu.currentSession,
  menus: state => state.menu.menus,
  currentType: state => state.menu.chatType
  
}
export default getters
