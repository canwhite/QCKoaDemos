const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx => {
  //通过response.redirect重定向到根目录
  ctx.response.redirect('/');//重定向之后，后边的内容就不能执行了
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));
app.listen(3500);