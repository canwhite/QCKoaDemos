const Koa = require("koa");
const app = new Koa();
//找不到网页
const main = ctx =>{
    //给response状态码，然后返回404页面
    ctx.response.status = 404;
    ctx.response.body = 'Page Not Found';

};

app.use(main);
app.listen(3500);