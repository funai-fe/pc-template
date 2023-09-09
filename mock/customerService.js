export default [
  {
    url: '/ws/getSessionRecords\.*',
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
          "list": [
            {
              "id": 485,
              "content": "你好",
              "session_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "from_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "from_name": "哈哈哈",
              "create_time": "2023-08-20 07:38:44"
            },
            {
              "id": 487,
              "content": "hhh\n\n\n",
              "session_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "from_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "from_name": "哈哈哈",
              "create_time": "2023-08-23 21:37:22"
            },
            {
              "id": 488,
              "content": "o",
              "session_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "from_id": "882416d0_0188_3806a09f_2c908239_00a9",
              "from_name": "哈哈哈",
              "create_time": "2023-08-24 04:04:48"
            }
          ]
        }
      }
    }
  },
]
