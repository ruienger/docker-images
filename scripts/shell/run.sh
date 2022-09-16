#!/bin/sh

nginx_cfg_path="/etc/nginx/nginx.conf"
nginx_log_path="/var/log/nginx/error.log"
v2ray_cfg_path="/etc/v2ray/config.json"
v2ray_log_path="/var/log/v2ray/error.log"

# line break
mkdir /var/log/v2ray

echo "" >> /root/etcinfo
echo "v2ray config file path: ${v2ray_cfg_path}" >> /root/etcinfo
echo "v2ray error logs path: ${v2ray_log_path}" >> /root/etcinfo
echo "nginx config file path: ${nginx_cfg_path}" >> /root/etcinfo
echo "nginx error logs path: ${nginx_log_path} " >> /root/etcinfo

cat /root/etcinfo

rm -r /root/run.sh && nginx -c ${nginx_cfg_path} && v2ray --config=${v2ray_cfg_path}