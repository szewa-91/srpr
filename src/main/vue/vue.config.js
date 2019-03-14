module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8080/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      },
    },
    port: 8888
  }
}
