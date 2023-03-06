<template>
  <div class="w-full">
    <main>
      <HomeSectionPreview
        data-aos="slide-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />

      <HomeSectionWithVideo />
      <HomeSectionStats
        ref="target"
        data-aos="slide-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
    </main>
  </div>
</template>
<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";

const { setNumberSectionVisible } = useNumberSectionVisible();

const target = ref();

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    setNumberSectionVisible(isIntersecting);
  }
);
</script>

<style>
#__nuxt {
  background: rgb(128, 55, 196);
  background: linear-gradient(
    267deg,
    rgba(128, 55, 196, 1) 0%,
    rgba(195, 54, 239, 1) 55%,
    rgba(128, 55, 196, 1) 100%
  );
}
</style>
