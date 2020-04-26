FROM node:latest

WORKDIR /srv/app

COPY package.json /srv/app
COPY package-lock.json /srv/app

RUN npm install

COPY . /srv/app

CMD [ "npm", "run", "react-dev" ]