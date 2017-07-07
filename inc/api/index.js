'use strict'
// core
const path = require('path')
// libs
const _ = require('lodash')
const glob = require('glob')

class Api {
  // addRoutes
  // =
  // traverses the routes folder and requires all files
  addRoutes (router, socket) {
    // get all routes
    glob('./inc/api/routes/**/*.js', (err, routes) => {
      if (err) console.log(err)
      // dynamically require all files
      _.each(routes, (route) => {
        require(path.resolve(route))(router, socket)
      })
    })
  }
}

module.exports = new Api()
