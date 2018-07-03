const Koa = require('koa')
const logger  = require('koa-logger')

const app = new Koa()

const mid1 = () => { 
  return async (ctx, next) => { 
    ctx.body = '<h3>请求 => 第一个中间件 </h3>' 
    await next()
    ctx.body += '<h3>响应 <= 第一个中间件 </h3>'
  }
}

const mid2 = () => { 
  return async (ctx, next) => { 
    ctx.body += '<h3>请求 => 第二个中间件 </h3>' 
    await next()
    ctx.body += '<h3>响应 <= 第二个中间件 </h3>'
  }
}

const mid3 = () => { 
  return async (ctx, next) => { 
    ctx.body += '<h3>请求 => 第三个中间件 </h3>' 
    await next()
    ctx.body += '<h3>响应 <= 第三个中间件 </h3>'
  }
}

app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())
app.use(async (ctx) => { 
  ctx.body += '<h2>处理业务逻辑核心代码 </h2>'
})

app.listen(2333)
