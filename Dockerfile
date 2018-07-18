FROM mhart/alpine-node:8.9.4
ENV APP_CONFIG=../config/
RUN npm install pm2 babel-cli -g
WORKDIR /app
ADD . /app
RUN ls
RUN npm i
RUN npm run build
#RUN ls | egrep '[^public|build|pm2.json]' | xargs rm -rf
RUN ls
EXPOSE 3000
CMD ["pm2-docker", "start", "pm2.json"]