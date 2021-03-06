var webpack = require('webpack');
var path = require('path');

var testConfig = {
  name: 'test',
	entry: './test/browser-entry.js',
	externals: [
    'fs'
  ],
	resolve: {
    alias: {vue: 'vue/dist/vue.js'}
	},
	module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
					preserveWhitespace: false,
					postcss: [
						require('autoprefixer')({
							browsers: ['last 3 versions']
						})
					],
					loaders: {
						css: "null-loader",
						less: "null-loader",
						stylus: "null-loader",
						scss: "null-loader",
						sass: "null-loader"
					}
				}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'null-loader'
      }
    ]
  },
	devtool: 'inline-source-map',
	devServer: {
		host: 'localhost',
    port: 8888
	},
	output: {
		publicPath: 'http://localhost:8888/test',
		path: path.join(__dirname, 'test'),
		filename: 'test.bundle.js'
	},
	plugins: [
		new webpack.IgnorePlugin(/jsdom$/),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = testConfig;
