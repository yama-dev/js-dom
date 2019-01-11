const env = process.env.NODE_ENV;

const webpack = require('webpack');

const config = {
  mode: env || 'development',
  entry: './src/js-dom.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'js-dom.js',
    library: 'JS_DOM',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};

module.exports = config;
