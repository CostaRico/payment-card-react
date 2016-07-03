var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_module/',
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 2 versions!stylus?resolve url")
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[1].[ext]&regExp=src/(.*)',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("assets/styles/style.css", { allChunks: true })
  ],
};
