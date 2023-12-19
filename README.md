# ruienger/v2ray-ws

👁 该仓库是一个基于nginx、v2ray以提供代理服务的docker镜像

运行镜像后，对应容器内将

1. 打印有关nginx、v2ray配置文件的信息（文件位置，v2ray client uuids）
2. 启动nginx、v2ray服务

容器将暴露10086端口

# 如何使用

`docker pull ruienger/v2ray-ws`

`docker run -d --net=host ruienger/v2ray-ws # 留意容器id，下一步要用，你也可以使用下面的指令来运行`

OR

`docker run -d -p hostport:10086 ruienger/v2ray-ws # 通过指定端口的方式运行容器，同样的，留意容器id`

`docker logs ${container_id} # 查看log信息，其中包括了v2ray client uuid和配置、日志保存位置`

记得放开服务器防火墙对应的端口(tcp)，然后将以下信息填入v2ray'客户端'

协议：vmess

端口：10086

id：详见docker logs

加密方式： auto

传输协议：ws

websocket路径： /ruienger

# 客制化配置

如需客制化，需要将自己的nginx或v2ray配置覆盖容器的默认配置并重启服务，位置如下

/etc/nginx/nginx.conf

/etc/v2ray/config.json

## 备注

暂无
