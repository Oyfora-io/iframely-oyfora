module.exports = {
  PORT: process.env.PORT || 8061,

  CACHE_ENGINE: 'node-cache',
  CACHE_TTL: 60 * 60 * 1000,

  // tighten this to your app domain later
  CORS: {
    origins: ['*']
  },

  // optional: set if you use provider APIs later
  providerOptions: {
    locale: 'en_US'
  }
};
