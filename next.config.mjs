/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '/mindcrypto';
let basePath = '/mindcrypto';

if (process.env.NODE_ENV === 'development') {
  assetPrefix = '';
  basePath = '';
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
    path: `${assetPrefix}/_next/image`,
  },
  // This is required for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;

 