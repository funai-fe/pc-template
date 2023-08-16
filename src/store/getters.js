import { menuMap } from '@/config/index'
const getters = {
  pageHeaderTitle: state => state.app.pageHeaderTitle,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userId: state => state.user.userId,
  userLevel: state => state.user.userLevel,
  name: state => state.user.name,
  roles: state => state.user.roles,

  sessions: state => state.chat.sessions,
  fileSessions: state => state.fileChat.fileSessions,
  currentSession: state => state.menu.currentSession,
  menus: state => state.menu.menus,

  // permission_routes: state => state.permission.routes
  // menus: state =>
  //   [{
  //     name: 'AI对话',
  //     isNeedSession: true,
  //     messages: state.chat.sessions,
  //     type: 0,
  //     key: 'normalChat',
  //     icon: 'common/icon_ai_duihua_sel@2x.png',
  //     activeIcon: 'common/icon_ai_duihua_sel@2x.png',
  //   }, {
  //     name: '单文件阅读',
  //     isNeedSession: false,
  //     type: 1,
  //     messages: state.fileChat.fileSessions,
  //     key: 'pdfChat',
  //     icon: 'common/icon_danwenjian_nor@2x.png',
  //     activeIcon: 'common/icon_danwenjian_sel@2x.png'
  //   }, {
  //     name: '多文件阅读',
  //     isNeedSession: false,
  //     type: 4,
  //     // messages: state => state.fileChat.fileSessions,
  //     key: 'multiPdfChat',
  //     icon: 'common/icon_duowenjian_nor@2x.png',
  //     activeIcon: 'common/icon_duowenjian_sel@2x.png'
  //   }, {
  //     name: 'AI画图',
  //     isNeedSession: false,
  //     messages: [],
  //     type: -1,
  //     key: 'draw',
  //     icon: 'common/icon_ai_huatu_nor@2x.png',
  //     activeIcon: 'common/icon_ai_huatu_sel@2x.png'
  //   }, {
  //     name: '冒险游戏',
  //     isNeedSession: false,
  //     // messages: state.fileChat.fileSessions,
  //     type: 2,
  //     key: 'gameChat',
  //     icon: 'common/icon_maoxianyouxi_nor@2x.png',
  //     activeIcon: 'common/icon_maoxianyouxi_sel@2x.png'
  //   }, {
  //     name: '语言专家',
  //     isNeedSession: false,
  //     type: -2,
  //     key: 'language',
  //     icon: 'common/icon_yuyanzhuanjia_nor@2x.png',
  //     activeIcon: 'common/icon_yuyanzhuanjia_sel@2x.png'
  //   }]
}
export default getters
