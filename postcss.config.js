module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-import': {},
    'postcss-url': {},
    'postcss-plugin-px2rem': {
      rootValue: 75,
      unitPrecision: 5
    }
  }
}
