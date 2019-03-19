const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const withTM = require('next-transpile-modules')

module.exports = withPlugins([
  [
    withTM,
    {
      transpileModules: ['@book-bee/components'],
    },
  ],
  withTypescript,
])
