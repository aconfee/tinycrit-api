const path = require('path');

module.exports = {
  entry: './app.js',
  devtool: 'inline-source-map',
  mode: 'production',
  node: {
      fs: 'empty'
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
  },
  resolve: {
      mainFields:['browser', 'main', 'module'],
      extensions: ['.tsx', '.ts', '.mjs', '.js', '.json', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};