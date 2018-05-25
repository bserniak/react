FROM node:8.11-alpine AS buildStep
ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
RUN npm run build

FROM node:8.11-alpine
RUN apk add --no-cache nginx
RUN mkdir -p /run/nginx
COPY config/nginx.conf /etc/nginx
COPY --from=buildStep dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]