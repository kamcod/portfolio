/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-kamcod.vercel.app',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}
