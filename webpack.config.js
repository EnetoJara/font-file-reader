const path = require('path');
const vars = require('./tools/env');
const nodeExternals = require('webpack-node-externals');

const res = vars();
const { NODE_ENV } = process.env;

module.exports = () => ({
	target: 'node',
	node: {
		__filename: false,
		__dirname: false
	},
    externals: [nodeExternals()],
    mode: NODE_ENV,
	entry: path.join(__dirname, "./src/index.js"),
	devtool: 'source-map',
	output: {
		filename: '[name]-bundle.js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		libraryTarget: 'commonjs2'
	},
	optimization: {
		splitChunks: {
			automaticNameDelimiter: '_',
			cacheGroups: {
				vendor: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: []
});
