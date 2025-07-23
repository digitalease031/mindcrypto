/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mindcrypto',
  images: {
    unoptimized: true,
  },
  // This is required for GitHub Pages
  assetPrefix: '/mindcrypto/',
};

export default nextConfig;

 