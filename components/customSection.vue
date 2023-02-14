<template>
  <section :id="id" :aria-label="label">
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
});
</script>
