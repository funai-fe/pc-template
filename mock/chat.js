const sessionListMap = {
  0: [
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
  ],
  1: [
    {
      "isDeleted": 0,
      "session_id": 11703,
      "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
      "session_name": "单文件聊天一",
      "create_time": "2023-08-07 18:10:03",
      "update_time": "2023-08-07 18:10:03",
      "type": 1
    },
    {
      "isDeleted": 0,
      "session_id": 11704,
      "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
      "session_name": "单文件聊天二",
      "create_time": "2023-08-07 18:10:49",
      "update_time": "2023-08-07 18:10:49",
      "type": 1
    }
  ]
}
const sessionChatRecordMap = {
  '9600': [
    {
      "role": "user",
      "content": "1",
      "session_chat_id": 103876,
      "session_id": 9600,
      "token_num": 10,
      "create_time": "2023-07-29 17:28:18",
      "update_time": "2023-07-29 17:28:18",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-0613"
    },
    {
      "role": "assistant",
      "content": "您好！有什么我可以帮助您解答的问题吗？",
      "session_chat_id": 103877,
      "session_id": 9600,
      "token_num": 31,
      "create_time": "2023-07-29 17:28:18",
      "update_time": "2023-07-29 17:28:18",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-0613"
    }
  ],
  '10737': [
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
  ],
  '11703': [
    {
      "role": "assistant",
      "content": "总结：根据提取的长文档的部分内容，可以总结为标题为“人工智能、大数据时代”的文章主要讨论了人工智能的话题，作者是Steven。\n\n问题：\n1. 这篇文章具体讨论了人工智能的哪些方面？\n2. 在大数据时代，人工智能有哪些应用？\n3. Steven在这篇文章中对人工智能持什么观点？",
      "session_chat_id": 113814,
      "session_id": 11703,
      "token_num": 126,
      "create_time": "2023-08-07 18:10:09",
      "update_time": "2023-08-07 18:10:09",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-16k"
    }
  ],
  '11704': [
    {
      "role": "assistant",
      "content": "总结：这篇长文的标题是“人工智能、大数据时代”，作者是Steven，主要讨论的内容是人工智能。根据提供的信息，很难具体总结长文的详细内容，但可以确定长文涉及人工智能和大数据时代的话题。\n\n问题：\n1. 这篇长文讨论了人工智能的哪些方面？\n2. 作者Steven在长文中对人工智能的看法是什么？\n3. 长文是否还涉及其他与人工智能相关的主题？",
      "session_chat_id": 113815,
      "session_id": 11704,
      "token_num": 159,
      "create_time": "2023-08-07 18:10:57",
      "update_time": "2023-08-07 18:10:57",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-16k"
    },
    {
      "role": "user",
      "content": "题目是什么",
      "session_chat_id": 120036,
      "session_id": 11704,
      "token_num": 15,
      "create_time": "2023-08-12 16:11:33",
      "update_time": "2023-08-12 16:11:33",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-16k"
    },
    {
      "role": "assistant",
      "content": "文章的标题是“人工智能、大数据时代”。",
      "session_chat_id": 120037,
      "session_id": 11704,
      "token_num": 25,
      "create_time": "2023-08-12 16:11:33",
      "update_time": "2023-08-12 16:11:33",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-16k"
    }
  ]
}

const fileChatBySessionIdMap = {
  '11703': [
    {
      "id": "343697223843975168",
      "sessionId": 11703,
      "fileName": "111",
      "fileUrl": "https://funai.oss-cn-beijing.aliyuncs.com/file/882416d0_0188_3806a09f_2c908239_00a9/11703/343697223843975168.pdf",
      "embeddingNum": 1,
      "fileSize": 54935,
      "isDeleted": 0,
      "createTime": "2023-08-07 18:10:10"
    }
  ],
  '11704': [
    {
      "id": "343697419772497920",
      "sessionId": 11704,
      "fileName": "111",
      "fileUrl": "https://funai.oss-cn-beijing.aliyuncs.com/file/882416d0_0188_3806a09f_2c908239_00a9/11704/343697419772497920.pdf",
      "embeddingNum": 1,
      "fileSize": 54935,
      "isDeleted": 0,
      "createTime": "2023-08-07 18:10:58"
    }
  ]
}

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
      return { "code": 20000, "message": "成功", "data": {} }
    }
  },
  // 获取对话信息
  {
    url: '/chat/getSessionChatRecord\.*',
    type: 'get',
    response: config => {
      const { sessionId } = config.query

      // mock error
      if (!sessionId) {
        return {
          code: 10009,
          message: '【get请求】: 缺少sessionId参数'
        }
      }
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "record": sessionChatRecordMap[sessionId]
        }
      }
    }
  },

  // 获取对话列表
  {
    url: '/chat/getSessionList\.*',
    type: 'get',
    response: config => {
      const { type } = config.query

      // mock error
      if (type == undefined && type == null && type == '') {
        return {
          code: 10009,
          message: '【get请求】: 缺少type参数'
        }
      }
      // debugger
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "list": sessionListMap[type]
        }
      }
    }
  },

  {
    url: '/file/getFileChatBySessionId\.*',
    type: 'get',
    response: config => {
      const { sessionId } = config.query

      // mock error
      if (!sessionId) {
        return {
          code: 10009,
          message: '【get请求】: 缺少sessionId参数'
        }
      }
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "fileChat": fileChatBySessionIdMap[sessionId]
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
      return { "code": 20000, "message": "成功", "data": {} }
    }
  }
]
