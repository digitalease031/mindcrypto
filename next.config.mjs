/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mindcrypto',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  // This is required for GitHub Pages
  assetPrefix: '/mindcrypto/',
};

export default nextConfig;

 