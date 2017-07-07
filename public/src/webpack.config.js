var path = require('path')
var webpack = require('webpack')
module.exports = {
  context: path.resolve(__dirname, 'js/'),
  entry: path.resolve(__dirname, 'js/'),
  output: {
    path: path.resolve(__dirname, '../js'),
    filename: 'index.js'
  },
  devServer: {
    publicPath: '/js/',
    contentBase: path.resolve(__dirname, '../'),
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: ['transform-class-properties']
        }
      }]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common.js'
      // components: `${src}/js/components`,
      // views: `${src}/js/views`,
      // settings: `${src}/js/utils/settings`,
      // store: `${src}/js/store`
    }
  }
}
