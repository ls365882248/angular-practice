FROM node:alpine as builder

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build:prod

FROM nginx:1.17

COPY --from=builder /usr/src/app/dist/ninghao-ng-camp /usr/share/nginx/html
# COPY --from=builder app/dist/ /web/dist/
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80