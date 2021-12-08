const Koa = require('koa');

const swaggerInstall = require('./utils/swagger');


const app = new Koa();
swaggerInstall(app)

app.listen(3002);

console.log("connect to http://127.0.0.1", 3002);