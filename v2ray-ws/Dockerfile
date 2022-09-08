FROM node:alpine

LABEL MAINTAINER "ruienger@13643610935@163.com"

WORKDIR /root

EXPOSE 10086

COPY / /root/

RUN set -ex \
      && node /root/scripts/install.js \
      && node /root/scripts/process.js

ENTRYPOINT [ "node" ]

CMD [ "/root/scripts/run.js" ]