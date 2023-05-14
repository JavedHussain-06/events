/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
  },
  {
    protocol: 'https',
    hostname: 'wembleypark.com',
    port: '',
}
]
}
}

module.exports = nextConfig
