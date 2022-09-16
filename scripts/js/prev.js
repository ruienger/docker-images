#!/bin/node
const { randomUUID } = require('crypto')
const { readFile, writeFile } = require('fs')
const { cwd } = require('process')

// 处理配置文件，启用必要功能

// alpine镜像不支持bbr加速，懒得查了
// 处理v2ray配置文件
const dir = cwd()
const configPath = `${dir}/configs/v2ray.json`
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
  // 将随机生成的uuid存起来以便后续输出
  writeFile(
    `${dir}/etcinfo`,
    `v2ray client uuids: ${JSON.stringify(uuids)}`,
    () => {}
  )
})
