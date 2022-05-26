const Director = require('../model/director.model')
const { Op } = require('sequelize')

class DirectorService {
  async query({ dir_name }) {
    return await Director.findAndCountAll({
      offset: 0,
      limit: 10,
      where: { dir_name }
    })
  }

  async add({ dir_name, gender }) {
    return await Director.create({ dir_name, gender })
  }

  async remove({ dir_id }) {
    const findRes = await Director.findAll({
      where: {
        dir_id: {
          [Op.in]: dir_id
        }
      }
    })
    if (findRes.length === 0) {
      return { err: '未查到对应的id' }
    }
    else {
      const destroyRes = await Director.destroy({
        where: {
          dir_id: {
            [Op.in]: dir_id
          }
        }
      })
      if (destroyRes > 0) {
        return findRes
      }
      else {
        return { err: '删除操作失败' }
      }
    }
  }
}

module.exports = new DirectorService()
