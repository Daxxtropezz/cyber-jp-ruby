const path = require('path');

module.exports = {
	entry: './public/src/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/dist/js'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devtool: 'source-map',
};
