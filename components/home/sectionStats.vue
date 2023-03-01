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
          Trusted by developers from over 20 countries
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
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
                title="Efficiency"
                unit="%"
                :number="100"
                id="efficiency"
              />

              <StatsDisplayComponent
                title="Projects"
                unit="+"
                :number="1000"
                id="projects"
              />

              <StatsDisplayComponent
                title="Advertisements"
                unit="+"
                :number="70"
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
onMounted(async () => {
  if (process.client) {
    const test = () => {
      console.log("test");
    };

    document.addEventListener("aos:in", test());
  }
});
</script>
