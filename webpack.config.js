const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./src/components'),
      path.resolve('./src/stylesheet')
    ],
	
  },
  module: {
    loaders: [
      {
        text: /(\.js)$/,
				exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ["react", "env", "stage-1"]
        }
      },
      {
        test: /(\.scss)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  }
};

