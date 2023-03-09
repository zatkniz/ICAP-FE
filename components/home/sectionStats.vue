<template>
  <div
    class="bg-gray-50 px-20 pl-0 pt-0 height-hero-section flex flex-col justify-center mr-6 md:mr-20 rounded-r-4xl shadow-2xl !z-50 -mb-12"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ optionsForIndex.acf.number_title }}
        </h2>
        <div
          class="mt-3 text-xl text-gray-500 sm:mt-4"
          v-html="optionsForIndex.acf.number_description"
        ></div>
      </div>
    </div>
    <div class="mt-10 bg-gray-50 pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative bg-gray-50">
          <div class="flex flex-row justify-between w-full">
            <img
              :src="optionsForIndex.acf.number_image"
              alt=""
              class="w-[25vw]"
            />
            <div class="flex items-center w-full">
              <div
                class="rounded-lg bg-white shadow-lg flex flex-row gap-2 w-fit h-fit p-3"
                data-aos="fade"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <StatsDisplayComponent
                  :title="optionsForIndex.acf.first_text"
                  :unit="optionsForIndex.acf.first_symbol"
                  :number="optionsForIndex.acf.first_number"
                  id="efficiency"
                />

                <StatsDisplayComponent
                  :title="optionsForIndex.acf.second_text"
                  :unit="optionsForIndex.acf.second_symbol"
                  :number="optionsForIndex.acf.second_number"
                  id="projects"
                />

                <StatsDisplayComponent
                  :title="optionsForIndex.acf.third_text"
                  :unit="optionsForIndex.acf.third_symbol"
                  :number="optionsForIndex.acf.third_number"
                  id="advertisements"
                  :timerAmount="'5'"
                />

                <StatsDisplayComponent
                  :title="optionsForIndex.acf.fourth_text"
                  :unit="optionsForIndex.acf.fourth_symbol"
                  :number="optionsForIndex.acf.fourth_number"
                  id="advertisements"
                  :timerAmount="'5'"
                />
              </div>
            </div>
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
    // document.addEventListener("aos:in");
  }
});
</script>
