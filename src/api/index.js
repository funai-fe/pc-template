/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-09-08 20:41:21
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2023-09-08 20:48:41
 * @FilePath: /pc-template/src/api/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

// 签到接口
export function getTabs(params) {
  return request({
    url: '/prompt/listPromptCategorization',
    method: 'get',
    params: params
  })
}
