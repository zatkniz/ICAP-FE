<template>
  <div class="flex flex-col !h-screen">
    <div
      class="flex justify-center items-center rounded-full z-50 fixed top-[92vh] right-12"
    >
      <nuxt-link to="/contact-us">
        <button
          class="p-2 bg-white rounded-full shadow-lg shadow-black/30 hover:text-blue-700 hover:scale-125 transition duration-200 hover:shadow-xl hover:shadow-black/40"
        >
          <ChatBubbleOvalLeftEllipsisIcon class="w-8 h-8" />
        </button>
      </nuxt-link>
    </div>

    <MainHeader />
    <div class="flex w-full flex-1 justify-center items-center">
      <slot />
    </div>
    <PreFooter />

    <MainFooter />
  </div>
</template>

<script lang="ts" setup>
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/solid";

onMounted(async () => {
  if (process.client) {
    const aos = (await import("aos")).default;

    aos.init();
  }
});
</script>

<style>
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotating {
  -webkit-animation: rotating 2s linear infinite;
}
</style>
