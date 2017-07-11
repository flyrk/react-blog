var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: {
		bundle: './client/client.js',
    vendor: ['react',
      'react-router',
      'redux',
      'react-dom',
      'react-redux',
      'marked'
    ]
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
	],
	module: {
		loaders : [
			{
				test: /\.js$/,
				loaders: [ 'babel' ],
				exclude: /node_modules/,
				include: __dirname
			},
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
			{
				test: /\.css$/,
				loader: "style-loader!css-loader?modules"
			}
		]
	}
}
