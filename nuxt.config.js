import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  head: {
    title: "nuxt2-app",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ]
  },
  plugins: [],
  buildModules: [],
  modules: ["@nuxtjs/axios"],
  axios: {},
  build: {}
});
