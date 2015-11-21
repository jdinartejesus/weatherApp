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
    javascript: ['webpack/hot/dev-server', './App.js'],
    html: './index.html',
    vendors: ['material', 'material.css', 'weather.icons']
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
      },
      {
        test: /\.(woff|ttf|woff(2)?)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|svg)$/,
        loader: 'file-loader'
      }
    ]
  }
};

config.addVendor('material', bowerDir + '/material-design-lite/material.min.js');
config.addVendor('material.css', bowerDir + '/material-design-lite/material.min.css');
config.addVendor('weather.icons', bowerDir + '/weather-icons/css/weather-icons.min.css');

module.exports = config;
