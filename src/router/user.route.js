const Router = require('koa-router')
const { API_PREFIX } = require('../config/default.config')
const { userValidator } = require('../middleware/user.middleware')
const { validator } = require('../middleware/validator')
const { register, checkRegisterUser, cryptPassword, checkLoginUser, login } = require('../controller/user.controller')
const router = new Router({ prefix: `${API_PREFIX}/user` })

// 注册
router.post('/register',
  validator(userValidator), // 验证用户名、密码格式
  checkRegisterUser, // 检查库表是否已存在同名用户
  cryptPassword, // 加密密码
  register // 注册入库表
)

router.post('/login',
  validator(userValidator), // 验证用户名、密码格式
  checkLoginUser, // 检查库表是否已存在同名用户
  login // 登录

)
module.exports = router
