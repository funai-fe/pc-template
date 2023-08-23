
import { getSessionList, getSessionChatRecord, getFileChatBySessionId, addSession, streamSessionChat } from "@/api/chat";
import { getCurrentType, getCurrentSession, setCurrentSession } from '@/utils/auth'
import { chatTypeMap } from '@/config/index'
import robot from "@/assets/chat/icon_aliwangwang_nor@2x.png";
import activeRobot from "@/assets/chat/icon_aliwangwang_sel@2x.png";
import artificial from "@/assets/chat/icon_comment_nor@2x.png";
import activeArtificial from "@/assets/chat/icon_comment_sel@2x.png";

const state = {
    // 存放客服菜单
    sliderBar: [
        {
            title: "FunAI机器人客服",
            isActive: true,
            icon: robot,
            messages: [{
                // create_time: new Date().toLocaleString( ).replaceAll("/","-"),
                role: 'assistant',
                content: '欢迎来到FunAi，我是FunAi的智能客服😀，您可以向我询问关于FunAi的任何问题~'
            }],
            type: 'robot',
            activeIcon: activeRobot,
        },
        {
            title: "FunAI人工客服",
            isActive: false,
            messages: [{
                // create_time: new Date().toLocaleString( ).replaceAll("/","-"),
                role: 'assistant',
                content: '欢迎来到FunAi，我是FunAi的智能客服😀，您可以向我询问关于FunAi的任何问题~'
            }],
            sessionId: 'robot',
            icon: artificial,
            activeIcon: activeArtificial
        },
    ]
};

const mutations = {
    // 设置菜单
    SET_MENUS(state, { list, type }) {
        state.menus.forEach(element => {
            element.type === type && (element.sessions = [...element.sessions, ...list])
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
    }
};

const actions = {
    // 选中菜单项
    selectSession({ commit, dispatch }, { page, menu, session }) {
        let { type } = menu

        if (session.key === 'add') {
            // 点击新增会话则清空current_session
            commit('SET_CURRENT_SESSION', { type: type, currentSession: null });
        } else {
            // 处理页面消息等请求
            dispatch('handleMessageRequest', { page, type, sessionId: session.session_id });

            // 设置当前选中的会话
            commit('SET_CURRENT_SESSION', { type: type, currentSession: session.session_id });
        }

        dispatch('routingJump', { page, menu, session });
    },

    // 处理消息请求 
    handleMessageRequest({ dispatch }, { page, type, sessionId }) {
        let { pdfChat, multiPdfChat } = chatTypeMap
        if (type === pdfChat.chatType || type === multiPdfChat.chatType) {
            // 文件聊天的话需要请求聊天文件
            dispatch('getFileChatBySessionId', { page, type, sessionId });
        }

        dispatch('fetchMessages', { page, type, sessionId });

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
    async fetchSessions({ commit, state, rootGetters, dispatch }, { page, }) {
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
    async fetchMessages({ commit }, { page, type, sessionId }) {
        try {
            return new Promise((resolve, reject) => {
                getSessionChatRecord({ sessionId: sessionId }).then(response => {
                    const { record } = response.data
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
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
