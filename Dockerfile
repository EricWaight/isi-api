FROM node

EXPOSE 5000

WORKDIR /project
COPY ./package.json ./package-lock.json ./
COPY ./.env /project/.env
RUN npm i --production
COPY ./src ./src

CMD ["node", "src/server.js"]