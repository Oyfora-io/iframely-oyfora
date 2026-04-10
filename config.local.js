export default {
  DEBUG: false,
  RICH_LOG_ENABLED: false,

  baseAppUrl: "https://iframely-oyfora-production.up.railway.app",
  relativeStaticUrl: "/r",

  SKIP_IFRAMELY_RENDERS: true,
  GROUP_LINKS: true,
  MAX_REDIRECTS: 4,

  port: Number(process.env.PORT || 8061),
  host: "0.0.0.0",

  CACHE_ENGINE: "node-cache",
  CACHE_TTL: 0,

  allowedOrigins: [
    "http://localhost:3004",
    "http://localhost:5173",
    "http://localhost:3000",
    "https://oyfora.io",
    "https://www.oyfora.io"
  ],

  RESPONSE_TIMEOUT: 5 * 1000,

  providerOptions: {
    locale: "en_US",

    app: {
      // allow_readability: true
    },

    images: {
      loadSize: false,
      checkFavicon: false
    },

    youtube: {
      get_params: "?rel=0&showinfo=1"
    },

    vimeo: {
      get_params: "?byline=0&badge=0"
    },

    soundcloud: {
      old_player: true
    },

    giphy: {
      media_only: true
    },

    bandcamp: {
      get_params: "/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/",
      media: {
        album: {
          height: 472,
          "max-width": 700
        },
        track: {
          height: 120,
          "max-width": 700
        }
      }
    }
  },

  IGNORE_DOMAINS_RE: [
    /^https?:\/\/127\.0\.0\.1/i,
    /^https?:\/\/localhost/i,
    /^https?:\/\/[^\/]+:\d+\/?/,
    /^https?:\/\/169\.254\.169\.254/i
  ]
};
