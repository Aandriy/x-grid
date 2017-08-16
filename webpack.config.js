const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
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
			}
		]
	}
};