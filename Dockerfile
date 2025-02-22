

FROM node:16.17.0 as build-stage

WORKDIR  /app


COPY package.json ./


RUN npm install


COPY . ./

RUN npm run build 

FROM nginx

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
