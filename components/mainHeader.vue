<template>
  <header>
    <nav>
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8"
      >
        <div class="relative z-10 flex items-center gap-16">
          <nuxt-link to="/">
            <img
              :src="optionsForHeader?.acf?.header_logo"
              class="w-[200px]"
              alt=""
            />
          </nuxt-link>
          <div class="hidden lg:flex lg:gap-10">
            <div v-for="item in navBarOption" :key="item.id">
              <nuxt-link
                active-class="text-black bg-gray-300/30"
                :to="item.href"
                class="font-semibold text-sm text-white py-2 px-3 hover:bg-gray-300/50 rounded-md hover:text-black transition-all hover:transition-all"
              >
                {{ item.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="lg:hidden" data-headlessui-state="">
            <button
              class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&amp;:not(:focus-visible)]:focus:outline-none"
              aria-label="Toggle site navigation"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:Rb4m:"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                class="h-6 w-6"
              >
                <path
                  d="M5 6h14M5 18h14M5 12h14"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { optionsForIndex, optionsForHeader } = useOptions();

const route = useRoute();

const navBarOption = {
  home: {
    name: optionsForHeader?.value?.acf?.home_button_text,
    href: "/",
    id: 1,
  },
  services: {
    name: optionsForHeader?.value?.acf?.services_button_text,
    href: "/services",
    id: 2,
  },
  contactUs: {
    name: optionsForHeader?.value?.acf?.contact_button_text,
    href: "/contact-us",
    id: 3,
  },
};
</script>
