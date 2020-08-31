
FROM node:12.2.0-alpine

WORKDIR ./src

ENV PATH /app/node_modules/.bin:$PATH


COPY package.json /package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g


CMD ["npm", "run", "serve"]