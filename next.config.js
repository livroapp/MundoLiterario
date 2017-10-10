const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  webpack: c => {
    c.plugins = c.plugins.filter(p => p.constructor.name !== 'UglifyJsPlugin')
    c.plugins.push(new Uglify())
    return c
  }
}
