const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
module.exports = {
  entry: ["babel-polyfill","./src/index.js"],
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ReactLoadablePlugin({
      filename: "./dist/react-loadable.json"
    })
  ]
};
