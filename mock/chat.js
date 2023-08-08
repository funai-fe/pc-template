export default [
  // 新增聊天
  {
    url: '/chat/addSession',
    type: 'post',
    response: _ => {
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "session": {
            "isDeleted": null,
            "session_id": 11477,
            "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
            "session_name": "test3",
            "create_time": null,
            "update_time": null,
            "type": 0
          }
        }
      }
    }
  },
  // 发送消息
  {
    url: '/chat/streamSessionChat',
    type: 'post',
    response: _ => {
      return {"code":20000,"message":"成功","data":{}}
    }
  },
  // 获取对话信息
  {
    url: '/chat/getSessionChatRecord/*',
    type: 'get',
    response: config => {
      const { sessionId } = config.query

      // mock error
      if (!sessionId) {
        return {
          code: 10002,
          message: '缺少sessionId参数'
        }
      }
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "record": [
            {
              "role": "user",
              "content": "2",
              "session_chat_id": 103878,
              "session_id": 10737,
              "token_num": 10,
              "create_time": "2023-07-29 17:29:45",
              "update_time": "2023-07-29 17:29:45",
              "is_deleted": 0,
              "chat_type": 0,
              "model_name": "gpt-3.5-turbo-0613"
            },
            {
              "role": "assistant",
              "content": "非常抱歉，我不能提供关于FunAI团队开发历史的详细信息。我只是一个大语言模型，被设计用来回答和解决各种问题。如果您有其他问题，我会尽力回答。",
              "session_chat_id": 103879,
              "session_id": 10737,
              "token_num": 80,
              "create_time": "2023-07-29 17:29:45",
              "update_time": "2023-07-29 17:29:45",
              "is_deleted": 0,
              "chat_type": 0,
              "model_name": "gpt-3.5-turbo-0613"
            }
          ]
        }
      }
    }
  },

  // 获取对话列表
  {
    url: '/chat/getSessionList/\.*',
    type: 'get',
    response: config => {
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "list": [
            {
              "isDeleted": 0,
              "session_id": 9600,
              "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "session_name": "test1",
              "create_time": "2023-07-19 20:01:36",
              "update_time": "2023-07-19 20:01:36",
              "type": 0
            },
            {
              "isDeleted": 0,
              "session_id": 10737,
              "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "session_name": "test",
              "create_time": "2023-07-29 17:29:23",
              "update_time": "2023-07-29 17:29:23",
              "type": 0
            }
          ]
        }
      }
    }
  },

  // 清空聊天信息
  {
    url: '/chat/truncateSessionChatRecord/\.*',
    type: 'put',
    response: config => {
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "list": [
            {
              "isDeleted": 0,
              "session_id": 9600,
              "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "session_name": "test",
              "create_time": "2023-07-19 20:01:36",
              "update_time": "2023-07-19 20:01:36",
              "type": 0
            },
            {
              "isDeleted": 0,
              "session_id": 10737,
              "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "session_name": "test",
              "create_time": "2023-07-29 17:29:23",
              "update_time": "2023-07-29 17:29:23",
              "type": 0
            }
          ]
        }
      }
    }
  },

  // 删除聊天对话室
  {
    url: '/chat/deleteSession/\.*',
    type: 'put',
    response: config => {
      return {"code":20000,"message":"成功","data":{}}
    }
  }
]
