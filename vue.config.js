const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'github' ? '/todo-practice/' : '/',
  outputDir: path.resolve(__dirname, process.env.NODE_ENV === 'github' ? "./docs" : "./dist"),
})
