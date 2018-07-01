const Koa = require('koa')
const logger  = require('koa-logger')

const app = new Koa()

const mid1 = async (ctx, next) => { 
  ctx.type = 'text/html; charset=utf-8'
  ctx.body = 'mid1-->' 
  await next()
  ctx.body += 'mid1next-->'
}

const mid2 = async (ctx, next) => { 
  ctx.body += 'mid2-->'
  await next()
  ctx.body += 'mid2next-->'
}

const mid3 = async (ctx, next) => { 
  ctx.body += 'mid3-->'
  await next()
  ctx.body += 'mid3next-->'
}

app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(2333)
