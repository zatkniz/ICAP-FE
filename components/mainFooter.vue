<template>
  <footer class="border-t border-gray-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16"
      >
        <div>
          <div class="flex items-center text-gray-900">
            <img :src="optionsForIndex.acf.hero_logo" class="w-[15vw]" alt="" />
          </div>
          <nav class="mt-11 flex gap-8">
            <a
              class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
              href="/#features"
              ><span class="relative z-10">Features</span></a
            ><a
              class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
              href="/#reviews"
              ><span class="relative z-10">Reviews</span></a
            ><a
              class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
              href="/#pricing"
              ><span class="relative z-10">Pricing</span></a
            ><a
              class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
              href="/#faqs"
              ><span class="relative z-10">FAQs</span></a
            >
          </nav>
        </div>
        <div
          class="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6"
        >
          <div
            class="relative flex h-24 w-24 flex-none items-center justify-center"
          >
            <svg
              viewBox="0 0 96 96"
              fill="none"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500"
            >
              <path
                d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                stroke-width="2"
                stroke-linecap="round"
              ></path></svg
            ><img
              alt=""
              src="/images/qr-code.9c4a9a95.svg"
              width="80"
              height="80"
              decoding="async"
              data-nimg="1"
              loading="lazy"
              style="color: transparent"
            />
          </div>
          <div class="ml-8 lg:w-64">
            <p class="text-base font-semibold text-gray-900">
              <a href="/#"
                ><span class="absolute inset-0 sm:rounded-2xl"></span>Download
                the app</a
              >
            </p>
            <p class="mt-1 text-sm text-gray-700">
              Scan the QR code to download the app from the App Store.
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6"
      >
        <form class="flex w-full justify-center md:w-auto">
          <div class="w-60 min-w-0 shrink">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autocomplete="email"
              required=""
              class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
            />
          </div>
          <button
            class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none"
            type="submit"
          >
            <span class="hidden lg:inline">Join our newsletter</span
            ><span class="lg:hidden">Join newsletter</span>
          </button>
        </form>
        <p class="mt-6 text-sm text-gray-500 md:mt-0">
          © Copyright
          <!-- -->2023<!-- -->. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { optionsForIndex } = useOptions();
</script>
