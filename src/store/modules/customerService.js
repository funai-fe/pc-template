
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { Notification } from 'element-ui';
import { getSessionRecords } from "@/api/customerService";
import { getSessionList, addSession, getSessionChatRecord } from "@/api/chat";
import { chatTypeMap } from '@/config/index'
import robot from "@/assets/chat/icon_aliwangwang_nor@2x.png";
import activeRobot from "@/assets/chat/icon_aliwangwang_sel@2x.png";
import artificial from "@/assets/chat/icon_comment_nor@2x.png";
import activeArtificial from "@/assets/chat/icon_comment_sel@2x.png";

const state = {
    // 人工
    client: null,
    assistantSessionInitFlag: false, // 人工客服是否已经初始化过数据
    // 存放客服菜单
    sliderBar: [
        // 机器人
        {
            title: "FunAI机器人客服",
            isActive: true,
            icon: robot,
            messages: [],
            type: 'robot',
            activeIcon: activeRobot,
        },
        // 人工
        {
            title: "FunAI人工客服",
            isActive: false,
            messages: [],
            type: 'manual',
            icon: artificial,
            activeIcon: activeArtificial
        },
    ]
};

const mutations = {
    // 设置消息
    SET_MESSAGES(state, { page, type, list }) {
        state.sliderBar.forEach(element => {
            element.type === type && (page.$set(element, 'messages', list))
        });
    },

    // 设置当前会话tab index
    SET_CURRENT_SESSION(state, item) {
        state.sliderBar.forEach((i) => {
            if (i.type === item.type) {
                i.isActive = true
            } else {
                i.isActive = false
            }
        });
    },
    // 设置初始化开关
    SET_INIT_FLAG(state, flag) {
        state.assistantSessionInitFlag = flag
    },

    //新增消息记录
    ADD_SESSION_MESSAGE(state, { type, msg }) {
        state.sliderBar.forEach(element => {
            element.type === type && (element.messages.push(msg))
        });
        // state.currentSessionRecords.push(msg)
    },
    // 设置ws服务
    SET_CLIENT(state, client) {
        state.client = client
    }
};

const actions = {
    // 初始化数据
    initData({ dispatch, rootGetters }, page) {
        try {
            return new Promise((resolve, reject) => {
                getSessionList({ user_id: rootGetters.userId, type: chatTypeMap['customerChat'].chatType }).then(async (response) => {
                    
                    const { list = [] } = response.data || {}
                    let result = []
                    let getSessionRecordReq = null
                    if (!list.length) {
                        let addSessionReqObj = {
                            user_id: rootGetters.userId,
                            session_name: rootGetters.userId + '的机器人会话',
                            type: chatTypeMap['customerChat'].chatType
                        };
                        const { data } = await addSession(addSessionReqObj);
                        getSessionRecordReq = {
                            sessionId: data.session && data.session.session_id || ''
                        }
                    } else {
                        result = list[0]
                        getSessionRecordReq = {
                            sessionId: result.session_id || '',
                            page,
                        }
                    }
                    dispatch('fetchMessages', getSessionRecordReq);
                    resolve()
                }).catch(error => {
                    console.error('客服会话初始化异常，请联系管理员', error);
                    reject(error)
                })
            })
        } catch (error) {
            console.error('查询聊天对话信息异常，请刷新重试', error);
        }
    },
    // 切换菜单
    changeCurrentChatType({ state, commit, dispatch, rootGetters }, { item, page }) {
        commit('SET_CURRENT_SESSION', item);

        let { type } = item
        if (type === 'manual' && !state.assistantSessionInitFlag) {
            try {
                return new Promise((resolve, reject) => {
                    getSessionRecords({ sessionId: rootGetters.userId }).then(response => {
                        const { list } = response.data
                        let record = []
                        if (!list) {
                            record.push({
                                create_time: new Date().toLocaleString().replaceAll("/", "-"),
                                role: 'assistant',
                                content: '欢迎来到FunAi，我是FunAi的人工客服😀，您可以向我询问关于FunAi的任何问题~'
                            })
                        } else {
                            record = list;
                            record.unshift({
                                create_time: new Date().toLocaleString().replaceAll("/", "-"),
                                role: 'assistant',
                                content: '欢迎来到FunAi，我是FunAi的人工客服😀，您可以向我询问关于FunAi的任何问题~'
                            })
                        }
                        commit('SET_MESSAGES', { page, type: 'manual', list: record });

                        dispatch('initWebSocket');
                        commit('SET_INIT_FLAG', true)
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
                })
            } catch (error) {
                console.error('查询聊天对话信息异常，请刷新重试', error);
            }
        } else if (type === 'robot') {

        }
    },

    initWebSocket({ state, commit, rootGetters }) {
        if (state.client) return

        const socket = new SockJS(`/ws/ep?token=${rootGetters.token}`);
        const client = Stomp.over(socket);

        client.connect({}, () => {
            client.subscribe(`/topic/assistant/${rootGetters.userId}`, (msg) => {
                //接收到的消息数据
                const receiveMsg = JSON.parse(msg.body);
                if (receiveMsg.from_id != rootGetters.userId) {
                    Notification.success({
                        title: `【${receiveMsg.from_name}】发来一条消息`,
                        message: receiveMsg.content.length < 8 ? receiveMsg.content : receiveMsg.content.substring(0, 8) + "...",
                        showClose: false
                    });
                }
                commit('ADD_SESSION_MESSAGE', receiveMsg)
            });
        }, err => {
            Notification.info({
                title: '系统消息',
                message: "无法建立连接，请尝试重新登陆系统或联系管理员~",
                position: "top-right"
            });
        });

        commit('SET_CLIENT', client)
    },

    // 选中菜单项
    // selectSession({ commit, dispatch }, { page, menu, session }) {
    //     let { type } = menu

    //     if (session.key === 'add') {
    //         // 点击新增会话则清空current_session
    //         commit('SET_CURRENT_SESSION', { type: type, currentSession: null });
    //     } else {
    //         // 处理页面消息等请求
    //         dispatch('handleMessageRequest', { page, type, sessionId: session.session_id });

    //         // 设置当前选中的会话
    //         commit('SET_CURRENT_SESSION', { type: type, currentSession: session.session_id });
    //     }

    //     dispatch('routingJump', { page, menu, session });
    // },

    // 处理消息请求 
    // handleMessageRequest({ dispatch }, { page, type, sessionId }) {
    //     let { pdfChat, multiPdfChat } = chatTypeMap
    //     if (type === pdfChat.chatType || type === multiPdfChat.chatType) {
    //         // 文件聊天的话需要请求聊天文件
    //         dispatch('getFileChatBySessionId', { page, type, sessionId });
    //     }

    //     dispatch('fetchMessages', { page, type, sessionId });

    // },

    // 页面路由跳转
    // routingJump({ commit }, { page, menu, session }) {
    //     let { addSessionRoute = "", pageRoute = "" } = menu || {};

    //     if (session.key === 'add') {
    //         addSessionRoute && (page.$router.push(addSessionRoute))

    //     } else {
    //         if (pageRoute) {
    //             pageRoute.params = { sessionId: session.session_id }
    //             page.$router.push(pageRoute)
    //         }
    //     }
    // },

    // 请求当前类型聊天菜单菜单
    // async fetchSessions({ commit, state, rootGetters, dispatch }, { page, }) {
    //     // 异步获取每个菜单项消息，并将消息存储在基本信息中
    //     await Promise.all(
    //         state.menus.map(async (item) => {
    //             if (item.hadSubMenu) {
    //                 const { data } = await getSessionList({ user_id: rootGetters.userId, type: item.type });
    //                 console.log('请求菜单列表', data.list)
    //                 commit('SET_MENUS', { list: data.list || [], type: item.type });
    //             }

    //         })
    //     );
    //     // todo 没有currentSession的情况
    //     if (state.currentSession) {
    //         dispatch('handleMessageRequest', { page, type: state.currentType, sessionId: state.currentSession })
    //     }
    // },

    // 获取session的对话信息
    async fetchMessages({ commit }, { sessionId, page }) {
        try {
            return new Promise((resolve, reject) => {
                getSessionChatRecord({ sessionId: sessionId }).then(response => {
                    let { record = [] } = response.data || {}
                    if (record || record.length) {
                        record.unshift({
                            create_time: new Date().toLocaleString().replaceAll("/", "-"),
                            role: 'assistant',
                            content: '欢迎来到FunAi，我是FunAi的智能客服😀，您可以向我询问关于FunAi的任何问题~'
                        })
                    } else {
                        record.push({
                            create_time: new Date().toLocaleString().replaceAll("/", "-"),
                            role: 'assistant',
                            content: '欢迎来到FunAi，我是FunAi的智能客服😀，您可以向我询问关于FunAi的任何问题~'
                        })
                    }
                    commit('SET_MESSAGES', { page, type: 'robot', list: record });
                    resolve()
                }).catch(error => {
                    console.error('获取客服消息失败，请重试', error);
                    reject(error)
                })
            })
        } catch (error) {
            console.error('查询聊天对话信息异常，请刷新重试', error);
        }
    },

    // 根据sessionid获取会话文件
    // async getFileChatBySessionId({ commit }, { page, type, sessionId }) {
    //     try {
    //         return new Promise((resolve, reject) => {
    //             getFileChatBySessionId({ sessionId: sessionId }).then(response => {
    //                 const { fileChat } = response.data
    //                 commit('SET_SESSION_FILE', { page, type, sessionId, fileChat: fileChat || [] });
    //                 resolve()
    //             }).catch(error => {
    //                 reject(error)
    //             })
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
