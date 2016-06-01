var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    global: './js/global',
    profile_global: './js/profile_global',
    'core/index': './js/core/index',
    'cities/city': './js/cities/city',
    'services/service_one': './js/services/service_one',
    'accounts/login': './js/accounts/login',
    'accounts/register': './js/accounts/register',
    'accounts/password_reset': './js/accounts/password_reset',
    'accounts/password_reset_confirm': './js/accounts/password_reset_confirm',
    'profiles/profile': './js/profiles/profile',
    'profiles/dashboard': './js/profiles/dashboard',
    'profiles/contact': './js/profiles/contact',
    'profiles/album': './js/profiles/album',
    'profiles/detail': './js/profiles/detail',
    'profiles/services': './js/profiles/services',
    'profiles/message': './js/profiles/message',
    'profiles/bookings': './js/profiles/bookings',
    'profiles/follow': './js/profiles/follow',
    'profiles/verification': './js/profiles/verification',
    'profiles/setting': './js/profiles/setting',
    'profiles/notifications': './js/profiles/notifications',
    'core/about_us': './js/core/about_us',
    'core/help': './js/core/help',
    'core/contact_info': './js/core/contact_info',
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
    }, 
    {
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