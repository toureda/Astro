import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://toureda.netlify.app/",
  integrations: [preact()]
});