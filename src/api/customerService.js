import request from '@/utils/request'

// 人工客服聊天记录
export function getSessionRecords(params) {
  return request({
    url: `/ws/getSessionRecords/${params.sessionId}`,
    method: 'get',
    params
  })
}