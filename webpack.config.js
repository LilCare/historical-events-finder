const path = require('path');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client'),
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
