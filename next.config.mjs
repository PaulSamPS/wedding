/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/wedding',
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ['192.168.0.103'],
};

export default nextConfig;
