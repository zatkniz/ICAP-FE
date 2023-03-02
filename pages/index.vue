<template>
  <div class="w-full">
    <main>
      <HomeSectionPreview />
      <HomeSectionWithVideo />
      <HomeSectionStats />
    </main>
  </div>
</template>
<script lang="ts" setup>
const { setOptionsForEmployees, setOptionsForIndex } = useOptions();

const fetch = () => {
  setOptionsForIndex();
  setOptionsForEmployees();
};

fetch();
</script>

<style>
#__nuxt {
  @apply bg-purple-500;
}
</style>
