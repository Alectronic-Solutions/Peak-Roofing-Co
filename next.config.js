/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Peak-Roofing-Co' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Peak-Roofing-Co/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
