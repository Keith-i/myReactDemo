module.exports = {
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
