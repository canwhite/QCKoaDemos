//但是原生的路由可能用着不舒服，我们使用一下
//koa-route
const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();
//给两个路由配备两个执行函数
const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  };
  
const main = ctx => {
    ctx.response.body = 'Hello World';
};
//调用route.get();给路由匹配执行函数
app.use(route.get("/",main));
app.use(route.get('/about',about));

app.listen(3500);