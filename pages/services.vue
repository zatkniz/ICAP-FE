<template>
  <div class="m-auto container max-w-6xl flex flex-col gap-12">
    <h5 class="flex justify-center text-6xl font-bold">Services</h5>

    <div class="flex items-center flex-col xl:flex-row gap-12">
      <div
        v-for="item in servicesList"
        :key="item.id"
        class="bg-gray-800 p-4 rounded-lg flex flex-col gap-2 max-w-xs hover:transition-all hover:scale-110 hover:shadow-xl hover:shadow-gray-500 shadow-md shadow-gray-500"
      >
        <h1 class="text-gray-200 font-semibold text-2xl">{{ item.name }}</h1>
        <p class="text-gray-400 text-sm font-medium">{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const servicesList = {
  Marketing: {
    name: "Marketing & Sales",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 1,
  },
  Analytics: {
    name: "Analytics",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 2,
  },
  Consulting: {
    name: "Consulting",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 3,
  },
  SocialMedia: {
    name: "Social Media",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 4,
  },
};
</script>
