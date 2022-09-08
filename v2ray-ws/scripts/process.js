#!/bin/node
const { randomUUID } = require('crypto')
const { readFile, writeFile } = require('fs')
const { exec, nginxCfgPath, v2rayCfgPath, etcInfoPath, cwd } = require("./common");

// 处理配置文件，启用必要功能

// alpine镜像不支持bbr加速，懒得查了
// 处理v2ray配置文件

const configPath = `${cwd}configs/v2ray.json`
const uuids = []

readFile(configPath, (err, data) => {
  if (err) throw err
  const config = JSON.parse(data.toString())
  config.inbounds.forEach(({ settings = { clients: [] } }) => {
    settings.clients.forEach(client => {
      client.id = randomUUID()
      uuids.push(client.id)
      console.log(`ATTENTION!!! client uuid has been randomly generated as:\n${client.id}`)
    })
  })
  writeFile(
    configPath,
    JSON.stringify(config),
    () => {}
  )
  writeFile(
    etcInfoPath,
    JSON.stringify(uuids),
    () => {}
  )
})

// 移动配置文件位置
exec(`mv /root/configs/nginx.conf ${nginxCfgPath}`)
exec(`mv /root/configs/v2ray.json ${v2rayCfgPath}`)

