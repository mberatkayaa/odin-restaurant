const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
