
// export const menuMap = [{
//     name: 'AI对话',
//     type: 0,
//     key: 'normalChat',
//     icon: 'common/icon_ai_duihua_sel@2x.png',
//     activeIcon: 'common/icon_ai_duihua_sel@2x.png',
// },{
//     name: '单文件阅读',
//     type: 1,
//     key: 'pdfChat',
//     icon: 'common/icon_danwenjian_nor@2x.png',
//     activeIcon: 'common/icon_danwenjian_sel@2x.png'
// },{
//     name: '多文件阅读',
//     type: 4,
//     key: 'multiPdfChat',
//     icon: 'common/icon_duowenjian_nor@2x.png',
//     activeIcon: 'common/icon_duowenjian_sel@2x.png'
// },{
//     name: 'AI画图',
//     type: -1,
//     key: 'draw',
//     icon: 'common/icon_ai_huatu_nor@2x.png',
//     activeIcon: 'common/icon_ai_huatu_sel@2x.png'
// },{
//     name: '冒险游戏',
//     type: 2,
//     key: 'gameChat',
//     icon: 'common/icon_maoxianyouxi_nor@2x.png',
//     activeIcon: 'common/icon_maoxianyouxi_sel@2x.png'
// },{
//     name: '语言专家',
//     type: -2,
//     key: 'language',
//     icon: 'common/icon_yuyanzhuanjia_nor@2x.png',
//     activeIcon: 'common/icon_yuyanzhuanjia_sel@2x.png'
// }]

// 聊天类型相关配置
export const chatTypeMap = {
    // ✨通用聊天✨
    'normalChat': {
        chatType: 0 
    },
    // ✅AI文件聊天✅
    'pdfChat': {
        chatType: 1 
    },
    // 👾游戏聊天👾
    'gameChat': {
        chatType: 2 
    },
    // 👴超级AI助手聊天👴
    'expertChat': {
        chatType: 3 
    },
    // 🤖AI多文件聊天🤖
    'multiPdfChat': {
        chatType: 4 
    },
    // 客服聊天
    'customerChat': {
        chatType: 5
    },
}

/**
 * 聊天类型对应的一些映射
 * addRouteName: Chat   新增会话的时候跳转的路由      
 * routeName: ‘Index’   点击会话的时候跳转的聊天页面路由      
**/
// export const typeStateConfig = {
//     // 通用聊天
//     0: {
//         addRouteName: 'Index',
//         routeName: 'Chat'
//     },
//     // 单文件聊天
//     1: {
//         addRouteName: 'ChatWithFile',
//         routeName: 'FileChat'
//     },
//     // 游戏对话
//     2: {
//         addRouteName: 'ChatWithGame',
//         routeName: 'GameChat'
//     },
//     // 多文件聊天
//     4: {
//         addRouteName: 'ChatWithFile',
//         routeName: 'FileChat'
//     },
// }

// 每个聊天菜单第一项都是新增按钮
// export const getMenuAddItem = (map) => {
//     const config = chatTypeMap[map]
//     return {
//         "key": "add",
//         "session_name": config.addMenuName,
//         "type": config.chatType
//     }
// }