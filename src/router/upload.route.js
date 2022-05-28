const Router = require('koa-router')
const { API_PREFIX } = require('../config/default.config')
const router = new Router({ prefix: `${API_PREFIX}/file` })
const { uploadFile } = require('../controller/upload.controller')
const { auth } = require('../middleware/auth.middleware')

// 文件上传
router.post('/upload', uploadFile)

module.exports = router
