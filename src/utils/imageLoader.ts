export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const isDev = process.env.NODE_ENV === 'development';
  const basePath = isDev ? '' : '/mindcrypto-site';
  return `${basePath}${src}${width ? `?w=${width}` : ''}${quality ? `&q=${quality}` : ''}`;
} 