const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: {
		bundle: './src/js/index.js',
		styles: './src/scss/main.scss'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	watch:true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				 include: [
					path.resolve(__dirname, "src"),
				],
				use: {
					loader: 'babel-loader',
					options: {
						"presets": ["env"]
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};