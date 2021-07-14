# base
FROM node:16-alpine as base
WORKDIR /app

COPY package.json yarn.lock .
RUN yarn install

# development
FROM base as development
WORKDIR /app

COPY --from=base /app/node_modules .

EXPOSE 3000
CMD ["yarn", "start"]

# build
FROM base as build
WORKDIR /app

COPY . .
COPY --from=base /app/node_modules .
RUN yarn build

# production
FROM nginx:1.21-alpine as production
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
