import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "./supabase/functions/**/*.{ts,tsx,js,jsx}": {
        loaders: ["ignore"],
      },
    },
  },
};

export default nextConfig;
