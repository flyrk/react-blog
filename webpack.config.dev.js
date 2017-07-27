import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, './client/client.js')
  ],
  output: {
    path: '/public',
    publicPath: '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({"React": "react"}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'shared')
        ],
        loaders: [ 'react-hot-loader', 'babel-loader' ]
      },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'shared')
        ],
        loaders: [ 'style-loader', 'css-loader', 'resolve-url-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loaders: ['url-loader?limit=10000', 'img-loader']
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}
