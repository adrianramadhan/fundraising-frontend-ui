import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: config.public.apiBase as string,
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
