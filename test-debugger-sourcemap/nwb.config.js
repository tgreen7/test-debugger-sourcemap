const path = require("path");

// const devServerOptions = {
//   clientLogLevel: "warning",
//   compress: true,
//   disableHostCheck: true,
//   host: "0.0.0.0",
//   public: "0.0.0.0",
// };

const aliases = {
  //don't comment this out!
  // these aliases will fix duplicate package issues
  react: path.join(__dirname, "node_modules/react"),
  "react-dom": path.join(__dirname, "node_modules/react-dom"),
};

let publicPath = "/";

const webpackOptions = {
  aliases,
  extractCSS: false,
  publicPath,
  extra: {
    // plugins,
    // entry
  },
  // terser: {
  //   terserOptions: {
  //     mangle: false,
  //     beautify: true,
  //   },
  // },
};

module.exports = {
  type: "react-app",
  webpack: webpackOptions,
  // devServer: devServerOptions,
};
