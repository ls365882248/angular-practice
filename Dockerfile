FROM node:alpine as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.17

COPY --from=builder app/dist/angular /usr/share/nginx/html
# COPY --from=builder /usr/src/app/dist/angular /usr/share/nginx/html
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80