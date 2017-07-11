const path = require('path'),
      express = require('express'),
      pkg = require('./package');

const app = express();

// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'html');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

// 监听端口，启动程序
app.listen(3000, () => {
  console.log(`${pkg.name} listening on port 3000`);
});
