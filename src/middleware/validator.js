const validator = (validateFunc) => {
  return async (ctx, next) => {
    const { error } = validateFunc(ctx.request.body)
    if (error) {
      console.log('校验器【 %s 】，数据校验失败', validateFunc.name)
      console.error(error)
      // 使用joi时的自定义错误||joi提供的错误展示
      ctx.body = {
        code: 0,
        success: false,
        result: { err: error.message || error.details[0].message }
      }
      return
    }
    await next()
  }
}
module.exports = {
  validator
}
