#!/bin/node
// 该文件负责生成(./configs/v2ray.json)中每个客户端的uuid
const { randomUUID } = require('crypto')
const { readFile, writeFile } = require('fs')

const configPath = `${process.cwd()}/configs/v2ray.json`

readFile(configPath, (err, data) => {
  if (err) throw err
  const config = JSON.parse(data.toString())
  config.inbounds.forEach(({ settings = { clients: [] } }) => {
    settings.clients.forEach(client => {
      client.id = randomUUID()
      console.log(`ATTENTION!!! client uuid has been randomly generated as:\n${client.id}`)
    })
  })
  writeFile(
    configPath,
    JSON.stringify(config),
    () => {}
  )
})