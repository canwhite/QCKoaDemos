const Koa = require("koa");
const app = new Koa();
const session = require('koa-session')

//设置加密key
app.keys = ["this is secret"]

const sessionConfig = {
    key:'koa:sess',//cookie key (默认就是koa:sess)
    maxAge:86400000,//cookie的过期时间,毫秒，默认为一天
    overwrite:true,//是否覆盖，默认default true
    httpOnly:false,//cookie是否只有服务端可以访问，默认为true
    signed:true,//签名默认为true
    rolling:false,//在每次请求时强行设置cookie，这将重置cookie过期时间，默认是false
    renew:false// 会话即将到期时，续费会话

}
const main = ctx =>{

    ctx.session.username = "qiaochao";
    console.log(`
    ---------get session-------
    ${ctx.session.username}
    `)

};

app.use(session(sessionConfig,app));

app.use(main);
app.listen(3500);
