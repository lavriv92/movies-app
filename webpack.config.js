var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'inline-souce-map',
  entry: {
    app: path.resolve(__dirname, 'app/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react' ]
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'app')
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Movie app',
      template: 'app/index.html'
    })
  ]
}
