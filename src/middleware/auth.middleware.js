const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/default.config')
const { tokenExpiredErr, invalidTokenErr } = require('../error/errorType')

class AuthMiddleware {
  async auth(ctx, next) {
    const { authorization } = ctx.request.headers
    try {
      const res = jwt.verify(authorization, JWT_SECRET)
      ctx.state.user = res
    }
    catch (err) {
      switch (err.name) {
        case 'TokenExpiredError':
          return ctx.app.emit('error', tokenExpiredErr, ctx)
        case 'JsonWebTokenError':
          return ctx.app.emit('error', invalidTokenErr, ctx)
      }
    }
    await next()
  }
}

module.exports = new AuthMiddleware()
