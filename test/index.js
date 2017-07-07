'use strict'
// relative paths (this is to ensure that everything resolves appropriately)
require('app-module-path').addPath(__dirname)
// libs
const sinon = require('sinon')
const expect = require('chai').expect
const chai = require('chai')
const spies = require('chai-spies')
chai.use(spies)
// App
const App = require('../index')
const env = require('../.env')


describe('Db class', function () {
  it(`Can connect to mongo database on localhost:${env.mongoDbPort}`, () => {
    var spy = sinon.spy()
    const Db = require('../inc/db') // will throw error if mongo is not accessible, so rest is for consistency
    // set a spy on Db.emit('ready')
    Db.on('ready', spy)
    // wait for it
    setTimeout(() => {
      // be sure Db is ready called
      sinon.assert.calledOnce(spy)
    }, 1000)
  })
})
