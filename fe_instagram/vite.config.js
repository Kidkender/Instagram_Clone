import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import * as path from "path";

export default defineConfig({
  plugins: [react(), envCompatible],
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
  },

  define: {
    "process.env": {},
  },
});
