const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = '.';
const SRC = 'src';
const DIST = 'dist';
const ROOT_SRC = `${ROOT}/${SRC}`;
const ROOT_DIST = `${ROOT}/${DIST}`;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: ROOT_DIST,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  entry: [
    `${ROOT_SRC}/index.js`,
    `${ROOT_SRC}/style.css`,
  ],
  output: {
    filename: '[name].js',
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
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
