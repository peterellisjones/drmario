const path = require('path');

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel-loader?cacheDirectory&presets[]=es2015-native-modules&presets[]=react', 'ts-loader', 'tslint-loader'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.(less|css)$/,
      loaders: ['css-loader', 'less-loader'],
      include: path.join(__dirname, 'src')
    }],
  }
}

module.exports = config;
