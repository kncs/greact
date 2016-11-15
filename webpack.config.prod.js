const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/greact.js',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'greact.js',
    libraryTarget: 'umd',
    library: 'greact'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
