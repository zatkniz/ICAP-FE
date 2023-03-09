<template>
  <div
    class="bg-gray-50 bg-no-repeat bg-cover ml-6 md:ml-20 rounded-l-4xl shadow-2xl z-50 flex justify-center items-center p-20 h-fit"
  >
    <div class="divide-y-2 divide-gray-200 flex flex-col gap-12 w-full">
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center"
      >
        {{ optionsForServicesPage.acf.services_title }}
      </h2>
      <Services class="pt-12" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const { optionsForServicesPage } = useOptions();
</script>
