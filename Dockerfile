FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80