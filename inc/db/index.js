'use strict'
// core
const EventEmitter = require('events').EventEmitter
const Mongoose = require('mongoose')
// env
const env = require('.env')

class Db extends EventEmitter {
  constructor (endPoint) {
    // eventemitter
    super()
    // try to conenct on setup
    Mongoose.connect(`mongodb://localhost/${env.databases[env.environment]}`, { useMongoClient: true })
    // pass on
    this.db = Mongoose.connection
    // if test connection fails
    // assume db is not present
    this.db.on('error', (err) => {
      if (err) console.log(err)
      // die
      process.exit()
    })
    // test once and emit ready
    this.db.once('open', (e) => {
      // start the app
      this.emit('ready')
    })
  }
}

module.exports = new Db()
