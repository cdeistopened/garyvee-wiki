import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "GaryVee Wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "garyvaynerchuk.wiki",
    ignorePatterns: ["private", "templates", ".obsidian", "_templates"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Plus Jakarta Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f8ec",       // paper
          lightgray: "#e8e4dc",   // mist
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#0a1628",        // navy
          secondary: "#567cff",   // electric blue
          tertiary: "#c9a961",    // gold
          highlight: "rgba(86, 124, 255, 0.12)",
          textHighlight: "rgba(86, 124, 255, 0.25)",
        },
        darkMode: {
          light: "#0a1628",       // navy
          lightgray: "#162440",
          gray: "#4a5568",
          darkgray: "#e8e4dc",    // mist
          dark: "#f8f8ec",        // paper
          secondary: "#567cff",   // electric blue
          tertiary: "#c9a961",    // gold
          highlight: "rgba(86, 124, 255, 0.12)",
          textHighlight: "rgba(86, 124, 255, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
