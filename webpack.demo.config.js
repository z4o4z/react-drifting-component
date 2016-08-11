var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/demo/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1'],
					plugins: ['transform-runtime']
				},
				exclude: /node_modules/
			}
		]
	},
	output: {
		library: 'demo'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/demo/index.html',
			filename: 'dist/demo/index.html'
		})
	]
};
