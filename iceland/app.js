const Koa = require('koa')

const app = new Koa()

// 注册中间件
app.use(async (ctx, next) => {
  await next()
  const r = ctx.r
  console.log(r)
})

app.use(async (ctx, next)=>{
  const axios = require('axios')
  const res = await axios.get('http://baidu.com')
  ctx.r = res.data
  await next()
})

app.listen(3000)
