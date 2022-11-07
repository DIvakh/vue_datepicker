const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: 'js/datepick.js',
      chunkFilename: 'js/datepick_chunk.js'
    }
  }
});
