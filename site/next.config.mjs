/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
  POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  }
};

export default nextConfig;
