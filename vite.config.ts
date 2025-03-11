import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "lion swap",
        short_name: "lion",
        icons: [
          {
            src: "icons/lion-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/lion-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/lion-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/lion-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/lion-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/lion-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "icons/lion-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/lion-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/lion-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/lion-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#161616",
        theme_color: "#2cb67d",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
