const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')

const Director = sequelize.define('review_director', {
    // 在这里定义模型属性, allowNull 不填默认为 true
    dir_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      comment: '导演id'
    },
    dir_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '导演姓名'
    },
    gender: {
      type: DataTypes.ENUM('01', '02'),
      allowNull: false,
      comment: '导演性别：01-男，02-女'
    }
  }, {
    paranoid: true
  }
)

// ONCE：强制创建表
// Director.sync({ force: true })

module.exports = Director
