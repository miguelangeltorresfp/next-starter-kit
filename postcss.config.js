module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')(),
    require('lost'),
    // require('cssnano')()
  ]
}
