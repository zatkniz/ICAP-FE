<template>
  <div
    class="bg-gray-50 pt-12 sm:pt-16 height-hero-section flex flex-col justify-center mr-6 md:mr-20 rounded-r-4xl shadow-2xl !z-50 -mb-12"
  >
    <!-- <h1 id="target"></h1>
    <Vue3Autocounter :startAmount="0" :endAmount="100" :duration="10" /> -->

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ optionsForIndex?.acf?.number_title }}
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          {{ optionsForIndex?.acf?.number_description }}
        </p>
      </div>
    </div>
    <div class="mt-10 bg-white pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl">
            <dl
              class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3"
              data-aos="fade"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <StatsDisplayComponent
                :title="optionsForIndex?.acf?.first_text"
                :unit="optionsForIndex?.acf?.first_symbol"
                :number="optionsForIndex?.acf?.first_number"
                id="efficiency"
              />

              <StatsDisplayComponent
                :title="optionsForIndex?.acf?.second_text"
                :unit="optionsForIndex?.acf?.second_symbol"
                :number="optionsForIndex?.acf?.second_number"
                id="projects"
              />

              <StatsDisplayComponent
                :title="optionsForIndex?.acf?.third_text"
                :unit="optionsForIndex?.acf?.third_symbol"
                :number="optionsForIndex?.acf?.third_number"
                id="advertisements"
                :timerAmount="5"
              />
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "@/helpers/axios";

const { optionsForIndex } = useOptions();

onMounted(async () => {
  if (process.client) {
    const test = () => {};

    document.addEventListener("aos:in", test());
  }
});
</script>
