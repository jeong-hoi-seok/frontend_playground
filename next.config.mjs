/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['static.tvmaze.com'],
  },
};
// const withImages = require('next-images');
// module.exports = withImages();
export default nextConfig;
