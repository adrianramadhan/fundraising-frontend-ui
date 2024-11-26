import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
