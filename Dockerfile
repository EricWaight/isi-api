FROM node

EXPOSE 5000

WORKDIR /project
COPY ./package.json ./package-lock.json ./
RUN npm i --production
COPY ./src ./src
COPY ./VERSION ./

CMD ["node", "src/server.js"]