/*
有空还可以研究一下koa的session
毕竟cookies还是不很安全
*/
const Koa = require("koa");
const app = new Koa();

//我们这里要使用的ctx.cookies.get,和ctx.cookies.set来处理
const main = ctx =>{
    //这里获取。一开始什么都没有的时候取0+1
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    //这里设置值
    ctx.cookies.set('view', n);
    //页面显示
    ctx.response.body = n + ' views';
};

app.use(main);
app.listen(3500);

/*
每次刷新数据+1
*/