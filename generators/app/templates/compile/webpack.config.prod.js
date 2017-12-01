const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const root = resolve(__dirname, '..')

module.exports = merge(base(), {
  entry: {
    app: resolve(root, 'src', 'prod.jsx')
  },
  output: {
    path: resolve(root, 'dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
