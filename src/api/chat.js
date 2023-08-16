import request from '@/utils/request'
 
// 新增聊天
export function addSession(data = {}) {
    return request({
        url: '/chat/addSession',
        method: 'post',
        data
    })
}
// 发送内容(多轮聊天)
export function streamSessionChat(data = {}) {
    return request({
        url: '/chat/streamSessionChat',
        method: 'post',
        data
    })
}

// 获取对话列表
export function getSessionList(params) {
    return request({
        url: `/chat/getSessionList/${params.user_id}/${params.type}`,
        method: 'get',
        params: params
    })
}

// 获取聊天信息
export function getSessionChatRecord(params) {
    return request({
        // 生产用这个
        // url: `/chat/getSessionChatRecord/${params.sessionId}`,

        // dev用这个url
        url: `/chat/getSessionChatRecord/${params.sessionId}?sessionId=${params.sessionId}`,
        method: 'get',
        params,
    })
}

// 清空聊天信息
export function truncateSessionChatRecord(params) {
    return request({
        url: `/chat/truncateSessionChatRecord/${params.sessionId}`,
        method: 'put',
        // params: params
    })
}

// 删除聊天对话室
export function getChatMsg(params) {
    return request({
        url: `/chat/deleteSession/${params.sessionId}`,
        method: 'put',
        // params: params
    })
}
// https://funai.vip/api/chat/truncateSessionChatRecord/11477
// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
