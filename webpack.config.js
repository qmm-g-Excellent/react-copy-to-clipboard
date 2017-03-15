var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    //这里是项目的入口文件的路劲（该路劲是相对项目的根目录）
    "index": './src/component/index.js',
    "vendors": ['bootstrap.css', 'react', 'react-dom']
  },
  output: {
    path: __dirname + '/dist/',  //这里是打包后的文件所在的目录（在app.js中还要改打包后文件的路劲，不然后导致，｀localhost:3000｀永远访问不到，就杯具了）
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src/component')
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!less-loader"
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=10000&name=/build/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    }),
    new ExtractTextPlugin('[chunkhash:8].[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {collapseWhitespace: true},
      template: path.join(__dirname, '/src/index.html'),
      inject: true,
      chunks: ['index', 'vendors']
    })
  ],
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css'　//安装了bootstrap后，在这里引入bootstrap，项目中就可以使用bootstrap了
    }
  }
};