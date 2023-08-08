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
const state = {
    sessions: [], // 存放会话列表
    currentSession: 10737, // 当前选中的会话
};

const mutations = {
    SET_SESSION(state, sessions) {
        state.sessions = sessions;
    },
    ADD_SESSION(state, session) {
        state.sessions.push(session);
    },
    SET_CURRENT_SESSION(state, sessionId) {
        state.currentSession = sessionId;
    },
    SET_SESSION_MESSAGES(state, { sessionId, messages }) {
        const session = state.sessions.find((session) => session.session_id === sessionId);
        if (session) {
            Vue.set(session, 'messages', messages);
        }
    },
    // ADD_MESSAGE_TO_SESSION(state, { sessionId, message }) {
    //     const session = state.sessions.find((session) => session.session_id === sessionId);
    //     if (session) {
    //         session.messages.push(message);
    //     }
    // }
};

const actions = {
    // setSessions({ commit }, sessions) {
    //     commit('SET_SESSION', sessions);
    // },
    // createSession({ commit }, session) {
    //     // 创建新会话，并保存到 state 中
    //     commit('ADD_SESSION', session);
    // },
    selectSession({ commit }, sessionId) {
        // 设置当前选中的会话
        commit('SET_CURRENT_SESSION', sessionId);
    },
    // setSessionMessages() {
    //     commit('SET_SESSION_MESSAGES', { sessionId, messages });
    // },
    // addMessageToSession() {
    //     commit('ADD_MESSAGE_TO_SESSION', { sessionId, message });
    // },

    async fetchSessions({ commit }, data) {
        try {
            const { user_id, type } = data
            return new Promise((resolve, reject) => {
                const list = [
                    {
                        isDeleted: 0,
                        session_id: 9600,
                        user_id: "882416d0_0188_3806a09f_2c908239_00a9",
                        session_name: "test1",
                        create_time: "2023-07-19 20:01:36",
                        update_time: "2023-07-19 20:01:36",
                        type: 0,
                    },
                    {
                        isDeleted: 0,
                        session_id: 10737,
                        user_id: "882416d0_0188_3806a09f_2c908239_00a9",
                        session_name: "test",
                        create_time: "2023-07-29 17:29:23",
                        update_time: "2023-07-29 17:29:23",
                        type: 0,
                    },
                ]
                commit('SET_SESSION', list);
                resolve()
                // getSessionList({ user_id: user_id, type: type }).then(response => {
                //     const { list } = response.data
                //     commit('SET_SESSION', list);
                //     resolve()
                // }).catch(error => {
                //     reject(error)
                // })
            })
        } catch (error) {
            console.error('查询聊天列表异常，请刷新重试', error);
        }
    },
    async fetchMessages({ commit }, sessionId) {
        try {
            return new Promise((resolve, reject) => {
                let record = [
                    {
                        role: "user",
                        content: "2",
                        session_chat_id: 103878,
                        session_id: 10737,
                        token_num: 10,
                        create_time: "2023-07-29 17:29:45",
                        update_time: "2023-07-29 17:29:45",
                        is_deleted: 0,
                        chat_type: 0,
                        model_name: "gpt-3.5-turbo-0613",
                    },
                    {
                        role: "assistant",
                        content:
                            "非常抱歉，我不能提供关于FunAI团队开发历史的详细信息。我只是一个大语言模型，被设计用来回答和解决各种问题。如果您有其他问题，我会尽力回答。",
                        session_chat_id: 103879,
                        session_id: 10737,
                        token_num: 80,
                        create_time: "2023-07-29 17:29:45",
                        update_time: "2023-07-29 17:29:45",
                        is_deleted: 0,
                        chat_type: 0,
                        model_name: "gpt-3.5-turbo-0613",
                    },
                ]
                commit('SET_SESSION_MESSAGES', { sessionId, messages: record });
                console.log(state.sessions, 'ooooo')
                resolve()
                // getSessionChatRecord({ sessionId: sessionId }).then(response => {
                //     const { record } = response.data
                //     commit('SET_SESSION_MESSAGES', { sessionId, messages: record });
                //     resolve()
                // }).catch(error => {
                //     reject(error)
                // })
            })
        } catch (error) {
            console.error('查询聊天对话信息异常，请刷新重试', error);
        }
    },
    async createSession({ commit }) {
        try {
            return new Promise((resolve, reject) => {
                addSession().then(response => {
                    const { data } = response
                    commit('ADD_SESSION', data);
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        } catch (error) {
            console.error('创建会话异常，请刷新重试', error);
        }
    },
    // 发送消息
    async sendMessage({ commit, state, rootState }, message) {
        try {
            const currentSessionId = state.currentSession;
            if (!currentSessionId) {
                console.error('当前对话SessionId未知.');
                return;
            }

            const params = {
                message,
                session_id: currentSessionId,
                session_type: currentSessionId,
                sse_emitter_id: currentSessionId,
                user_id: rootState.user.userId
            }
            return new Promise((resolve, reject) => {
                streamSessionChat(params).then(response => {
                    // commit('SET_SESSION_MESSAGES', { sessionId, messages: params });
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        } catch (error) {
            console.error('Error sending message:', error);
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
