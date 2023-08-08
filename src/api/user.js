import request from '@/utils/request'
// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 签到接口
export function getInfo(params) {
  return request({
    url: '/user/dailyAttendance',
    method: 'get',
    params: params
  })
}

// 退出登录
export function logout(params) {
  return request({
    url: `/user/logout/${params}`,
    method: 'get',
    params: params
  })
}

// 获取额度
export function getUserQuotaInfo(params) {
  return request({
    url: `/user/getUserQuotaInfo/${params}`,
    method: 'get',
    params: params
  })
}

// 获取邀请码
export function getInviteRecord(params) {
  return request({
    url: `/user/getInviteRecord/${params}`,
    method: 'get',
    params: params
  })
}