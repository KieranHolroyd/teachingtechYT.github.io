import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";
import { defineUserConfig } from "vuepress-vite";
import { path } from "@vuepress/utils";
// import fetch from "node-fetch";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-GB",
  title: "Teaching Tech YT | 3D Printer Site",
  description: `Teaching Tech is a YouTube channel dedicated to providing quality content that will help expand your technology related skills and knowledge.`,

  themeConfig: {
    logo: "/logo-light-mode.png",
    logoDark: "/logo-dark-mode.png",
    repo: "TeachingTechYT/teachingtechYT.github.io",
    editLinks: true,
    editLinkText: "Help improve this page.",

    lastUpdated: true,
    notFound: [
      "We're sorry, this page can't be found, it may have been moved or deleted. " +
        "Please try searching for the page you're looking for or request it be authored from our Github issues page! https://github/TeachingTechYT/teachingtechYT.github.io",
    ],
    danger: "Here be dragons!",
    docsDir: "src",
  },

  markdown: {
    linkify: true,
  },

  bundler: "@vuepress/bundler-vite",
  bundlerConfig: {
    viteOptions: {},
  },
});
