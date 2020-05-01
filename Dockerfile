FROM node:10
WORKDIR /usr/src/app
COPY api /usr/src/app
RUN npm install
CMD npm run app
EXPOSE 8080
