const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  dynamicAssetPrefix: true,
  webpack(config, options) {
    return config
  }
})
