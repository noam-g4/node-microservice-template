// const axios = require('axios')
const http = require('http')
const config = require('../config')[process.env.NODE_ENV || 'development']
const service = require('../server/service')(config)

const log = config.log()
const server = http.createServer(service)

// FILL THE PORT IF REGISTRY, LEAVE 0 IF NOT
server.listen(process.env.PORT || 3000)

server.on('listening', () => {
  // USE THE CODE BELOW IF THIS SERVICE NEEDS TO BE REGISTERED IN A REGISTRY

  // const registerService = () =>
  //   axios.put("register-endpoint")

  // const unregisterService = () =>
  //   axios.delete("unregister-endpoint")

  // registerService()

  // const interval = setInterval(registerService, 20000)

  // const cleanup = async () => {
  //   clearTimeout(interval)
  //   await unregisterService()
  // }

  // process.on('uncaughtException', async () => {
  //   await cleanup()
  //   process.exit(0)
  // })

  // process.on('SIGINT', async () => {
  //   await cleanup()
  //   process.exit(0)
  // })

  // process.on('SIGTERM', async () => {
  //   await cleanup()
  //   process.exit(0)
  // })

  log.info(
    `service started -port:${server.address().port} in ${service.get(
      'env'
    )} mode`
  )
})
