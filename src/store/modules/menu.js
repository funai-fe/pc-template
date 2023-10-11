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
// import Vue from 'vue';
import SSEManager from '@/utils/sse'
import { getSessionList, getSessionChatRecord, getFileChatBySessionId, addSession, streamSessionChat } from "@/api/chat";
// import { getMenuAddItem } from '@/config/index'
import { getCurrentType, getCurrentSession, setCurrentSession } from '@/utils/auth'
import { chatTypeMap } from '@/config/index'
const state = {
    // 存放菜单
    menus: [{
        name: 'AI对话',
        hadSubMenu: true,
        fixedSession: [{ // 每个菜单固定的一个对话框
            "key": "add",
            "session_name": '创建新对话',
            "type": 0
        }],
        sessions: [],
        type: 0,
        key: 'normalChat',
        icon: 'common/icon_ai_duihua_sel@2x.png',
        activeIcon: 'common/icon_ai_duihua_sel@2x.png',
        addSessionRoute: { name: 'Index' }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'Chat' } // 正常跳转的路由页面
    }, {
        name: '单文件阅读',
        hadSubMenu: true,
        type: 1,
        fixedSession: [{
            "key": "add",
            "session_name": '创建新对话',
            "type": 1
        }],
        sessions: [],
        key: 'pdfChat',
        icon: 'common/icon_danwenjian_nor@2x.png',
        activeIcon: 'common/icon_danwenjian_sel@2x.png',
        addSessionRoute: { name: 'ChatWithFile', params: { type: "single" } }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'SingleFileChat' } // 正常跳转的路由页面
    }, {
        name: '多文件阅读',
        hadSubMenu: true,
        type: 4,
        fixedSession: [{
            "key": "add",
            "session_name": '创建新对话',
            "type": 4
        }],
        sessions: [],
        key: 'multiPdfChat',
        icon: 'common/icon_duowenjian_nor@2x.png',
        activeIcon: 'common/icon_duowenjian_sel@2x.png',
        addSessionRoute: { name: 'ChatWithFile', params: { type: "multiple" } }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'MultipleFileChat' } // 正常跳转的路由页面
    }, {
        name: 'AI画图',
        hadSubMenu: false,
        sessions: [],
        type: 99,
        key: 'draw',
        icon: 'common/icon_ai_huatu_nor@2x.png',
        activeIcon: 'common/icon_ai_huatu_sel@2x.png',
        pageRoute: { name: 'SmartLanguage' } // 正常跳转的路由页面
    }, {
        name: '冒险游戏',
        hadSubMenu: true,
        fixedSession: [{
            "key": "add",
            "session_name": '创建新游戏',
            "type": 2
        }],
        sessions: [],
        type: 2,
        key: 'gameChat',
        icon: 'common/icon_maoxianyouxi_nor@2x.png',
        activeIcon: 'common/icon_maoxianyouxi_sel@2x.png',
        addSessionRoute: { name: 'ChatWithGame' }, // 创建的时候跳转的页面路由名称，即key为‘add’代表是创建会话，才会跳转这个
        pageRoute: { name: 'GameChat' } // 正常跳转的路由页面
    }, {
        name: '语言专家',
        hadSubMenu: false,
        sessions: [],
        type: 100,
        key: 'language',
        icon: 'common/icon_yuyanzhuanjia_nor@2x.png',
        activeIcon: 'common/icon_yuyanzhuanjia_sel@2x.png',
        pageRoute: { name: 'SmartLanguage' } // 正常跳转的路由页面
    }],
    currentType: getCurrentType(),
    currentSession: getCurrentSession() || null, // 当前选中的会话
    createMenuType: null // 创建会话的菜单类型(因为有可能是跨会话类型去创建)
};

const mutations = {
    // 设置菜单
    SET_MENUS(state, { list, type }) {
        state.menus.forEach(element => {
            element.type === type && (element.sessions = [...element.fixedSession, ...list])
        });
        // console.log('更新完的menu:::', state.menus)
    },

    // 设置当前会话index
    SET_CURRENT_SESSION(state, { type, currentSession }) {
        state.currentSession = currentSession;
        setCurrentSession({ type, currentSession })
    },

    // 设置会话的聊天内容
    SET_SESSION_MESSAGES(state, { page, type, sessionId, list }) {
        let sessions = state.menus.find((session) => session.type === type) || [];
        let session = sessions.sessions && sessions.sessions.find((item) => item.session_id === sessionId) || []
        if (list && list.length) {
            page.$set(session, 'messages', list)
        }
    },

    // 给文件聊天session添加文件对象
    SET_SESSION_FILE(state, { page, type, sessionId, fileChat }) {
        let sessions = state.menus.find((session) => session.type === type) || [];
        let session = sessions.sessions && sessions.sessions.find((item) => item.session_id === sessionId) || []
        if (fileChat && fileChat.length) {
            page.$set(session, 'file', fileChat)
        }
        console.log('更新完消息:::', fileChat)
    },

    // 修改创建会话的类型
    SET_CREATE_MENU_TYPE(state, createMenuType) {
        state.createMenuType = createMenuType
    }
};

const actions = {
    // 选中菜单项
    selectSession({ commit, dispatch }, { page, menu, session }) {
        let { type } = menu

        if (session.key && session.key === 'add') {
            commit('SET_CREATE_MENU_TYPE', menu) // 临时存储即将创建的会话归属菜单

            let { normalChat } = chatTypeMap
            // 普通会话新增直接打开弹窗
            if (type === normalChat.chatType) {
                commit('app/SET_ADD_SESSION_DIALOG', true, { root: true });
                return
            }
            // 点击新增会话则清空current_session
            commit('SET_CURRENT_SESSION', { type: type, currentSession: null });
        } else {
            // 处理页面消息等请求
            dispatch('handleMessageRequest', { page, type, sessionId: session.session_id, session });

            // 设置当前选中的会话
            commit('SET_CURRENT_SESSION', { type: type, currentSession: session.session_id });
        }

        dispatch('routingJump', { page, menu, session });
    },

    // 处理消息请求 
    handleMessageRequest({ dispatch }, { page, type, sessionId, session = {} }) {
        let { pdfChat, multiPdfChat } = chatTypeMap
        if (type === pdfChat.chatType || type === multiPdfChat.chatType) {
            // 文件聊天的话需要请求聊天文件
            dispatch('getFileChatBySessionId', { page, type, sessionId });
        }

        dispatch('fetchMessages', { page, type, sessionId, session });

    },

    // 页面路由跳转
    routingJump({ commit }, { page, menu, session }) {
        let { addSessionRoute = "", pageRoute = "" } = menu || {};

        if (session.key === 'add') {
            addSessionRoute && (page.$router.push(addSessionRoute))

        } else {
            if (pageRoute) {
                pageRoute.params = { sessionId: session.session_id }
                page.$router.push(pageRoute)
            }
        }
    },

    // 请求当前类型聊天菜单菜单
    async fetchSessions({ commit, state, rootGetters, dispatch }, { page }) {
        // 异步获取每个菜单项消息，并将消息存储在基本信息中
        await Promise.all(
            state.menus.map(async (item) => {
                if (item.hadSubMenu) {
                    const { data } = await getSessionList({ user_id: rootGetters.userId, type: item.type });
                    console.log('请求菜单列表', data.list)
                    commit('SET_MENUS', { list: data.list || [], type: item.type });
                }
            })
        );
        // todo 没有currentSession的情况
        if (state.currentSession) {
            dispatch('handleMessageRequest', { page, type: state.currentType, sessionId: state.currentSession })
        }
    },

    // 获取session的对话信息
    async fetchMessages({ commit, rootGetters }, { page, type, sessionId, session }) {
        try {
            return new Promise((resolve, reject) => {
                getSessionChatRecord({ sessionId: sessionId }).then(response => {
                    const { record } = response.data
                    switch(type) {
                        case chatTypeMap.normalChat.chatType: 
                            record.unshift({
                                role: "assistant",
                                content: `你好「${rootGetters.name}」我是FunAI机器人，我可以帮你解答任何我能够回答的问题😀, 让我们在当前会话${session.session_name ? `【${session.session_name}】` : ''}畅聊吧！`,
                            })
                            break
                        case chatTypeMap.pdfChat.chatType: 
                            record.unshift({
                                role: "assistant",
                                content: `你好「${rootGetters.name}」我是FunAI单文件聊天机器人，您上传的文档已经解析完毕，我可以帮你解答任何文档中的问题😀, 让我们在当前会话${session.session_name ? `【${session.session_name}】` : ''}畅聊吧！`,
                            })
                            break
                        case chatTypeMap.gameChat.chatType: 
                            record = record.slice(1)
                            record.unshift({
                                role: "assistant",
                                content: `你好「${rootGetters.name}」我是GameGPT，请点击下面的开始游戏😀让我们在当前会话${session.session_name ? `【${session.session_name}】` : ''}畅聊吧！`,
                            })
                            break
                        case chatTypeMap.expertChat.chatType: 
                            record.unshift({
                                role: "assistant",
                                content: `你好「${rootGetters.name}」我是FunAI助手，我可以帮你解答相关的问题😀, 让我们在当前会话${session.session_name ? `【${session.session_name}】` : ''}畅聊吧！`,
                            })
                            break
                        case chatTypeMap.multiPdfChat.chatType: 
                            record.unshift({
                                role: "assistant",
                                content: `你好「${rootGetters.name}」我是FunAI多文件聊天机器人，您上传的多份文档已经解析完毕，我可以帮你解答任何文档中的问题😀, 让我们在当前会话${session.session_name ? `【${session.session_name}】` : ''}畅聊吧！`,
                            })
                            break
                    }
                    commit('SET_SESSION_MESSAGES', { page, type, sessionId, list: record || [] });
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        } catch (error) {
            console.error('查询聊天对话信息异常，请刷新重试', error);
        }
    },

    // 根据sessionid获取会话文件
    async getFileChatBySessionId({ commit }, { page, type, sessionId }) {
        try {
            return new Promise((resolve, reject) => {
                getFileChatBySessionId({ sessionId: sessionId }).then(response => {
                    const { fileChat } = response.data
                    commit('SET_SESSION_FILE', { page, type, sessionId, fileChat: fileChat || [] });
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        } catch (error) {
            console.error('查询聊天对话信息异常，请刷新重试', error);
        }
    },

    async createSession({ state, commit, dispatch, rootGetters }, { name, page }) {
        let { type = null } = state.createMenuType

        let params = {
            user_id: rootGetters.userId,
            session_name: name,
            type
        }
        try {
            return new Promise((resolve, reject) => {
                addSession(params).then(async (response) => {
                    page.$message.success("创建会话 [" + params.session_name + "] 成功!")

                    const { data } = await getSessionList({ user_id: rootGetters.userId, type });
                    console.log('新增对话重新请求菜单列表：：：', data.list)
                    commit('SET_MENUS', { list: data.list || [], type });

                    // 关闭弹窗
                    commit('app/SET_ADD_SESSION_DIALOG', false, { root: true });

                    // 选中新增那个会话
                    dispatch('selectSession', { page, menu: state.createMenuType, session: response.data.session });

                    // 创建成功清空临时对象
                    commit('SET_CREATE_MENU_TYPE', null)

                    resolve()
                }).catch(error => {
                    page.$message.error(response.message)
                    reject(error)
                })
            })
        } catch (error) {
            console.error('创建会话异常，请刷新重试', error);
        }
    },

    // 发送聊天信息
    async addMessge({ commit }, { messageText, callBack }) {
        try {
            const sseInstance = new SSEManager({
                onMessage: (data) => {
                    // 处理收到的 SSE 消息

                    callBack && callBack()
                },
            });
            console.log(sseInstance)
            // return new Promise((resolve, reject) => {
            //     getFileChatBySessionId({ sessionId: sessionId }).then(response => {
            //         const { fileChat } = response.data
            //         commit('SET_SESSION_FILE', { page, type, sessionId, fileChat: fileChat || [] });
            //         resolve()
            //     }).catch(error => {
            //         reject(error)
            //     })
            // })
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
