const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const root = resolve(__dirname, '..')

module.exports = merge(base(), {
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch', resolve(root, 'src', 'dev.jsx')]
  },
  output: {
    path: resolve(root, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: resolve(root, 'dist'),
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    quiet: true
  },
  plugins: [new FriendlyErrorsWebpackPlugin(), new webpack.HotModuleReplacementPlugin()]
})
