import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /supabase\/functions/,
      use: "ignore-loader",
    });

    return config;
  },
};

export default nextConfig;
