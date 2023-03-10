<template>
  <div class="bg-transparent p-20">
    <div
      class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <h2
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        class="text-3xl font-bold tracking-tight text-black sm:text-4xl flex justify-center"
      >
        {{ optionsForServicesPage.acf.how_we_do_it_section_title }}
      </h2>

      <div
        class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <div
          v-for="(post, index) in posts"
          :key="post.title"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          :data-aos-delay="600 * index"
        >
          <a :href="post.href" class="mt-4 block">
            <p class="text-xl font-bold text-black">
              {{ post.title }}
            </p>
            <div
              class="mt-3 text-base text-white"
              v-html="post.description"
            ></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { optionsForServicesPage } = useOptions();
const posts = [
  {
    title: optionsForServicesPage.value.acf.first_post_title,
    href: "#",
    description: optionsForServicesPage.value.acf.first_post_description,
  },
  {
    title: optionsForServicesPage.value.acf.second_post_title,
    href: "#",
    description: optionsForServicesPage.value.acf.second_post_description,
  },
  {
    title: optionsForServicesPage.value.acf.third_post_title,
    href: "#",
    description: optionsForServicesPage.value.acf.third_post_description,
  },
];
</script>
