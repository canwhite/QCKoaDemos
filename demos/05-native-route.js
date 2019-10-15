const Koa = require('koa');
const app = new Koa();

const main = ctx =>{

    //原生是根据ctx.request.path 来判断的
    //如果是根目录
    if(ctx.request.path =="/"){
        ctx.response.body = "hello world";
    }
    //如果不是根目录
    if(ctx.request.path != "/"){
        ctx.response.type = "html";
        ctx.response.body = "<a href='/'> index page </a>";
    }
};
app.use(main);
app.listen(3500);
