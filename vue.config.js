module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './index.html'
        return args
      })
  }
}
