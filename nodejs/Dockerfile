FROM node:16-alpine3.12 as base
USER node

RUN mkdir /home/node/lamer_homepage
WORKDIR /home/node/lamer_homepage

COPY --chown=node:node . ./

RUN npm i

FROM base as production

RUN npm run build
