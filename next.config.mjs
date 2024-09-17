/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: '5.imimg.com' },
      { protocol: 'https', hostname: 'www.shutterstock.com' },
      { protocol: 'https', hostname: 'images.jdmagicbox.com' },
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 'static.wikia.nocookie.net' },
    ],
  },
};

export default nextConfig;
