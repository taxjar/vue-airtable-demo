'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AIRTABLE_API_KEY: '"YOUR API KEY"',
  AIRTABLE_BASE: '"YOUR BASE"'
})
