/*
    值得注意的是如果错误被try...catch捕获，那么就不会触发error事件
    所以必须调用ctx.app.emit()手动触发

*/

const Koa = require("koa");
const app = new Koa();

const handler = async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.type = 'html';
      ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
      //使用ctx.app.emit手动触发,第三个参数可传可传，我们实际上只需要err
    //   ctx.app.emit('error', err, ctx);
      ctx.app.emit('error', err);
    }
  };
  
  const main = ctx => {
    ctx.throw(500);
  };
  
  app.on('error', function(err) {
    console.error(`
    ------server error------
    ${err}
    `);
  });

app.use(main);
app.listen(3500);