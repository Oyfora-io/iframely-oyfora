export default {
  PORT: process.env.PORT || 8061,
  CACHE_ENGINE: 'node-cache',
  CORS: {
    origins: [
      'http://localhost:3004',
      'http://localhost:5173',
      'http://localhost:3000',
      'https://oyfora.io',
    ]
  }
};
