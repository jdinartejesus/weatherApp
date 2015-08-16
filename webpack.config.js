'use strict';

var path = require('path');
var webpack = require('webpack');
var bowerDir = path.join(__dirname, '/bower_components');

var config = {
  addVendor: function (name, src) {
    this.resolve.alias[name] = src;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  context: path.join(__dirname, '/src'),
  entry: {
    javascript: ['webpack/hot/dev-server', './app/app.jsx'],
    html: './index.html',
    vendors: ['react', 'material', 'material.css']
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
  ],
  output: {
    path: process.env.NODE_ENV === 'production' ? './dist' : './build',
    filename: 'js/bundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
config.addVendor('react', bowerDir + '/react/react.min.js');
config.addVendor('material', bowerDir + '/material-design-lite/material.min.js');
config.addVendor('material.css', bowerDir + '/material-design-lite/material.min.css');


module.exports = config;
