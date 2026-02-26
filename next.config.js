const path = require('path')

const framerMotionCjs = path.join(__dirname, 'node_modules/framer-motion/dist/cjs/index.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force framer-motion to use CJS build; ESM build has broken/missing modules (LazyContext, valid-prop, etc.)
  webpack: (config) => {
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias['framer-motion'] = framerMotionCjs
    return config
  },
}

module.exports = nextConfig
