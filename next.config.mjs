/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mindcrypto-site',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  // This is required for GitHub Pages
  assetPrefix: '/mindcrypto-site/',
};

export default nextConfig;

 