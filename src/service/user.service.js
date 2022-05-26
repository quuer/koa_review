const User = require('../model/user.model')

class UserService {
  async add({ user_name, password }) {
    return await User.create({ user_name, password })
  }

  async getUserInfo({ user_id, user_name, password }) {
    const whereOpt = {}
    user_id && Object.assign(whereOpt, { user_id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    const res = await User.findOne({
      attributes: ['user_id', 'user_name', 'password'],
      where: whereOpt
    })
    return res?.dataValues
  }

}

module.exports = new UserService()
