const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
  workboxOptions: {
    navigateFallback: 'madhu.html'
  }
}
});
