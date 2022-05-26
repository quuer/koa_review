const { validate } = require('./validator')
const Joi = require('joi')

class DirectorMiddleware {
  addValidator(params) {
    const schema = Joi.object({
      dir_name: Joi.
        string().
        min(2).
        max(255).
        required(),
      gender: Joi.
        string()
    })
    return schema.validate(params)
  }
}

module.exports = new DirectorMiddleware()
