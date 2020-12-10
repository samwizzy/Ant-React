# DEVELOPMENT ENVIRONMENT
# base image
FROM node:13.11.0-alpine as build

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN yarn install

# bundle source
COPY . .

# Specify port
EXPOSE 3000

# start app
CMD [ "yarn", "start" ]