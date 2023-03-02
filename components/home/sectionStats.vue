<template>
  <div
    @aos:in=""
    data-aos-id="anim"
    data-aos="fade"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    class="bg-gray-50 pt-12 sm:pt-16 min-h-[80vh] flex flex-col justify-center"
  >
    <!-- <h1 id="target"></h1> -->
    <!-- <Vue3Autocounter :startAmount="0" :endAmount="100" :duration="10" /> -->

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ numberSectionOptions.acf.number_title }}
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          {{ numberSectionOptions.acf.number_description }}
        </p>
      </div>
    </div>
    <div class="mt-10 bg-white pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <StatsDisplayComponent
                :title="numberSectionOptions.acf.first_text"
                :unit="numberSectionOptions.acf.first_symbol"
                :number="numberSectionOptions.acf.first_number"
                id="efficiency"
              />

              <StatsDisplayComponent
                :title="numberSectionOptions.acf.second_text"
                :unit="numberSectionOptions.acf.second_symbol"
                :number="numberSectionOptions.acf.second_number"
                id="projects"
              />

              <StatsDisplayComponent
                :title="numberSectionOptions.acf.thrird_text"
                :unit="numberSectionOptions.acf.thrird_symbol"
                :number="numberSectionOptions.acf.third_number"
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

const { data } = await axios.get("dmp");

const [, numberSectionOptions] = data;
console.log(numberSectionOptions.acf);

onMounted(async () => {
  if (process.client) {
    const test = () => {};

    document.addEventListener("aos:in", test());
  }
});
</script>
