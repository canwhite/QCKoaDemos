const Koa = require('koa');
const app = new Koa();
//上下文，返回值
const main = ctx => {
    //判断客户端想要请求的类型ctx.request.accepts()
    //默认返回类型是text/plain
    if(ctx.request.accepts('xml')){
        //需要设置返回类型
        ctx.response.type = "xml";
        ctx.response.body = '<data> Hello World</data>'
    }
    //json
    else if(ctx.request.accepts('json')){
        //需要设置返回类型
        ctx.response.type = 'json';
        ctx.response.body = {data:'Hello World'};
    }
    //html
    else if(ctx.request.accepts('html')){
        //需要设置返回类型
        ctx.response.type = 'html';
        ctx.response.body = '<p> Hello World</p>'
    }
    //default
    else{
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
};

app.use(main);
app.listen(3500);
