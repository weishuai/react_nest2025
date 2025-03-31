# Naively Simple Node Dockerfile
FROM node:18.2.0
RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .
USER node
RUN yarn install --frozen-lockfile
EXPOSE 3009
CMD [ "yarn", "start" ]