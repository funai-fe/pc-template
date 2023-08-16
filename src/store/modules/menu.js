// store.js
// sessions: [
//     {
//         session_id: 'session1',
//         session_name: '会话1',
//         messages: [
//             { text: '你好', time: '09:00', role: 'user' },
//             { text: '你好，有什么需要帮助的吗？', time: '09:01', role: 'assistant' },
//         ],
//     },
//     {
//         session_id: 'session2',
//         session_name: '会话2',
//         messages: [
//             { text: '这是会话2的消息1', time: '10:00', role: 'user' },
//             { text: '这是会话2的消息2', time: '10:01', role: 'assistant' },
//             { text: '这是会话2的消息3', time: '10:02', role: 'user' },
//         ],
//     }
// ]
import Vue from 'vue';
import { getSessionList, getSessionChatRecord, addSession, streamSessionChat } from "@/api/chat";
// import { getMenuAddItem } from '@/config/index'
const state = {
    // 存放菜单
    menus: [{
        name: 'AI对话',
        isNeedSession: true,
        sessions: [{
            "key": "add",
            "session_name": '创建新对话',
            "type": 0
        }],
        type: 0,
        key: 'normalChat',
        icon: 'common/icon_ai_duihua_sel@2x.png',
        activeIcon: 'common/icon_ai_duihua_sel@2x.png',
        addSessionRoute: { name: 'Index' }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'Chat' } // 正常跳转的路由页面
    }, {
        name: '单文件阅读',
        isNeedSession: false,
        type: 1,
        sessions: [{
            "key": "add",
            "session_name": '创建新对话',
            "type": 1
        }],
        key: 'pdfChat',
        icon: 'common/icon_danwenjian_nor@2x.png',
        activeIcon: 'common/icon_danwenjian_sel@2x.png',
        addSessionRoute: { name: 'ChatWithFile', params: { type: "single" } }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'FileChat' } // 正常跳转的路由页面
    }, {
        name: '多文件阅读',
        isNeedSession: false,
        type: 4,
        sessions: [{
            "key": "add",
            "session_name": '创建新对话',
            "type": 4
        }],
        key: 'multiPdfChat',
        icon: 'common/icon_duowenjian_nor@2x.png',
        activeIcon: 'common/icon_duowenjian_sel@2x.png',
        addSessionRoute: { name: 'ChatWithFile', params: { type: "multiple" } }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'FileChat' } // 正常跳转的路由页面
    }, {
        name: 'AI画图',
        isNeedSession: false,
        sessions: [],
        type: 99,
        key: 'draw',
        icon: 'common/icon_ai_huatu_nor@2x.png',
        activeIcon: 'common/icon_ai_huatu_sel@2x.png'
        // pageRoute: { name: 'GameChat' } // 正常跳转的路由页面
    }, {
        name: '冒险游戏',
        isNeedSession: false,
        sessions: [],
        type: 2,
        key: 'gameChat',
        icon: 'common/icon_maoxianyouxi_nor@2x.png',
        activeIcon: 'common/icon_maoxianyouxi_sel@2x.png',
        addSessionRoute: { name: 'ChatWithGame' }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'GameChat' } // 正常跳转的路由页面
    }, {
        name: '语言专家',
        isNeedSession: false,
        sessions: [],
        type: 100,
        key: 'language',
        icon: 'common/icon_yuyanzhuanjia_nor@2x.png',
        activeIcon: 'common/icon_yuyanzhuanjia_sel@2x.png',
        // pageRoute: { name: 'GameChat' } // 正常跳转的路由页面
    }],
    currentSession: 9600, // 当前选中的会话
};

const mutations = {
    // 设置菜单
    SET_MENUS(state, { list, type }) {
        state.menus.forEach(element => {
            element.type === type && (element.sessions = [...element.sessions, ...list])
        });
    },

    // 设置当前会话index
    SET_CURRENT_SESSION(state, sessionId) {
        state.currentSession = sessionId;
    },

    SET_SESSION_MESSAGES(state, { type, sessionId, list }) {
        let sessions = state.menus.find((session) => session.type === type) || [];
        let session = sessions.sessions && sessions.sessions.find((item) => item.session_id === sessionId) || []
        if (list && list.length) {
            Vue.$set(session, 'messages', list)
            // session.messages = list
        }
        debugger
        console.log(state.menus)
    },
};

const actions = {
    selectSession({ commit, dispatch }, { page, menu, session }) {

        dispatch('fetchMessages', { type: menu.type, sessionId: session.session_id });

        let { addSessionRoute = "", pageRoute = "" } = menu || {};

        if (session.key === 'add') {
            // 点击新增会话则清空current_session
            commit('SET_CURRENT_SESSION', null);
            addSessionRoute && (page.$router.push(addSessionRoute))
        } else {
            // 设置当前选中的会话
            commit('SET_CURRENT_SESSION', session.session_id);

            if (pageRoute) {
                pageRoute.params = { sessionId: session.session_id }
                page.$router.push(pageRoute)
            }
        }
    },

    // 请求当前类型聊天菜单菜单
    async fetchSessions({ commit, state, rootGetters }) {
        // 异步获取每个菜单项消息，并将消息存储在基本信息中
        await Promise.all(
            state.menus.map(async (item) => {
                if (item.isNeedSession) {
                    const { data } = await getSessionList({ user_id: rootGetters.userId, type: item.type });
                    console.log('请求菜单列表', data.list)

                    switch (item.type) {
                        case 0:
                            commit('SET_MENUS', { list: data.list || [], type: item.type });
                            break;
                        case 1:
                            commit('fileChat/SET_MENUS', list);
                            break;
                        case 4:
                            // commit('chat/SET_MENUS', list);
                            break;
                    }
                    // return {
                    //     ...item,
                    //     messages: list, // 将消息存储在菜单基本信息中
                    // };
                }

            })
        );

        //   commit("setMenuItems", menuList);
    },
    async fetchMessages({ commit }, { type, sessionId }) {
        try {
            return new Promise((resolve, reject) => {
                getSessionChatRecord({ sessionId: sessionId }).then(response => {
                    const { record } = response.data
                    commit('SET_SESSION_MESSAGES', { type, sessionId, list: record || [] });
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        } catch (error) {
            console.error('查询聊天对话信息异常，请刷新重试', error);
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
