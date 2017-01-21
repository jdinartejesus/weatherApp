'use strict'

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: 'app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    modules: [path.join(__dirname, '/src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('assets/styles/style.css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      files: {
        css: ['assets/style/style.css']
      }
    })
  ]
}
