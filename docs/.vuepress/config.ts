import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { navbar } from "./configs";

/**
 * configuration
 */
module.exports = {
  base: "/",
  lang: "en-US",
  title: "LearnUi",
  description: "My learning resources",
  head: [["meta", { rel: "application-name", content: "LearnUi" }]],
  theme: defaultTheme({
    logo: "/images/logo.png",
    docsDir: "docs",
    repo: "notes",
    backToHome: "LearnUi",
    navbar: navbar,
  }),
};
