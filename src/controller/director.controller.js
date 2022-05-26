const { query, add, remove } = require('../service/director.service')

class DirectorController {
  async queryDirector(ctx, next) {
    const { dir_name } = ctx.request.body
    const res = await query({ dir_name })
    ctx.body = {
      code: 0,
      success: true,
      result: res.rows
    }
  }

  async addDirector(ctx, next) {
    const { dir_name, gender } = ctx.request.body
    const res = await add({ dir_name, gender })
    const result = {
      dir_id: res.dir_id,
      dir_name: res.dir_name,
      gender: res.gender
    }
    ctx.body = {
      code: 0,
      success: true,
      result
    }
  }

  async removeDirector(ctx, next) {
    const { dir_id } = ctx.request.body
    const res = await remove({ dir_id })
    ctx.body = {
      code: 0,
      success: true,
      result: res
    }
  }
}
module.exports = new DirectorController()
