<template>
  <div class="flex flex-col !h-screen">
    <MainHeader />
    <div class="flex w-full flex-1 justify-center items-center">
      <slot />
    </div>
    <PreFooter />

    <MainFooter />
  </div>
</template>

<script lang="ts" setup>
onMounted(async () => {
  if (process.client) {
    const aos = (await import("aos")).default;

    aos.init();
  }
});
</script>
