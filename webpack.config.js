const path = require('path');

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
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
