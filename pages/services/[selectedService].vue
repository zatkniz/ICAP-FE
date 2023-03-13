<template>
  <div class="w-full bg-white p-6 m-20 rounded-xl">
    <div class="flex flex-col items-center divide-y-2 divide-purple-700">
      <h2>{{ information?.acf?.title }}</h2>

      <div
        class="w-2/3"
        v-html="information?.acf?.service_description_extended"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "@/helpers/axios";
import { ServicesOptions } from "~~/interfaces/services-options";

const { selectedPost } = useSelectedService();
const route = useRoute();

const information: Ref<ServicesOptions> | Ref<any> = ref();

if (!selectedPost.value) {
  const { data } = await axios.get(
    `services?acf_format=standard?slug=${route.params.selectedService}`
  );
  [information.value] = data;
} else {
  information.value = selectedPost.value;

  // information.value = selectedPost.value.acf.service_description_extended;
}
</script>
