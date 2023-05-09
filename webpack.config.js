const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = '.';
const SRC = 'src';
const DIST = 'dist';
const ROOT_SRC = `${ROOT}/${SRC}`;

module.exports = {
  entry: [
    `${ROOT_SRC}/index.js`,
    `${ROOT_SRC}/style.css`
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, DIST),
    clean: true,
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: `${ROOT_SRC}/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
