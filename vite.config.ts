import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes every built asset URL relative, so the exact same build
// works whether it's served at the domain root or under a GitHub Pages
// project subpath (https://<user>.github.io/<repo>/) without configuration.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
