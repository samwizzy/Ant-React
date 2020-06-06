# DEVELOPMENT ENVIRONMENT
FROM node:13.11.0-alpine as build
WORKDIR /app
COPY build ./

# WORKDIR /app
# COPY package.json ./
# RUN yarn install
# COPY . .
# CMD [ "yarn", "run", "build" ]

# PRODUCTION ENVIRONMENT
FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
COPY build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]