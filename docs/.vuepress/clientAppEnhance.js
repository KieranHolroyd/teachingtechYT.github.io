// ClientAppEnchance
import { defineClientAppEnhance } from "@vuepress/client";

// Import components
import YoutubeEmbed from "../components/youtube-embed.vue";

// Client Side Code
export default defineClientAppEnhance(({ app }) => {
  app.component("youtube-embed", YoutubeEmbed);
});
