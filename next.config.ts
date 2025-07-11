/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/utsav',          
  assetPrefix: '/utsav',        
  trailingSlash: true,
};

module.exports = nextConfig;