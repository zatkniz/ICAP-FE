<template>
  <div
    class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-screen flex items-center"
  >
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <svg
      viewBox="0 0 1097 845"
      aria-hidden="true"
      class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
    >
      <path
        fill="url(#7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1)"
        fill-opacity=".2"
        d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
      />
      <defs>
        <linearGradient
          id="7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1"
          x1="1097.04"
          x2="-141.165"
          y1=".22"
          y2="363.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      viewBox="0 0 1097 845"
      aria-hidden="true"
      class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
    >
      <path
        fill="url(#49c00522-612e-41d3-bb32-ce7d1fa28850)"
        fill-opacity=".2"
        d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
      />
      <defs>
        <linearGradient
          id="49c00522-612e-41d3-bb32-ce7d1fa28850"
          x1="1097.04"
          x2="-141.165"
          y1=".22"
          y2="363.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <div
      class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-6 w-full"
    >
      <div class="mx-auto max-w-2xl lg:mx-0">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&controls=0"
        >
        </iframe>
      </div>

      <div class="text-white flex flex-col gap-2 justify-center items-center">
        <h5 class="font-bold text-2xl">THE MARKETING BEHIND THE EXPERTS</h5>

        <nuxt-link
          to="/services"
          class="text-base font-semibold leading-7 text-white flex justify-center"
          >Meet our team →</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/vue/20/solid";

const cards = [
  {
    name: "Sales",
    description:
      "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: LifebuoyIcon,
  },
  {
    name: "Media Inquiries",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: NewspaperIcon,
  },
];

//create custom directive
</script>
