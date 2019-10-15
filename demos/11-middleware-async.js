/*
 如果有时候遇到一些io操作比较耗时的话，就需要用到异步中间件了
*/

const fs = require("fs.promised");
const Koa = require("koa");
const app = new Koa();
//函数前边加async，异步操作前加await
const main = async function(ctx,next){
    ctx.response.type = "html";
    //当前文件夹下的views里边
    ctx.response.body = await fs.readFile('./views/template.html');
};

app.use(main);
app.listen(3500);
