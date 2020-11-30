FROM node:10.8.0

# Dockerize is needed to sync containers startup
ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir -p /opt/app

RUN apt-get -q update && apt-get -qy install netcat
RUN npm i npm@latest -g

WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

RUN chmod +x ./wait-for.sh
CMD sh -c './wait-for.sh mysql-db:3306 -- sequelize db:migrate && nodemon index.js'

EXPOSE 5000
