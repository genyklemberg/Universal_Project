const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: './src/server.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'main.server': path.join(__dirname, 'dist', 'server', 'main.bundle.js')
    }
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['core'],
        filename: '[name].js'
    })
  ],
  target: 'node',
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
