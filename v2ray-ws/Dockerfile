# v2ray镜像，提供配置即可启动服务
FROM v2fly/v2fly-core

# 提供v2ray的默认配置
COPY configs/v2ray.json /etc/v2ray/config.json

# nginx镜像，如上
FROM nginx:alpine

# 提供nginx的默认配置
COPY configs/nginx.conf /etc/nginx/nginx.conf

# 开启BBR加速
CMD ['scripts/bbr.sh']