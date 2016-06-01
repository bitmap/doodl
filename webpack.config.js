module.exports = {
  entry: "./app.jsx",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [{
      test: [/\.js$/, /\.es6$/, /\.jsx$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};