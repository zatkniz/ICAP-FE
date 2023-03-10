<template>
  <div>
    {{ selectedPost.acf.service_description_extended }}
  </div>
</template>

<script lang="ts" setup>
const { selectedPost } = useSelectedService();
</script>
