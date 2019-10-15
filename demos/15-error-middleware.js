/*
为了更好的获取错误，
可以用try...catch去获取
但是为每个中间件写try...catch会很麻烦，
我们可以让最外层的中间件负责所有中间件的错误处理
*/

const Koa = require("koa");
const app = new Koa();
//意思就是先执行下边
//handler首先执行，等待调用next,然后
const handler = async (ctx,next)=>{
    try{
        //这个next直接就相当于下边的中间件,执行下边的中间件如果抛出错误
        //触发catch内容
        //因为这个触发时间不确定，或者说给结果的时间不确定，所以使用异步操作
        await next();
        
    }catch(err){
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message:err.message
        };
    }
};

const main = ctx =>{
    ctx.throw(500);
};

app.use(handler);
app.use(main);
app.listen(3500);