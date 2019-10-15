const Koa = require("koa");
const app = new Koa();
//直接让context抛出500
const main = ctx =>{
    //抛出服务器错误
     ctx.throw(500);

};

app.use(main);
app.listen(3500);

//页面最后会显示Internal Server Error

