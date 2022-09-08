#!/bin/node
const { exec, validationError, nginxRsaPath } = require('./common')

// 安装必要的前置包和v2ray
exec(`apk update`)
exec(`apk add openssl curl ca-certificates v2ray`)

// nginx安装(http://nginx.org/en/linux_packages.html#Alpine)

// 使用正则匹配alpine发行版本，如1.1\n，然后去掉换行符
const alpineRelease = exec(`cat /etc/alpine-release`, false).toString().match(
  /^[0-9]\.[0-9]+/,
)[0]

// 根据版本信息获取到稳定版nginx包的链接并追加到/etc/apk/repos...中
exec(
  `echo "@nginx http://nginx.org/packages/alpine/v${alpineRelease}/main" ` +
  `| tee -a /etc/apk/repositories`
)

// 获取key并通过openssl得到的Exponent校验之，后续用它完成安装校验
exec(`curl -o ${nginxRsaPath} https://nginx.org/keys/nginx_signing.rsa.pub`)
if (!exec(`openssl rsa -pubin -in ${nginxRsaPath} -text -noout`, false).includes('65537')) {
  throw validationError
}

// 将key移动至信任区并安装nginx包
exec(`mv ${nginxRsaPath} /etc/apk/keys/`)
exec(`apk add nginx@nginx`)