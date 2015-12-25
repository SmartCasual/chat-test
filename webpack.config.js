var ExtractTextPlugin = require('extract-text-webpack-plugin');
var atImport = require('postcss-import');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./web/static/js/app.js",
  output: {
    path: "./priv/static",
    filename: "js/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|vendor)/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ],
  },
  postcss: [
    atImport({
      path: ["node_modules", "./web/static"]
    })
  ],
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new CopyWebpackPlugin([
      { from: 'web/static/assets' }
    ])
  ],
  resolve: {
    modulesDirectories: [
      'web/static',
      'deps/phoenix/web/static/js/',
      'deps/phoenix_html/web/static/js/',
      'node_modules'
    ],
    extensions: [ '', '.js', '.json', '.jsx', '.scss' ]
  },
};
