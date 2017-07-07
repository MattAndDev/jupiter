// core
const path = require('path')
// libs
const _ = require('lodash')
const winston = require('winston')
require('winston-daily-rotate-file')
// env
const env = require('.env')


// Logger
// ============================================
// winston + winston-daily-rotate-file to setup log files

// Setting up the error.log
var errorLogTransport = new winston.transports.DailyRotateFile({
  filename: path.resolve(env.logs.error),
  datePattern: 'YY-MM-dd.',
  prepend: true,
  name: 'error',
  level: 'error'
})

var debugLogTransport = new winston.transports.DailyRotateFile({
  filename: path.resolve(env.logs.debug),
  datePattern: 'yy_MM_dd_',
  prepend: true,
  name: 'debug',
  level: 'debug'
})

module.exports = new (winston.Logger)({
  transports: [
    errorLogTransport,
    debugLogTransport,
    new (winston.transports.Console)({
      name: 'debug-console',
      colorize: true,
      level: 'debug'
    })
  ],
  exitOnError: false
})
