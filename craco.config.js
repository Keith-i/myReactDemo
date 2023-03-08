const path = require('path')
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: {
        postcssOptions: {
          ident: "postcss",
          plugins: {
            "postcss-px-to-viewport": {
              viewportWidth: 375,
              viewportUnit: "vw",
              fontViewportUnit: "vw",
            },
          },
        },
      },
    },
  },
};
