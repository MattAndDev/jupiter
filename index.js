'use strict'
// relative paths
require('app-module-path').addPath(__dirname)
// libs
const Express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// Classes
const Socket = require('./inc/socket')
const Api = require('./inc/api')
const Db = require('./inc/db')
// env
const env = require('./.env')
const Logger = require('./inc/utils/logger')


class App {
  constructor () {
    // no go without db connection
    Db.on('ready', () => {
      // setup app
      this.app = require('express')()
      // setup server and pass express app -> to make sockets work
      this.server = require('http').Server(this.app)
      // dock sockets
      this.socket = new Socket(this.server)
      // init express stuff
      this.router = Express.Router()
      // setup sockets :tada:
      // cors (!) this should remove in prod
      if (env.environment === 'dev') this.app.use(cors())
      // we love json
      this.app.use(bodyParser.json({limit: '50mb'}))
      // set api endpoint for this router
      // NOTE: this because the rest
      // is static and handled by vue.js
      this.app.use('/api', this.router)
      // ship it
      this.init()
    })
  }

  init () {
    // first entry point pass static
    this.app.use(Express.static('./public'))
    // add api routes, pass socket
    Api.addRoutes(this.router, this.socket)
    // // all the rest <- redirect home
    let swallowAll = (req, res) => {
      res.redirect('/')
    }
    this.app.use(swallowAll)
    // listening
    this.server.listen(env.port, () => {
      Logger.log('debug', `App listening on ${env.port}`)
    })

  }

}

// WOOT!!
module.exports = new App()
