const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
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
