
const tokens = {
  user: {
    token: 'user'
  },
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'user': {
    token: "eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScs5ILHEPCFHSUUqtKFCyMjSzNDAHInMDHaXS4tQizxSgGgsLIxNDsxSDeANDC4t4YwsDs0QDy7R4o2RLAwsjY8t4A4NESyWIer_E3FSgjqeTOyAIKuyTWpaaAzS9FgAsyn_fdwAAAA.4Qo3RqYAH7g_RIjX5yubaFqLrOikDWBwHrPs3prkZUY3WqN9EpLJvGBQwQmn0O3jXcD5pQiVkBiscBzsw3zvOg",
    userId: "882416d0_0188_3806a09f_2c908239_00a9",
    userLevel: 1,
    username: "哈哈哈"
  },
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { loginAcct } = config.body
      const token = tokens[loginAcct]

      // mock error
      if (!token) {
        return {
          code: 10002,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: users[token.token]
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout\.*',
    type: 'post',
    response: _ => {
      return { "code": 20000, "message": "成功", "data": {} }
    }
  },

  // 签到接口
  {
    url: '/user/dailyAttendance',
    type: 'get',
    response: config => {
      return { "code": 20000, "message": "已成功领取当日的签到额度！", "data": {} }
    }
  },

  // 获取额度
  {
    url: '/user/getUserQuotaInfo/\.*',
    type: 'get',
    response: config => {

      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "data": {
            "dailyChatQuota": 50,
            "dailySingleFileQuota": 5,
            "dailyMultiFileQuota": 2,
            "dailyText2ImgQuota": 50,
            "dailyChatUsage": 0,
            "dailySingleFileUsage": 0,
            "dailyMultiFileUsage": 0,
            "dailyText2ImgUsage": 0,
            "permanentChatQuota": 15,
            "permanentSingleFileQuota": 3,
            "permanentMultiFileQuota": 3,
            "permanentText2ImgQuota": 9,
            "permanentChatUsage": 0,
            "permanentSingleFileUsage": 0,
            "permanentMultiFileUsage": 0,
            "permanentText2ImgUsage": 0
          }
        }
      }
    }
  },

  // 获取邀请码
  {
    url: '/user/getInviteRecord/\.*',
    type: 'get',
    response: config => {

      return {
        "code": 20000,
        "message": "成功",
        "data": {
          "record": {
            "id": 54,
            "parentUserId": null,
            "userId": "882416d0_0188_3806a09f_2c908239_00a9",
            "code": "AL2jRvxBuT",
            "invitedNum": 0
          }
        }
      }
    }
  },
]
