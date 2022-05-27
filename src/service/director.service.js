const Director = require('../model/director.model')
const Film = require('../model/film.model')
const { Op } = require('sequelize')

class DirectorService {
  async query({ dir_name }) {
    return await Director.findAndCountAll({
      offset: 0,
      limit: 10,
      where: { dir_name },
      attributes: ['dir_id', 'dir_name', 'gender'],
      include: {
        model: Film,
        as: 'film_info',
        attributes: ['dir_id', 'film_name', 'film_id']
      }
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
        return destroyRes
      }
      else {
        return { err: '删除操作失败' }
      }
    }
  }

  async update(uptObj, dir_id) {
    return await Director.update(uptObj, { where: { dir_id } })
  }
}

module.exports = new DirectorService()
