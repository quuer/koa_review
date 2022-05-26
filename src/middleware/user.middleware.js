const Joi = require('joi')

class UserMiddleware {
  userValidator(parsms) {
    const schema = Joi.object({
      user_name: Joi.
        string().
        min(2).
        max(255).
        required(),
      password: Joi.
        string().
        pattern(/^[a-zA-Z\d]{3,30}$/).
        error(new Error('密码格式不对，请重新设定'))
    })
    return schema.validate(parsms)
  }

}

module.exports = new UserMiddleware()
