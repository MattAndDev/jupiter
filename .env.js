// =
// env variables for careful
module.exports = {
  environment: 'dev', // this will match databases[option <- ]
  // main app port
  port: 3000,
  // mongodb port (expecte to run on localhost)
  mongoDbPort: 27017,
  databases: {
    dev: 'careship-id-dev',
    prod: 'careship-id'
  },
  logs: {
    debug: './logs/jupiter_debug.log',
    error: './logs/app/jupiter_error.log'
  }
}
