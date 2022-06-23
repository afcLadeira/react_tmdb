const logger = (req,res,next) => {
    console.log(`${req.method} | ${req.headers.origin} | ${req.url}`)
    next()
  }


module.exports = { logger }