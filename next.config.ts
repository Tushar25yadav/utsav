/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/utsav',          
  trailingSlash: true,
};

module.exports = nextConfig;