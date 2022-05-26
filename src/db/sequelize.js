const { Sequelize } = require('sequelize')
const {
  MY_SQL_DATABASE,
  MY_SQL_USER_NAME,
  MY_SQL_PASSWORD,
  MY_SQL_HOST,
  MY_SQL_DIALECT_TYPE
} = require('../config/default.config')

// 连接数据库
const sequelize = new Sequelize(
  MY_SQL_DATABASE,
  MY_SQL_USER_NAME,
  MY_SQL_PASSWORD,
  {
    host: MY_SQL_HOST,
    dialect: MY_SQL_DIALECT_TYPE
  }
)

// ONCE:测试连接是否正常
// sequelize.
//   authenticate().
//   then(res => {
//     console.log('成功连接数据库')
//   }).
//   catch(err => {
//     console.log('连接数据库失败:', err)
//   })

module.exports = sequelize
