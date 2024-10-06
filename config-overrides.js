module.exports = function override(config) {
    // Add a fallback for 'http'
    config.resolve.fallback = {
      ...config.resolve.fallback,
      http: require.resolve('stream-http'),
    };
    return config;
  };