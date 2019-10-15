const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
const main = ctx => {
    //设置返回类型
    ctx.response.type = "html";
    //创建读取流
    ctx.response.body = fs.createReadStream('./views/template.html');
};
app.use(main);
app.listen(3500);