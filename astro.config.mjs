import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  publicDir: "./public",
  site: "https://denhoff.ca",
  server: {
    host: "::1",
  },
  integrations: [mdx(), prefetch(), solidJs()],
});
