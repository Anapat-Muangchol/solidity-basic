FROM nginx:latest
COPY ./web /usr/share/nginx/html
COPY ./artifacts/contracts /usr/share/nginx/html/contracts