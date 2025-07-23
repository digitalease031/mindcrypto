const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/MindCrypto/"
    : "";
};

export { getImagePrefix };
 
