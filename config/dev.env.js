var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SENDGRID_API_KEY: '"Bearer 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"'
})
