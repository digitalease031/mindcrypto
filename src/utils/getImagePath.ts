export const getImagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/mindcrypto';
  return `${basePath}${path}`;
}; 