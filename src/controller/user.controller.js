const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/default.config')
const { checkUserError, userNotExistError, passwordError } = require('../error/errorType')
const { add, getUserInfo } = require('../service/user.service')
class UserController {

  // 注册
  async register(ctx, next) {
    const { user_name, password } = ctx.request.body
    const res = await add({ user_name, password })
    ctx.body = {
      code: 0,
      success: true,
      result: null
    }
  }
  // 检查用户是否已存在库表中
  async checkRegisterUser(ctx, next) {
    const { user_name } = ctx.request.body
    const res = await getUserInfo({ user_name })
    if (!res) { // res为null：库表未找到同字段值
      await next()
    }
    else {
      return ctx.app.emit('error', checkUserError, ctx)
    }
  }

  // 加密密码
  async cryptPassword(ctx, next) {
    const { password } = ctx.request.body
    // 加10次盐
    const salt = bcrypt.genSaltSync(10)
    // hash保存了密文
    ctx.request.body.password = bcrypt.hashSync(password, salt)
    await next()
  }

  // 检查用户是否已存在库表中
  async checkLoginUser(ctx, next) {
    const { user_name, password } = ctx.request.body
    const res = await getUserInfo({ user_name })
    if (!res) { // res为null：库表未找到同字段值
      return ctx.app.emit('error', userNotExistError, ctx)
    }
    else {
      const isPasswordCorrect = bcrypt.compareSync(password, res.password)
      if (!isPasswordCorrect) {
        return ctx.app.emit('error', passwordError, ctx)
      }
      await next()
    }

  }

  // 登录
  async login(ctx, next) {
    // 生成token并返回
    const { user_name } = ctx.request.body
    const { password, ...res } = await getUserInfo({ user_name })
    const token = jwt.sign(res, JWT_SECRET, { expiresIn: '24h' })
    ctx.body = {
      code: 0,
      success: true,
      result: {
        user_id: res.user_id,
        user_name: res.user_name,
        token
      }
    }
  }
}

module.exports = new UserController()
