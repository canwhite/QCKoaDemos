//用koa-compose把多个中间件合成一个
const Koa = require("koa");
const app = new Koa();
const compose = require("koa-compose");


//logger中间件
const logger = (ctx,next) =>{
    //ES6之后模版字符串，可以使用反引号和 ${}插值输出内容，还他喵的支持换行
    console.log(`
     ---${Date.now()}---
     ---${ctx.request.method}---
     ---${ctx.request.url}---
     `)
    //往下传递
    next();
};

//response
const main = ctx =>{
    ctx.response.body = "hello World";
};

//用koa-compose把它们合成一个,在compose里边放一个中间件数组
const middleware = compose([logger,main]);
app.use(middleware);

app.listen(3500);