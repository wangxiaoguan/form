var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const src = path.resolve(process.cwd(), '.');
const app = path.resolve(src, 'src');
const nodeModules = path.resolve(process.cwd(), 'node_modules');

module.exports = {
  context: src,
  entry: {
    app: ["babel-polyfill", path.resolve(app, "index.js")]
  },
  output: {
    path: path.resolve(src, "build"),
    // publicPath: "/youquweb/",
    publicPath: "",
    filename: "[name]_[hash:8].js",
    libraryTarget: "umd"
  },
  resolve: {
    modules: [app, nodeModules],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".less"],
    alias:{
      "@":path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: [nodeModules]
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: [nodeModules]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)/i,
        loader: "file-loader?name=img/img_[hash:8].[ext]"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        loader: "file-loader"
      },
      {
        test: /\.(pdf)/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '悠趣',
      template: path.resolve(src, "src/index.html"),
      favicon: path.resolve(src, "src/favicon.ico"),
      inject: false,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.ProvidePlugin({
      $q: path.resolve(app, "unit/global.js"),
      JQuery:path.resolve(app, "unit/jquery.js")
    })
  ],
  performance: {
    hints: false
  },
};