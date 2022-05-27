const Router = require('koa-router')
const { API_PREFIX } = require('../config/default.config')
const router = new Router({ prefix: `${API_PREFIX}/director` })
const { queryDirector, addDirector, removeDirector,updateDirector } = require('../controller/director.controller')
const { addValidator } = require('../middleware/director.middleware')
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/validator')

// 新增
router.post('/add', validator(addValidator), addDirector)

// 查询
router.post('/query', queryDirector)

// 删除
router.post('/remove', auth, removeDirector)

// 更新
router.post('/update', auth, updateDirector)

module.exports = router
