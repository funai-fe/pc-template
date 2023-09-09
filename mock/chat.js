const sessionListMap = {
  // 常规聊天菜单
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
  // 单文件聊天菜单
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
  ],
  // 多文件聊天菜单
  4: [
    {
      "isDeleted": 0,
      "session_id": 12129,
      "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
      "session_name": "343697223843975168",
      "create_time": "2023-08-12 16:21:28",
      "update_time": "2023-08-12 16:21:28",
      "type": 4
    },
    {
      "isDeleted": 0,
      "session_id": 12130,
      "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
      "session_name": "343697223843975168 2",
      "create_time": "2023-08-12 16:34:28",
      "update_time": "2023-08-12 16:34:28",
      "type": 4
    }
  ],
  5: [
    {
      "isDeleted": 0,
      "session_id": 12669,
      "user_id": "882416d0_0188_3806a09f_2c908239_00a9",
      "session_name": "882416d0_0188_3806a09f_2c908239_00a9的机器人会话",
      "create_time": "2023-08-20 07:34:25",
      "update_time": "2023-08-20 07:34:25",
      "type": 5
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
  ],
  '12129': [
    {
      "role": "assistant",
      "content": "343697223843975168.pdf的摘要：这份长文标题为“人工智能、大数据时代”，内容主要是关于人工智能的讨论，作者是Steven。",
      "session_chat_id": 120048,
      "session_id": 12129,
      "token_num": 50,
      "create_time": "2023-08-12 16:21:36",
      "update_time": "2023-08-12 16:21:36",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-16k"
    }
  ],
  '12130': [
    {
      "role": "assistant",
      "content": "1-343697223843975168.pdf: 文档标题为“人工智能、大数据时代”，内容涉及人工智能，作者为steven。\n2-343697223843975168 2.pdf: 文档标题为“人工智能、大数据时代”，内容涉及人工智能，作者为steven。",
      "session_chat_id": 120057,
      "session_id": 12130,
      "token_num": 86,
      "create_time": "2023-08-12 16:34:40",
      "update_time": "2023-08-12 16:34:40",
      "is_deleted": 0,
      "chat_type": 0,
      "model_name": "gpt-3.5-turbo-16k"
    }
  ],
  '12669': [
    {
        "role": "user",
        "content": "你好",
        "session_chat_id": 127540,
        "session_id": 12669,
        "token_num": 11,
        "create_time": "2023-08-20 07:38:32",
        "update_time": "2023-08-20 07:38:32",
        "is_deleted": 0,
        "chat_type": 0,
        "model_name": "gpt-3.5-turbo-16k"
    },
    {
        "role": "assistant",
        "content": "你好呀！有什么我可以帮到你的吗？无论是关于AI绘画、冒险游戏、翻译，还是关于客服、专家系统、用户隐私等方面的问题，我都会尽力给你满意的答案哦！快告诉我你的问题吧！",
        "session_chat_id": 127541,
        "session_id": 12669,
        "token_num": 103,
        "create_time": "2023-08-20 07:38:32",
        "update_time": "2023-08-20 07:38:32",
        "is_deleted": 0,
        "chat_type": 0,
        "model_name": "gpt-3.5-turbo-16k"
    },
    {
        "role": "user",
        "content": "nh\n",
        "session_chat_id": 127843,
        "session_id": 12669,
        "token_num": 11,
        "create_time": "2023-08-20 17:24:01",
        "update_time": "2023-08-20 17:24:01",
        "is_deleted": 0,
        "chat_type": 0,
        "model_name": "gpt-3.5-turbo-16k"
    },
    {
        "role": "assistant",
        "content": "你好！很高兴为您解答问题。请问您有什么疑问呢？",
        "session_chat_id": 127844,
        "session_id": 12669,
        "token_num": 38,
        "create_time": "2023-08-20 17:24:01",
        "update_time": "2023-08-20 17:24:01",
        "is_deleted": 0,
        "chat_type": 0,
        "model_name": "gpt-3.5-turbo-16k"
    }
]
}

const fileChatBySessionIdMap = {
  // 单文件
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
  // 单文件
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
  ],
  // 多文件
  '12129': [
    {
      "id": "345481841014345728",
      "sessionId": 12129,
      "fileName": "343697223843975168",
      "fileUrl": "https://funai.oss-cn-beijing.aliyuncs.com/file/882416d0_0188_3806a09f_2c908239_00a9/12129/345481841014345728.pdf",
      "embeddingNum": 1,
      "fileSize": 54935,
      "isDeleted": 0,
      "createTime": "2023-08-12 16:21:32"
    },
    {
      "id": "345482051329331200",
      "sessionId": 12129,
      "fileName": "343697223843975168",
      "fileUrl": "https://funai.oss-cn-beijing.aliyuncs.com/file/882416d0_0188_3806a09f_2c908239_00a9/12129/345482051329331200.pdf",
      "embeddingNum": 1,
      "fileSize": 54935,
      "isDeleted": 0,
      "createTime": "2023-08-12 16:22:22"
    }
  ],
  // 多文件
  '12130': [
    {
      "id": "345485129726169088",
      "sessionId": 12130,
      "fileName": "343697223843975168",
      "fileUrl": "https://funai.oss-cn-beijing.aliyuncs.com/file/882416d0_0188_3806a09f_2c908239_00a9/12130/345485129726169088.pdf",
      "embeddingNum": 1,
      "fileSize": 54935,
      "isDeleted": 0,
      "createTime": "2023-08-12 16:34:35"
    },
    {
      "id": "345485130556641280",
      "sessionId": 12130,
      "fileName": "343697223843975168 2",
      "fileUrl": "https://funai.oss-cn-beijing.aliyuncs.com/file/882416d0_0188_3806a09f_2c908239_00a9/12130/345485130556641280.pdf",
      "embeddingNum": 1,
      "fileSize": 54935,
      "isDeleted": 0,
      "createTime": "2023-08-12 16:34:36"
    }
  ]
}

export default [
  // 新增聊天
  {
    url: '/chat/addSession',
    type: 'post',
    response: config => {
      const { type, user_id, session_name } = config.body
      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "session": {
            "isDeleted": null,
            "session_id": 10737,
            "user_id": user_id,
            "session_name": session_name,
            "create_time": new Date().toLocaleString().replaceAll("/", "-"),
            "update_time": new Date().toLocaleString().replaceAll("/", "-"),
            "type": type
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
