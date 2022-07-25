
#stage BUILD

#Fai la prima immagine con node
FROM node:18.6.0-bullseye-slim as node

COPY package.json package-lock.json .

RUN npm install

WORKDIR /app

COPY . . 

RUN npm run build 

#stage RUN

# fai una seconda immagine con ngInx
FROM nginx:alpine

# copiati il contento della cartella /app/docs dell'immagine node in /usr/share/nginx/html
COPY --from=node /app/docs /usr/share/nginx/html


