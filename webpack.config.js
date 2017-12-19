const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.argv.indexOf('-p') !== -1
const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

// Html Auto generator
const HtmlPlugin = new HtmlWebpackPlugin({
  title: 'React Skeleton',
  template: require('html-webpack-template'),
  appMountId: 'app',
  baseHref: '/',
  inject: false,
  mobile: true,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'description',
      content: 'Quickly start developing an react application.'
    }
  ]
})

/**
 * Conditionally get plugins based on the environment
 */
const getPlugins = () => {
  let plugins = [
    HtmlPlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isProduction ? 'production' : 'development'
      ),
      'process.env.API_URL': JSON.stringify(
        process.env.API_URL || 'https://www.reddit.com'
      )
    })
  ]

  if (!isProduction) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new webpack.NamedModulesPlugin())
  }

  return plugins
}

module.exports = {
  // Don't directly expose sourcemaps on production
  devtool: isProduction ? false : 'inline-source-map',
  // webpack-dev-server configurations
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  // Entry of the project, use babel polyfill.
  // Can be configured to split into diferent files.
  entry: {
    bundle: ['@babel/polyfill', 'whatwg-fetch', `${APP_DIR}/index.js`]
  },
  // Output, directly into dist/
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    // Set up loaders to process your files
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        ]
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css/,
        use: [{ loader: 'to-string-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: getPlugins(),
  resolve: {
    // Allow us to use peerDependencies on library packages
    modules: ['node_modules', path.join(__dirname, 'node_modules')]
  }
}
