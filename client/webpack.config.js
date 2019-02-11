const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const assetsPath = path.resolve(rootDir, 'assets')
const buildPath = path.resolve(rootDir, 'build')

module.exports = {
  mode: 'development',
  entry: `${srcPath}/app.js`,
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/template.html`,
      favicon: `${assetsPath}/favicon.ico`,
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        keepClosingSlash: true,
      },
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 6969,
  },
}
