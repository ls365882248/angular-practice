FROM node:alpine as builder

WORKDIR /app
ADD package.json /app/package.json
RUN npm install
ADD . /app
RUN npm run build

FROM nginx:1.17
RUN mkdir -p web/logs
# COPY --from=builder app/dist/angular /usr/share/nginx/html
COPY --from=builder app/dist/ /web/dist/
# COPY --from=builder /usr/src/app/dist/angular /usr/share/nginx/html
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80