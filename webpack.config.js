var webpack = require('webpack')
var path = require('path')

module.exports = {
  mode: "production",
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "./public/build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
