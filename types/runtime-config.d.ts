declare module "nuxt/schema" {
  interface PublicRuntimeConfig {
    apiBase: string;
  }
}

// It's important to export something to make it a module
export {};
