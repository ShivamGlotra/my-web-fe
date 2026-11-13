import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Hack to silence deprecation warnings from Sass
  sassOptions: {
    quietDeps: true, // hides warnings from node_modules (Bootstrap's own files)
    silenceDeprecations: [
      "import", // your @import lines in main.scss
      "global-builtin", // mix(), unit() and friends
      "color-functions", // red(), green(), blue()
      "if-function",
    ],
  },
};

export default nextConfig;
