import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  publicDir: "./public",
  site: "https://denhoff.ca",
  server: {
    host: "::1"
  },
  integrations: [react(), mdx(), prefetch()]
});