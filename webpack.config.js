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
        test: /\.(svg|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=assets/fonts/[name].[ext]&publicPath=../../'
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
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
