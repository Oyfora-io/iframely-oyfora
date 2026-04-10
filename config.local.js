export default {
  PORT: process.env.PORT || 8061,
  CACHE_ENGINE: 'node-cache',
  CORS: {
    origins: [
      'http://localhost:3004', // current port
      'http://localhost:5173', // Vite
      'http://localhost:3000'  // Next/CRA
      'https://oyfora.io',
    ]
  }
};
