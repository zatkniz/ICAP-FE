<template>
  <div
    class="bg-gray-50 flex items-center p-20 flex-col justify-center mr-6 md:mr-20 rounded-r-4xl shadow-2xl !z-50 -mb-12"
  >
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
          {{ optionsForServicesPage.acf.employee_section_title }}
        </h2>
        <div
          class="mt-12 pt-12 text-xl font-semibold leading-8 text-gray-600 flex justify-center"
          v-html="optionsForServicesPage.acf.employee_section_description"
        ></div>
      </div>
      <ul
        role="list"
        class="grid grid-cols-2 gap-12 justify-between w-full mt-12"
      >
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
            :src="person.acf?.image"
            alt=""
          />
          <div class="flex flex-col">
            <div class="flex flex-col">
              <h3
                class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
              >
                {{ person?.acf?.full_name }}
              </h3>
              <p class="text-base leading-7 text-gray-600">
                {{ person.acf?.occupation }}
              </p>
            </div>
            <div
              v-html="person.acf?.description"
              class="mt-6 text-base leading-7 text-gray-600"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { optionsForEmployees, optionsForServicesPage } = useOptions();

const people = optionsForEmployees.value;
</script>
