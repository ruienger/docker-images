## ruienger/v2ray-ws

👁 该镜像是一个基于nginx、v2ray服务以提供代理服务的docker镜像

镜像的默认流程为

1. 尝试安装并配置nginx
3. 尝试安装并配置v2ray

运行该镜像后，服务将监听容器的10086端口

## 用例

`docker pull ruienger/v2ray-ws`

`docker run -d --net=host ruienger/v2ray-ws # 留意容器id，下一步要用`

`docker logs ${container_id} # 查看log信息，其中包括了v2ray client uuid和配置、日志保存位置`

记得放开服务器的防火墙，然后将以下信息填入'客户端'v2ray

协议：vmess

端口：10086

id：如上

加密方式： auto

传输协议：ws

websocket路径： /ws

# 客制化配置

如需客制化，需要将自己的nginx或v2ray配置覆盖容器的默认配置并重启服务，位置如下

/etc/nginx/nginx.conf

/etc/v2ray/config.json

## 备注

暂无
