const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  }
})

// const withPlugins = require('next-compose-plugins')

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: false
// })

// module.exports = withPlugins([
//   [
//     withPWA,
//     {
//       pwa: {
//         dest: 'public',
//         runtimeCaching
//       }
//     }
//   ],
//   [withBundleAnalyzer]
// ])
