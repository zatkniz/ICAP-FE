<template>
  <div
    id="myElement"
    class="flex flex-col w-fit items-center justify-center border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
  >
    <h3 class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
      {{ title }}
    </h3>

    <div
      class="text-4xl font-bold tracking-tight text-indigo-600 flex flex-row"
    >
      <span :id="props.id"> {{ number }} </span> {{ unit }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CountUp } from "countup.js";
import { ref } from "vue";
const { numberSectionVisible } = useNumberSectionVisible();

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: () => "",
  },
  unit: {
    type: String,
    required: true,
    default: () => "",
  },
  number: {
    type: String,
    required: true,
    default: () => "0",
  },
  id: {
    type: String,
    required: true,
  },
  timerAmount: {
    type: String,
    required: false,
    default: "",
  },
});
const myElement = ref(null);

onMounted(async () => {
  if (process.client) {
    const test = ref(document.getElementById("myElement"));

    const timer = new CountUp(props.id, props.number as any, {
      duration: 5,
    });

    watch(numberSectionVisible, () => {
      if (numberSectionVisible.value) {
        timer.start();
      }
    });
  }
});
</script>
