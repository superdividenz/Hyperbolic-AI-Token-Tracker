// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Disable source map warnings
        webpackConfig.ignoreWarnings = [
          {
            module: /node_modules\/@solana\/buffer-layout/,
          },
          {
            module: /node_modules\/superstruct/,
          },
        ];
        return webpackConfig;
      },
    },
  };