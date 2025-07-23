export const getImagePrefix = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return isDevelopment ? '/' : '/mindcrypto/';
};
 
