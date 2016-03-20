var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    vendor: './js/vendor',
    admin: './js/admin',
    app: './js/app',
    semantic: './js/semantic',
    global: './js/global',
    'core/index': './js/core/index',
    'cities/city': './js/cities/city',
    'services/service_one': './js/services/service_one',
    'accounts/login': './js/accounts/login',
    'accounts/register': './js/accounts/register',
  },

  output: {
    path: path.resolve('../assets/bundles/'),
    filename: "[name].js",
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new ExtractTextPlugin("[name].css"),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /jquery\.js$/,
      exclude: /node_modules/,
      loader: 'expose?jQuery'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
    alias: {
      jquery: 'jquery/dist/jquery'
    }
  },
}