import Vue3Autocounter from "vue3-autocounter";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Vue3Autocounter", Vue3Autocounter);
});
