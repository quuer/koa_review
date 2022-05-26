const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')

const User = sequelize.define('review_user', {
    // 在这里定义模型属性, allowNull 不填默认为 true
    user_id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      comment: '用户id'
    },
    user_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: '用户姓名'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '用户密码'
    }
  }, {
    paranoid: true
  }
)

// ONCE：强制创建表
// User.sync({ force: true })

module.exports = User
