FROM node:17-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

RUN npm install && npm cache clean --force
# RUN npm ci --only=production
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT [ "npm", "start" ]
