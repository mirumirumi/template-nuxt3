import { defineNuxtConfig } from "nuxt"

export default defineNuxtConfig({
  alias: {
    "@": "/src",
  },
  app: {
    baseURL: "/",  // can override by NUXT_APP_BASE_URL
    buildAssetsDir: "_nuxt",
    head: {
      "charset": "utf-8",
      "meta": [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "sign", content: "880f27e6d0c4daf6c6143beb568a73075f02b75d53e690e6bb79297435d7cf5a8404a4c84ba35416556b92628987d76b9067a4a4ef5d30f63b2b7d0f89b0a26b" },
      ],
      "link": [
        { rel: "icon", href: "/maru.png" },
      ],
      "style": [],
      "script": [],
    },
  },
  autoImports: {
    dirs: [
      "@/composable",
    ],
  },
  components: {
    dirs: [
      "@/components",
    ],
  },
  css: [
    "@/assets/styles/scss.scss",
  ],
  nitro: {
    srcDir: "src/",
  },
  pages: true,
  runtimeConfig: {  // fallback defaults
    api: {
      endpointBaseUrl: "",
      key: "",
    },
    externalApi: {
      secret: "",  
    },
    // anything under public and app will be exposed to the frontend
  },
  srcDir: "src/",
  ssr: true,
  typescript: {
    strict: true,
  },
})
