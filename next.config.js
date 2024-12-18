/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname + '/app';
    config.resolve.alias['@/components'] = __dirname + '/app/components';
    return config;
  },
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com',
      'images.pexels.com',
      'example.com'
    ]
  }
};

module.exports = nextConfig;
