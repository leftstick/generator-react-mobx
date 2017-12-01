const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 5 versions']
    }),
    postcssNested()
  ]
}
