const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './public/index.html',
	filename: './index.html',
});

const cleanPlugin = new CleanWebpackPlugin();

module.exports = {
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
				resolve: {
					extensions: ['.jsx', '.js'],
				},
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		htmlPlugin,
		cleanPlugin,
		new Dotenv({
			path: './.env',
		}),
	],
};
