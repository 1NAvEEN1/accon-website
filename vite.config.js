import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const timestamp = new Date().getTime();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/new/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]${timestamp}.js`,
        chunkFileNames: `assets/[name]-[hash]${timestamp}.js`,
        assetFileNames: `assets/[name]-[hash]${timestamp}[extname]`,
      },
    },
  },
});
