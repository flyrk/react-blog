import path from 'path';
import express from 'express';
import pkg from './package';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';

import users from './routes/users';

mongoose.connect('mongodb://localhost/myblog');
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB, Did you forget to run `Mongod`?');
});

const app = express();

app.use(bodyParser.json());

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/*
 * POST /api/users
 * add user to database
 */
app.use('/api/users', users);

// 路由
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

// 监听端口，启动程序
app.listen(3000, () => {
  console.log(`${pkg.name} listening on port 3000`);
});
