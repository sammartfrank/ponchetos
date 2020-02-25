const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(jpeg|jpg|JPG|png|svg|mp4)?$/gi,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src']
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devtool: 'source-map'
};
