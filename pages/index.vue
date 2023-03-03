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
        data-aos="slide-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
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
  background: rgb(128, 55, 196);
  background: linear-gradient(
    267deg,
    rgba(128, 55, 196, 1) 0%,
    rgba(195, 54, 239, 1) 55%,
    rgba(128, 55, 196, 1) 100%
  );
}
</style>
