<template>
  <div
    class="bg-white ml-6 md:ml-20 rounded-l-4xl shadow-2xl z-50 height-hero-section flex"
  >
    <div
      class="p-6 md:px-20 flex flex-col gap-6 xl:!flex-row justify-between items-center flex-1"
    >
      <div class="mx-auto !w-full xl:!w-1/2 flex flex-col gap-6">
        <div
          data-aos="fade-down"
          data-aos-delay="1250"
          data-aos-duration="1000"
        >
          <img :src="optionsForIndex.acf.hero_logo" alt="" />
          <h1 class="text-4xl font-bold text-gray-900 sm:text-6xl">
            <div class="text-blue-700">
              {{ optionsForIndex.acf.hero_title }}
            </div>

            <div id="typed"></div>
          </h1>
        </div>

        <div
          class="text-lg leading-8 text-gray-600"
          data-aos="flip-down"
          data-aos-delay="1250"
          data-aos-duration="1000"
          v-html="optionsForIndex.acf.hero_text"
        ></div>
        <div
          class="flex flex-row gap-6 items-center"
          data-aos="fade-up"
          data-aos-delay="1250"
          data-aos-duration="1000"
        >
          <nuxt-link
            to="contact-us"
            class="rounded-full bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Ας ξεκινήσουμε</nuxt-link
          >
          <nuxt-link
            to="services"
            class="text-base font-semibold leading-7 text-gray-900"
            >Μάθε περισσότερα <span aria-hidden="true">→</span></nuxt-link
          >
        </div>
      </div>
      <div
        id="phoneAnimation"
        class="mt-16 sm:mt-24 lg:mt-0 flex justify-center w-1/2 h-full"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <img class="w-max" :src="optionsForIndex.acf.hero_image" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TypeIt from "typeit";

const { optionsForIndex } = useOptions();
const route = useRoute();
const typeIt = ref();
const initTyped = () => {
  if (process.client) {
    // const Parallax = (await import("parallax-js")).default;

    // const scene = document.getElementById("phoneAnimation");

    // new Parallax(scene, { clipRelativeInput: true });

    typeIt.value = new (TypeIt as any)("#typed", {
      speed: 50,
      waitUntilVisible: false,
      loop: true,
    })
      .pause(1800)
      .type("Social Media Strategy.", { delay: 500 })
      .pause(1200)
      .move(-1)
      .delete(22, { delay: 800, speed: 10 })
      .pause(500)
      .type("Digital Advertising", { delay: 500 })
      .pause(1200)
      .delete(11, { delay: 800, speed: 10 })
      .pause(800)
      .type("Branding", { delay: 500 })
      .pause(1200)
      .delete(16, { delay: 800, speed: 10 })
      .pause(800)
      .type("Social Media Management", { delay: 500 })
      .pause(1200)
      .delete(23)
      .pause(800)
      .type("Content Creation", { delay: 500 })
      .pause(1200)
      .delete(16, { delay: 800, speed: 10 })
      .pause(800)
      .type("Technical Support Services", { delay: 500 })
      .pause(1200)
      .delete(27, { delay: 800, speed: 10 })
      .move(1)
      .go();
  }
};

onMounted(async () => {
  setTimeout(() => {
    initTyped();
  }, 1500);
});
</script>
