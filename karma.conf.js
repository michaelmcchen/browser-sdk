const webpackConfig = require("./webpack.config")(null, "development");

module.exports = function(config) {
  config.set({
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"]
      }
    },
    files: ["src/**/*.spec.ts"],
    frameworks: ["mocha", "chai", "sinon"],
    preprocessors: {
      "src/**/*.spec.ts": ["webpack"]
    },
    singleRun: true,
    webpack: {
      mode: "development",
      stats: "minimal",
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    webpackMiddleware: {
      stats: "errors-only",
      logLevel: "warn"
    }
  });
};