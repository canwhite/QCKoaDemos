//上下文，上下文里边包含request和response
//注意客户端的request和后台的request成对存在，一个发送请求，一个接收请求
//客户端的response和后台的response成对存在，一个接收数据，一个发送数据
const Koa = require('koa');
const app = new Koa();

//ctx作为参数，返回ctx.response.body，封装要发送的数据
const main = ctx =>{
    ctx.response.body = "hello world";
};
//用app.use加载main函数
app.use(main);
app.listen(3500);