const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: [
    './src/index.ts',
    './src/scss/style.scss',
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'xgrid.js',
    path: path.resolve(__dirname, '../grid/dist')
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '../dist/xgrid.css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
            }
          },
          /*
          {
            loader: 'file-loader',
            options: {
              name: '../dist/xgrid.css',
            }
          },
          {
            loader: 'extract-loader'
          },
          */
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
};