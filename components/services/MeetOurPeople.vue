<template>
  <div
    class="bg-gray-50 flex items-center p-20 flex-col justify-center mr-6 md:mr-20 rounded-r-4xl shadow-2xl !z-50 -mb-12"
  >
    {{ optionsForEmployees?.acf }}
    <div class="mx-auto max-w-7xl">
      <div
        class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl flex flex-col"
      >
        <h2
          data-aos="flip-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center"
        >
          Meet our leadership
        </h2>
        <p
          class="mt-12 pt-12 text-lg leading-8 text-gray-600 flex justify-center"
        >
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <ul role="list" class="grid grid-cols-2 gap-6 justify-between w-full">
        <li
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          :data-aos-delay="600 * index"
          v-for="(person, index) in people"
          :key="person.name"
          class="flex flex-col gap-6 xl:flex-row"
        >
          <img
            class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
            :src="person.imageUrl"
            alt=""
          />
          <div class="flex-auto">
            <h3
              class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
            >
              {{ person.name }}
            </h3>
            <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
            <p class="mt-6 text-base leading-7 text-gray-600">
              {{ person.bio }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { optionsForEmployees } = useOptions();

const people = [
  {
    name: optionsForEmployees.value?.acf?.full_name,
    role: optionsForEmployees.value?.acf?.occupation,
    imageUrl: optionsForEmployees.value?.acf?.image,
    bio: optionsForEmployees.value?.acf?.description,
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
];
</script>
