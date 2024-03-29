import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import solidJs from "@astrojs/solid-js";
import { getHighlighter, BUNDLED_LANGUAGES } from 'shiki';
import rehypePrettyCode from "rehype-pretty-code";


import latte from './themes/latte.json' assert {type: 'json'};
import mocha from './themes/mocha.json' assert {type: 'json'};

import rescriptLanguageGrammar from './languages/rescript.tmLanguage.json' assert {type: 'json'};

const rescript = {
  id: "rescript",
  scopeName: 'source.rescript',
  grammar: rescriptLanguageGrammar,
  aliases: ['res', 'rescript']
}
 
const prettyCodeOptions = {
  theme: {
    light: latte,
    dark: mocha 
  },
  tokensMap: {},
  getHighlighter: (options) => 
    getHighlighter({
    ...options,
    wrap: true,
    langs: [
      ...BUNDLED_LANGUAGES,
      rescript
    ]
  })
};


// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  publicDir: "./public",
  site: "https://denhoff.ca",
  server: {
    host: "::1",
  },
  integrations: [mdx(), prefetch(), solidJs()],
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});
