// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [react()],
  adapter: cloudflare(),
  output: "server"
});
