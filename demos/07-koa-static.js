//如果这个网站只是提供静态资源，一些图片视频文件脚本什么的
//没有必要一个个为它们写路由，直接用koa-static就可以了

const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));

app.use(main);
app.listen(3500);

/*
运行完之后相应路径下寻找想要的资源就可以了
例如找html文件
http://localhost:3500/views/template.html

*/






