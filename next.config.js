const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
})
