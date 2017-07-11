import path from 'path';
import express from 'express';
import pkg from './package';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

// 监听端口，启动程序
app.listen(3000, () => {
  console.log(`${pkg.name} listening on port 3000`);
});
