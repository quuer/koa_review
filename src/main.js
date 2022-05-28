const Koa = require('koa')
const app = new Koa()
const errorHandler = require('./error/errorHandler')
const koaStatic = require('koa-static')
const koaBody = require('koa-body')
const router = require('./router/index')
const { APP_PORT, APP_BASE_URL } = require('./config/default.config')
const path = require('path')

// 实现文件上传
app.use(koaBody({
    multipart: true // 支持文件上传
  })
)
app.use(koaStatic(path.resolve(__dirname, '../public/upload')))
app.use(router.routes()).use(router.allowedMethods())
app.on('error', errorHandler)
app.listen(APP_PORT, () => {
  console.log(`koa server is on ${APP_BASE_URL}:${APP_PORT}`)
})
