import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - optional analyzer, only used when installed
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-avatar",
      "@radix-ui/react-collapsible",
      "@radix-ui/react-label",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
    ],
  },
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
  async headers() {
    return [
      {
        source: "/images/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:all*(svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "./supabase/functions/**/*.{ts,tsx,js,jsx}": {
        loaders: ["ignore"],
      },
    },
  },
};
// Enable bundle analyzer when ANALYZE=true
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - analyzer is optional
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

export default withBundleAnalyzer(nextConfig as any);
