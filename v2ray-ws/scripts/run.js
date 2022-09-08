#!/bin/node
const { exec, nginxCfgPath, v2rayCfgPath, etcInfoPath, cwd } = require("./common");

// 运行服务
exec(`cat ${etcInfoPath}`)
exec(`nginx -c ${nginxCfgPath}`)
exec(`v2ray -c ${v2rayCfgPath}`)

exec(`rm -r ${cwd}`)