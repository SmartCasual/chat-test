module.exports = {
  entry: "./web/static/js/app.js",
  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|web\/static\/vendor)/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ],
  },
  resolve: {
    root: '.'
  },
};
