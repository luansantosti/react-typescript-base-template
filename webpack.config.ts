const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/index.tsx'),
		vendor: ["styled-components"],
	},
 	output: {
   	path: path.join(__dirname, '/dist'),
   	filename: '[name].js',
		publicPath: '/'
 	},
	module: {
		rules: [
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
		]
	},
	devServer: {
    historyApiFallback: true,
		port: 3000,
		hot: true
  },
	resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
          filename: 'vendor.js',
          test: 'vendor',
          chunks: 'initial',
          enforce: true,
				}
			}
		}
	},
 	plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}
