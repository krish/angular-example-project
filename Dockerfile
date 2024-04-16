FROM node:14.17.5 as build
LABEL author="Krishantha Dinesh"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

#run
#FROM nginx:alpine as prod
FROM nginxinc/nginx-unprivileged:mainline
USER root
LABEL author="Krishantha Dinesh"

#VOLUME /var/cache/nginx
WORKDIR /usr/share/nginx/html
#change this dist/projectname to your project name
COPY --from=build /usr/src/app/dist/angular-example-project .

RUN chown -R nginx:nginx *

USER nginx
EXPOSE 8080