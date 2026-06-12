import type { NextConfig } from "next";

// Vercel sets VERCEL=1 automatically during build
// Standalone output is only needed for Docker/self-hosted deployments
const isVercel = !!process.env.VERCEL;

const nextConfig: NextConfig = {
  output: isVercel ? undefined : "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    '.space-z.ai',
  ],
};

export default nextConfig;
