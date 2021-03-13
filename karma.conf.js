module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: './test/*.test.js', type: 'module' },
      { pattern: './src/**/*.js', included: false },
      { pattern: 'node_modules/**/*.js', included: false },
    ],
    reporters: ['progress'],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: true,
    singleRun: false, // Karma captures browsers, runs the tests and exits
    // concurrency: Infinity,
  });
};
