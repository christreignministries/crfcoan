import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/crfcoan/",

  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Increase City",
        short_name: "christreignministries",
        start_url: "/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "assets/church logo-copy.c3b1520a.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "assets/church logo-copy.c3b1520a.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "assets/church logo-copy.c3b1520a.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      // mode: "development",
      registerType: "autoUpdate",
      injectRegister: "auto",
      // devOptions: {
      //   enabled: true,
      //   type: "module",
      // },
    }),
  ],
});
