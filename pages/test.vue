<template>
  <div class="flex w-full justify-center">
    <div
      class="container1 relative w-[600px] h-[600px] border-2 border-white rounded-full"
    >
      <div
        class="icon flex justify-center items-center cursor-pointer relative h-full -left-2/4"
      >
        <div
          class="imgBx absolute w-[80px] h-[80px] rounded-full transition duration-300 border-2 border-white shadow-2xl z-50 overflow-hidden"
          :style="`--i: ${index + 1}`"
          data-id="content1"
          v-for="(item, index) in services"
          :key="item.id"
          :class="{ active1: item.id === activeItem.id }"
          @click="activeItem = item"
        >
          <img
            v-if="item.acf.service_image"
            class="absolute top-0 left-0 w-full h-full rounded-full object-cover"
            :src="item.acf.service_image"
            alt=""
          />

          <img
            v-else
            class="absolute top-0 left-0 w-full h-full rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPOTS5wathRUGlmHWy5sKmX6lxLmjxDbCu6kIKZJo&s"
            alt=""
          />
        </div>
      </div>

      <div class="content1 flex justify-center items-center">
        <div
          class="text-white flex flex-col gap-2 w-2/3 divide-y-2 divide-gray-200"
        >
          <h1 class="flex justify-center text-3xl font-bold">
            {{ activeItem.acf.title }}
          </h1>
          <div
            class="break-words text-center pt-2"
            v-html="activeItem.acf.service_description"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { optionsForServices } = useOptions();

const activeItem = ref();

activeItem.value = optionsForServices.value[0];

const services = ref(optionsForServices);
</script>

<style>
.container1 .icon .imgBx {
  transform-origin: 340px;
  transform: rotate(calc(360deg / 6 * var(--i)));
}
.container1 .icon .imgBx.active1 {
  box-shadow: 0 0 0 6px #222, 0 0 0 12px #ff1d50;
}

.container1 .icon .imgBx img {
  transform: rotate(calc(-360deg / 6 * var(--i)));
  transition: 0.5s;
  filter: grayscale(1);
}

.container1 .icon .imgBx.active1 img {
  filter: grayscale(0);
}

.content1 {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.content1::before {
  content: "";
  position: absolute;
  inset: 20px;
  border: 4px solid transparent;
  border-left: 4px solid #2196f3;
  border-right: 4px solid #fff;
  border-radius: 50%;
  animation: animte_01 5s linear infinite;
}

@keyframes animte_01 {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

.content1::after {
  content: "";
  position: absolute;
  inset: 60px;
  border: 4px solid transparent;
  border-left: 4px solid #ff1d50;
  border-right: 4px solid #fff;
  border-radius: 50%;
  animation: animte_02 2.5s linear infinite;
}

@keyframes animte_02 {
  0% {
    rotate: 360deg;
  }
  100% {
    rotate: 0deg;
  }
}

.contentBx {
  position: absolute;
  transform: scale(0);
  transition: 0.5s;
  opacity: 0;
}

.contentBx.active1 {
  transform: scale(1);
  opacity: 1;
  transition-delay: 0.5s;
  inset: 200px;
}
</style>
