const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')

const Film = sequelize.define('review_film', {
    // 在这里定义模型属性, allowNull 不填默认为 true
    dir_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: '导演id'
    },
    film_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '电影名称'
    },
    film_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      comment: '电影id'
    }
  }, {
    paranoid: true
  }
)

// ONCE：强制创建表
// Film.sync({ force: true })

module.exports = Film
