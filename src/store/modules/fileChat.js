// store.js
// fileSessions: [
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
    // fileSessions: [], // 存放会话列表
    // currentSession: 10737, // 当前选中的会话
};

const mutations = {
    // SET_SESSION(state, fileSessions) {
    //     // state.fileSessions = [getMenuAddItem('pdfChat'), ...fileSessions]
    // },
    // ADD_SESSION(state, session) {
    //     state.fileSessions.push(session);
    // },
    // // SET_CURRENT_SESSION(state, sessionId) {
    // //     state.currentSession = sessionId;
    // // },
    // SET_SESSION_MESSAGES(state, { sessionId, messages }) {
    //     const session = state.fileSessions.find((session) => session.session_id === sessionId);
    //     if (session) {
    //         Vue.set(session, 'messages', messages);
    //     }
    // },
    // ADD_MESSAGE_TO_SESSION(state, { sessionId, message }) {
    //     const session = state.fileSessions.find((session) => session.session_id === sessionId);
    //     if (session) {
    //         session.messages.push(message);
    //     }
    // }
};

const actions = {
    // setSessions({ commit }, fileSessions) {
    //     commit('SET_SESSION', fileSessions);
    // },
    // createSession({ commit }, session) {
    //     // 创建新会话，并保存到 state 中
    //     commit('ADD_SESSION', session);
    // },
    // selectFileSession({ commit }, sessionId) {
    //     // 设置当前选中的会话
    //     commit('SET_CURRENT_SESSION', sessionId);

    // },
    // setSessionMessages() {
    //     commit('SET_SESSION_MESSAGES', { sessionId, messages });
    // },
    // addMessageToSession() {
    //     commit('ADD_MESSAGE_TO_SESSION', { sessionId, message });
    // },

    // async fetchSessions({ commit }, data) {
    //     try {
    //         const { user_id, type } = data
    //         return new Promise((resolve, reject) => {
    //             const list = [
    //                 {
    //                     "isDeleted": 0,
    //                     "session_id": 11703,
    //                     "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
    //                     "session_name": "文件对话2",
    //                     "create_time": "2023-08-07 18:10:03",
    //                     "update_time": "2023-08-07 18:10:03",
    //                     "type": 1
    //                 },
    //                 {
    //                     "isDeleted": 0,
    //                     "session_id": 11704,
    //                     "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
    //                     "session_name": "文件对话1",
    //                     "create_time": "2023-08-07 18:10:49",
    //                     "update_time": "2023-08-07 18:10:49",
    //                     "type": 1
    //                 }
    //             ]
    //             commit('SET_SESSION', list);
    //             resolve(list)
    //             // getSessionList({ user_id: user_id, type: type }).then(response => {
    //             //     const { list } = response.data
    //             //     commit('SET_SESSION', list);
    //             //     resolve()
    //             // }).catch(error => {
    //             //     reject(error)
    //             // })
    //         })
    //     } catch (error) {
    //         console.error('查询聊天列表异常，请刷新重试', error);
    //     }
    // },
    // async fetchMessages({ commit }, sessionId) {
    //     try {
    //         return new Promise((resolve, reject) => {
    //             let record = [
    //                 {
    //                     role: "user",
    //                     content: "2",
    //                     session_chat_id: 103878,
    //                     session_id: 10737,
    //                     token_num: 10,
    //                     create_time: "2023-07-29 17:29:45",
    //                     update_time: "2023-07-29 17:29:45",
    //                     is_deleted: 0,
    //                     chat_type: 0,
    //                     model_name: "gpt-3.5-turbo-0613",
    //                 },
    //                 {
    //                     role: "assistant",
    //                     content:
    //                         "非常抱歉，我不能提供关于FunAI团队开发历史的详细信息。我只是一个大语言模型，被设计用来回答和解决各种问题。如果您有其他问题，我会尽力回答。",
    //                     session_chat_id: 103879,
    //                     session_id: 10737,
    //                     token_num: 80,
    //                     create_time: "2023-07-29 17:29:45",
    //                     update_time: "2023-07-29 17:29:45",
    //                     is_deleted: 0,
    //                     chat_type: 0,
    //                     model_name: "gpt-3.5-turbo-0613",
    //                 },
    //             ]
    //             commit('SET_SESSION_MESSAGES', { sessionId, messages: record });
    //             resolve()
    //             // getSessionChatRecord({ sessionId: sessionId }).then(response => {
    //             //     const { record } = response.data
    //             //     commit('SET_SESSION_MESSAGES', { sessionId, messages: record });
    //             //     resolve()
    //             // }).catch(error => {
    //             //     reject(error)
    //             // })
    //         })
    //     } catch (error) {
    //         console.error('查询聊天对话信息异常，请刷新重试', error);
    //     }
    // }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
