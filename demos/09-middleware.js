/*
*概念：
*处于http request 和 http response中间，用来实现某种中间功能，koa所有的功能都是通过中间件实现的
*app.use()用来加载中间件
*前面例子里的mian也是中间件，但是main本身就response了数据，它不需要next()转交
  一般用来，有时候针对同一路由，可以在response之前,用中间件判断一下登陆状态，做一些逻辑操作等
*每个中间件默认接收两个参数：(1)context (2)next 函数；只要调用next函数，就可以把执行权，转交下一个中间件

*/

const Koa = require('koa');
const app = new Koa();

//logger中间件
const logger = (ctx,next) =>{
    //输出日志   1570948097316 GET /
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

app.use(logger);
app.use(main);
app.listen(3500);