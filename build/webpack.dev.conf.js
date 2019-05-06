'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack错误信息提示插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const glob = require('glob')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    disableHostCheck: true,
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
/**    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['app'],
      favicon: resolve('favicon.ico'),
      title: 'vue-element-admin'
    }),
    new HtmlWebpackPlugin({
      filename: 'publicity.html',
      template: 'publicity.html',
      inject: true,
      // favicon: resolve('favicon.ico'),
      chunks: ['publicity']
    }),*/
    //新增 copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})

// var pages =  utils.getMultiEntry('./src/'+config.moduleName+'/**/*.html');
// console.log("webpack.dev.conf.js=================")
// console.log(pages);
// for (var pathname in pages) {
//   // 配置生成的html文件，定义路径等
//   var conf = {
//     filename: pathname + '.html',
//     template: pages[pathname], // 模板路径
//     chunks: [pathname, 'vendors', 'manifest'], // 每个html引用的js模块
//     inject: true              // js插入位置
//   };
//   if (pathname in devWebpackConfig.entry) {
//     conf.chunks = ['manifest', 'vendor', pathname];
//     conf.hash = true;
//   }
//   conf.chunks.push('manifest'); //加载公共chunks
//   conf.chunks.push('vendor');   //加载公共chunks
//   // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
//   devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
// }
