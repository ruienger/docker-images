## ruienger/v2ray-ws

👁 该镜像是一个基于nginx、v2ray服务以提供代理服务的docker镜像

镜像的默认流程为

1. 尝试开启bbr加速
2. 尝试安装并配置nginx
3. 尝试安装并配置v2ray

运行该镜像后，服务将监听容器的10086端口

注意！你需要手动获取到v2ray配置文件中的client uuid

可以通过以下命令获取第一个uuid

`egrep /uuid:"[a-zA-Z0-9]+"/ /etc/v2ray/config.json`

## 用例

`docker pull ruienger/v2ray-ws`

`docker run -p ${your-port}:10086 ruienger/v2ray-ws`

# 客制化配置

如需客制化，需要将自己的nginx或v2ray配置覆盖默认配置，位置如下

/etc/nginx/nginx.conf

/etc/v2ray/config.json

## 备注

暂无
