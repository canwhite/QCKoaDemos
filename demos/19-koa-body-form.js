/*
看源码就会发现，request里边只有针对get请求的query的get和set的封装，当然这个我们一会会测试一下
然后如果获取post的表单提交在header里边的数据，我们就要使用koa-body了
*/
const Koa = require("koa");
const app = new Koa();
const koaBody = require('koa-body');

//（1）测试下get请求数据的获取
const myget = async (ctx) =>{
  
    //浏览器输入：http://localhost:3500/?name=1
    console.log("====",ctx.request.query);
    //输出==== [Object: null prototype] { name: '1' }

};

//（2）测试一下post请求数据的获取
const mypost = async (ctx) =>{
    //post的请求header数据，koa本身没封装，我们使用koa-body
    const body = ctx.request.body;
    if(!body.name){
        ctx.throw(400,'.name required');
    }
    //这个直接就body了，这样写可以直接在终端看到我们发送的数据
    ctx.body = {name:body.name};

};

app.use(koaBody());

//app.use(myget)
app.use(mypost);
app.listen(3500);


/*
新开一个窗口用curl发送请求，我们可以看到结果
192:~ zack$ curl -X POST --data "name=Jack" 127.0.0.1:3500
{"name":"Jack"}192:~ zack$
192:~ zack$ curl -X POST --data "name=Jack" 127.0.0.1:3500
{"name":"Jack"}192:~ zack$ curl -X POST --data "name" 127.0.0.1:3500
.name required192:~ zack$


*/