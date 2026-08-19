import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Standard Vite + React setup. SCSS works out of the box because "sass" is installed.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
