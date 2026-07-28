// webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust to your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bip39.browser.js',
    library: 'bip39',
    libraryTarget: 'umd',
  },
  mode: 'production',
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        // Keep only the English wordlist by default
        return /.*\/wordlists\/(?!english).*\.json/.test(resource);
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
