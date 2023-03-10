<template>
  <footer class="border-t border-gray-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:py-16"
      >
        <div class="flex flex-col gap-4 w-1/3">
          <div
            class="flex flex-row justify-between gap-2 items-center text-gray-900"
          >
            <img
              :src="optionsForFooter?.acf?.footer_logo"
              class="w-[14vw]"
              alt=""
            />
            <img
              :src="optionsForFooter?.acf.second_logo"
              class="w-[8vw]"
              alt=""
            />
          </div>
          <div
            class="text-gray-700"
            v-html="optionsForFooter.acf.description"
          ></div>
          <!-- <nav class="mt-11 flex gap-8">
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
          </nav> -->
        </div>

        <div class="flex flex-col gap-4">
          <h1 class="font-bold text-lg">Επικοινωνία</h1>
          <div
            class="flex flex-row items-center gap-2 relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
            v-for="item in footerInformation"
            :key="item.id"
          >
            <component
              :is="item.icon"
              class="w-4 text-black rounded-lg"
              aria-hidden="true"
            />
            {{ item.content }}
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="font-bold text-lg">Χρήσιμοι σύνδεσμοι</h4>
          <div class="flex flex-col gap-2 text-gray-700">
            <div v-for="item in useFullLInks" :key="item.id">
              <nuxt-link
                class="hover:underline transition duration-200"
                target="_blank"
                :to="item.link"
                >{{ item.title }}
              </nuxt-link>
            </div>
            <div class="flex flex-row gap-2">
              <div v-for="item in social" :key="item.id">
                <nuxt-link target="_blank" :to="item.link">
                  <component
                    :is="item.icon"
                    class="w-7 bg-transparent text-gray-400 p-2 rounded-lg hover:text-blue-700 transition duration-200 hover:scale-110"
                    aria-hidden="true"
                  />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center border-t border-gray-200 p-8 md:flex-row-reverse md:justify-between md:p-6"
      >
        <form class="flex w-full justify-center md:w-auto">
          <div
            class="flex flex-row gap-1 items-center justify-end w-60 min-w-0 shrink"
          >
            <div v-for="item in social" :key="item.id">
              <nuxt-link target="_blank" :to="item.link">
                <component
                  :is="item.icon"
                  class="w-7 bg-transparent text-gray-400 p-2 rounded-lg hover:text-blue-700 transition duration-200 hover:scale-110"
                  aria-hidden="true"
                />
              </nuxt-link>
            </div>
          </div>
        </form>
        <p class="mt-6 text-sm text-gray-500 md:mt-0">
          © Copyright 2023. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import moment from "moment-with-locales-es6";
import { AtSymbolIcon, PhoneIcon, MapPinIcon } from "@heroicons/vue/24/solid";

const social = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/ICAPCRIF/",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
          }),
        ]),
    }),
  },
  {
    id: 2,
    name: "Linkedin",
    link: "https://www.linkedin.com/company/icap-crif/",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
          }),
        ]),
    }),
  },
  {
    id: 3,
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC58O0Hc0ZnaLEHIS3T7E2bg",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
          }),
        ]),
    }),
  },
];

// const year = moment().format("YYYY");

const { optionsForIndex, optionsForFooter } = useOptions();

const useFullLInks = [
  {
    id: 1,
    title: "Subject access request",
    link: "https://www.icapcrif.com/subject-access-request/",
  },
  {
    id: 2,
    title: "Privacy notice",
    link: "https://www.icapcrif.com/privacy-notice/",
  },
  {
    id: 3,
    title: "Cookie policy",
    link: "https://www.icapcrif.com/cookies-privacy-policy/",
  },
  {
    id: 4,
    title: "Μη μετάδοση στοιχείων",
    link: "https://www.icapcrif.com/no-data-transmission/",
  },
];

const footerInformation = [
  {
    id: 1,
    title: "Τηλέφωνο",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
          }),
        ]),
    }),
    content: optionsForFooter?.value?.acf?.footer_phone_number,
  },
  {
    id: 2,
    title: "Email",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z",
          }),
        ]),
    }),
    content: optionsForFooter?.value?.acf?.footer_email,
  },
  {
    id: 3,
    title: "Διεύθυνση",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",
          }),
        ]),
    }),
    content: optionsForFooter?.value?.acf?.footer_address,
  },
];
</script>
