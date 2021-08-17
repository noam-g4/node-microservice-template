const express = require('express')
const errorHandler = require('../config/error-handler')
// === IMPORT SERVICE CLASSES

const service = express()

module.exports = config => {
  const log = config.log()

  // === DECLARE INSTANCES OF SERVICE HERE

  if (service.get('env') === 'development') {
    service.use((req, _, next) => {
      log.debug(`${req.method}: ${req.url}`)
      return next()
    })
  }

  // === ENDPOINTS ===

  service.use(errorHandler)

  return service
}
