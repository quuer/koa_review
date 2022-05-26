const errorType = {
  checkUserError: {
    code: 10001,
    success: false,
    result: { err: '用户名已存在' }
  },
  cryptPasswordErr: {
    code: 10002,
    success: false,
    result: { err: '注册错误，请稍候再试' }
  },
  userNotExistError: {
    code: 10002,
    success: false,
    result: { err: '用户名不存在' }
  },
  passwordError: {
    code: 10002,
    success: false,
    result: { err: '密码错误' }
  },
  invalidTokenErr: {
    code: 10002,
    success: false,
    result: { err: 'token无效' }
  },
  tokenExpiredErr: {
    code: 10002,
    success: false,
    result: { err: 'token已失效' }
  }
}

module.exports = errorType
