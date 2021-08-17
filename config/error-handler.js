module.exports = (error, _, res, _) => {
  res.status(error.status || 500)
  log.error(error)
  return res.json({
    error: {
      message: error.message,
    },
  })
}
