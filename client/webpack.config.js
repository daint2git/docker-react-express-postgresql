const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const assetsPath = path.resolve(rootDir, 'assets')
const buildPath = path.resolve(rootDir, 'build')

const client_host = process.env.CLIENT_HOST || '0.0.0.0'
const client_port = process.env.CLIENT_PORT || 6969
const server_host = process.env.SERVER_HOST || 'localhost'
const server_port = process.env.SERVER_PORT || 9696

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/app.js`,
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: '[name].js',
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
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(`http://${server_host}:${server_port}/api`),
    }),
    new HtmlWebpackPlugin({
      template: `${assetsPath}/template.html`,
      favicon: `${assetsPath}/favicon.ico`,
    }),
  ],
  devServer: {
    host: client_host,
    port: client_port,
  },
}
