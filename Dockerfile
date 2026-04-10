FROM node:20-alpine

EXPOSE 8061

WORKDIR /iframely

RUN addgroup --system iframelygroup && adduser --system iframely -G iframelygroup
RUN apk add --no-cache g++ make python3

ENV NODE_ENV=production

COPY package.json /iframely/
RUN npm install --omit=dev

COPY . /iframely

RUN chown -R iframely:iframelygroup /iframely && touch /iframely/config.local.js

USER iframely

CMD ["node", "server-protected.js"]
