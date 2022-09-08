#!/bin/node
const { execSync } = require('child_process')

module.exports = {
  cwd: '/root/',
  v2rayCfgPath: '/etc/v2ray/config.json',
  nginxCfgPath: '/etc/nginx/nginx.conf',
  etcInfoPath: '/root/etcinfo',
  nginxRsaPath: '/tmp/nginx_signing.rsa.pub',
  /**
   * 执行指定的命令，命令的标准IO默认继承
   * @param {string} cmd 
   * @param {boolean} output 
   * @returns Buffer
   */
  exec(cmd, output = true) {
    console.log('\n> ' + cmd)
    return execSync(cmd, {
      stdio: output ? 'inherit' : 'pipe'
    })
  },
  validationError: new Error('key validation failed')
}