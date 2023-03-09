<template>
  <div class="bg-white -z-10">
    <div class="mx-auto w-full">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl"
      >
        <h2
          class="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white"
        >
          {{ optionsForPreFooter?.acf?.pre_footer_title }}
        </h2>
        <div
          v-html="optionsForPreFooter?.acf?.pre_footer_description"
          class="mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-300"
        ></div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <nuxt-link
            v-if="route.path !== '/contact-us'"
            to="/contact-us"
            class="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >Επικοινωνία</nuxt-link
          >
          <nuxt-link
            v-if="route.path !== '/services'"
            to="/services"
            class="text-base font-semibold leading-7 text-white"
            >Οι υπηρεσίες μας →</nuxt-link
          >
        </div>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { optionsForPreFooter } = useOptions();
const route = useRoute();
</script>
