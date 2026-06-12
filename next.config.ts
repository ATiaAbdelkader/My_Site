import type { NextConfig } from "next";

// Standalone output is only needed for Docker/VPS self-hosted deployments.
// Vercel and Z AI use standard Next.js output.
const isSelfHosted = !!process.env.SELF_HOSTED;

const nextConfig: NextConfig = {
  output: isSelfHosted ? "standalone" : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    '.space-z.ai',
  ],
};

export default nextConfig;
