const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @use "sass:color";
          @use "sass:list";
          @use "sass:map";
          @use "sass:math";
          @use "sass:meta";
          @use "sass:selector";
          @use "sass:string";
          @use "@/scss/_keyframes";
          @use "@/scss/_colors" as colors;
          @use "@/scss/_mixins" as mixins;
          @use "@/scss/_typography" as typography;
        `,
      },
    },
  },
  devServer: {
    port: 8079,
    historyApiFallback: true,
  },
};
