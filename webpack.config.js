/* eslint no-var: 0 */

const webpack      = require('webpack')
const path         = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: './frontend/javascripts/index.js',
  },

  output: {
    path: path.join(__dirname, 'public/build'),
    filename: '[name].bundle.js',
    library: '[name]',
    libraryTarget: 'umd',
  },

  resolve: {
    root: [
      path.join(__dirname, 'client/javascripts'),
    ],
    extensions: ['', '.js'],
    alias: {
      styles: path.join(__dirname, 'frontend/styles'),
      js: path.join(__dirname, 'frontend/javascripts'),
    },
  },

  postcss: function () {
    return [autoprefixer]
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      include: [path.resolve('frontend/javascripts'), path.resolve('frontend/tests')],
    }],

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
        include: [path.resolve('frontend/javascripts')],
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
        include: [path.resolve('frontend/styles')],
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
        include: [path.resolve('frontend/styles')],
      },

      // needed to load css and fonts from node packages
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },

  devtool: 'source-map',
}
