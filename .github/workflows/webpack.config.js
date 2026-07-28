// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.IgnorePlugin({
      // This regex matches any wordlist EXCEPT 'english'.
      // To keep only a different language, change 'english' to, e.g., 'chinese_simplified'.
      checkResource(resource) {
        return /.*\/wordlists\/(?!english).*\.json/.test(resource);
      },
    }),
  ],
};
