FROM node:alpine as prev

WORKDIR /root

COPY . .

RUN set -ex \
      && node ./scripts/js/prev.js

FROM alpine

LABEL MAINTAINER "ruienger"

WORKDIR /root

EXPOSE 10086

COPY --from=prev /root/configs/ ./configs
COPY --from=prev /root/scripts/shell/run.sh .
COPY --from=prev /root/etcinfo .

RUN set -ex \
      && apk update \
      && apk add v2ray nginx \
      && mv ./configs/nginx.conf /etc/nginx/nginx.conf \
      && mv ./configs/v2ray.json /etc/v2ray/config.json \
      && rm -r configs

CMD ["./run.sh"]