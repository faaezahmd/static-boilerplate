let webpack = require('webpack');
let path = require('path');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let enviroment = process.env.NODE_ENV;

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  entry: ['@babel/polyfill', './src/js/main.js', './src/sass/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   use: ['sass-loader', 'css-loader']
      // },
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader} ,
          { loader: "css-loader" },
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]'
        }
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "../css/style.css"
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./dist'] }
    }),
    new CopyWebpackPlugin([
      { 
        context: './src/',
        from: './**/*.html',
        to: './../',
        force: true
      },
    ],
    [
      { 
        context: './src/',
        from: './*.html',
        to: './../',
        force: true
      },
    ])
  ]
}

if (enviroment === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(), 
    new OptimizeCSSAssetsPlugin({
      
    })
  );
}