#!/bin/node
const { execSync } = require('child_process')
const { exit } = require('process')

if (process.platform !== 'linux') {
  console.error('Computer OS not supported')
  exit(1)
}

const bbrEnabled = execSync(`sysctl net.ipv4.tcp_available_congestion_control`).includes(`bbr`)

if (!bbrEnabled) {
  // 修改系统变量
  execSync(`echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf`)
  // 保存生效
  execSync(`sysctl -p`)
}

console.log(`BBR has been enabled`)
console.log(execSync(`lsmod | grep bbr`))