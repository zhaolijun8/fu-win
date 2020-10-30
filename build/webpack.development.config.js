const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config')

const devServer = {
  port: 8283,
  host: '127.0.0.1',
  overlay: {
    error: true
  },
  hot: true,
  historyApiFallback: true
}

const config = merge(baseConfig, {
  devServer,
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config