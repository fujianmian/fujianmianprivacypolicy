/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly enable static generation
  staticPageGenerationTimeout: 60,
};

export default nextConfig;