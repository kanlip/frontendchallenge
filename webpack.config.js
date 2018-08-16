const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    stats: "minimal" // none (or false), errors-only, minimal, normal (or true) and verbose
  },
  

  devtool: "source-map",
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
  optimization: {
    minimizer: [new UglifyJsPlugin({})]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]), //dedupe similar code

    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ReactLoadablePlugin({
      filename: "./dist/react-loadable.json"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
};
