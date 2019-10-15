/*
koa-body模块还可以处理文件上传，感觉这个功能很棒棒呀
*/
const Koa = require("koa");
const app = new Koa();
const os = require('os');
const path = require('path');
const koaBody = require('koa-body');
const fs = require('fs');


const main = async (ctx) =>{

    //找到系统额缓存文件夹
    const tmpdir = os.tmpdir();
    //创建一个路径空数组
    const filepaths = [];
    //把请求传过来的文件拿到,得到的files是一个对象
    //里边有很多个键值对
    const files = ctx.request.body.files || {};
    //然后一个for...in 对多有键值对循环
    for(let key in files){
        //拿到单个文件
        const file = files[key];
        //在缓存文件夹下创建file的同名路径
        const filePath = path.join(tmpdir,file.name);
        //去读原路径下的内容
        const reader = fs.createReadStream(file.path);
        //要往现有路径下写
        const writer = fs.createWriteStream(filePath);
        //在读写双放建立通道，开始读写
        reader.pipe(writer);
        //最后把新文件路径加入路径数组
        filepaths.push(filePath);

    }

    //在终端输出一下filepaths
    ctx.body = filepaths;

};
//允许传入多个
app.use(koaBody({multipart:true}));
app.use(main);
app.listen(3500);


/*
//新开窗口调用了此方法，然后成功了
curl --form upload=@/Users/zack/Desktop/koa/logo.png http://127.0.0.1:3500
*/