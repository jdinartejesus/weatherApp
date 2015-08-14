
module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './app/main.js',
    html: './index.html'
  },

  output: {
    filename: 'js/bundle.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
