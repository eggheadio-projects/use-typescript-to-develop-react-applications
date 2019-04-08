module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'build/app.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
