/*
跟error中间件实现的作用一样
运行过程中一旦出错，koa会emit一个error事件
监听这个事件
也可以处理错误

*/

const Koa = require("koa");
const app = new Koa();

const main = ctx =>{
    ctx.throw(500);
};

app.on('error',(err,ctx)=>{
    console.error(`
    ------server error------
    ${err}
    `);
});

app.use(main);
app.listen(3500);

/*
感觉这样输出比较好

    ------server error------
    InternalServerError: Internal Server Error

*/