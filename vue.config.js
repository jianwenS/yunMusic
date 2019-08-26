module.exports = {
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  pwa:{
    iconPaths:{
      favicon32: 'favicon.ico', favicon16: 'favicon.ico', appleTouchIcon: 'favicon.ico', maskIcon: 'favicon.ico', msTileImage: 'favicon.ico'
    }
  },
  // css相关配置
  // webpack-dev-server 相关配置
  devServer: {
    open: true
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('css')
  //       .test(/\.css$/)
  //       .oneOf('vue')
  //       .resourceQuery(/\?vue/)
  //       .use('px2rem')
  //         .loader('px2rem-loader')
  //         .options({
  //           remUnit: 75
  //         })
  // },
  lintOnSave: true,
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-pxtorem')({
                      rootValue : 37.5, // 换算的基数
                      propList : ['*'],
                  }),
              ]
          }
      }
  },
}