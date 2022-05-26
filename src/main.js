const Koa = require('koa')
const app = new Koa()
const errorHandler = require('./error/errorHandler')
const router = require('./router/index')
const koaBody = require('koa-body')
const { APP_PORT, APP_BASE_URL } = require('./config/default.config')

app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())
app.on('error', errorHandler)
app.listen(APP_PORT, () => {
  console.log(`koa server is on ${APP_BASE_URL}:${APP_PORT}`)
})
