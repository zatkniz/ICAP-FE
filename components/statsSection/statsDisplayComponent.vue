<template>
  <div
    id="myElement"
    class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
  >
    <h3 class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
      {{ title }}
    </h3>

    <div class="order-1 text-5xl font-bold tracking-tight text-indigo-600">
      <span :id="props.id"></span> {{ unit }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CountUp } from "countup.js";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  timerAmount: {
    type: Number,
    required: false,
    default: 10,
  },
});
const myElement = ref(null);

onMounted(async () => {
  if (process.client) {
    const test = ref(document.getElementById("myElement"));

    const timer = new CountUp(props.id, props.number, {
      duration: props.timerAmount,
    });

    if (test.value) {
      timer.start();
    }
  }
});
</script>
