<template>
  <div class="flex flex-col gap-6">
    <div class="bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div
        class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
      >
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center"
        >
          OUR DIGITAL MARKETING SERVICES
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
    </div>

    <div class="bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div
        class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
      >
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center"
        >
          HOW WE DO IT
        </h2>

        <div
          class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
        >
          <div v-for="post in posts" :key="post.title">
            <a :href="post.href" class="mt-4 block">
              <p class="text-xl font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
        >
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center"
          >
            Meet our leadership
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 flex justify-center">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          <li
            v-for="person in people"
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
  </div>
</template>

<script setup>
const posts = [
  {
    title: "SOCIAL MEDIA",
    href: "#",
    category: {
      name: "Article",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "CONSULTING",
    href: "#",
    category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: {
      name: "Case Study",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];

const people = [
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
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
];
</script>

<!-- <template>
  <div class="m-auto container max-w-6xl flex flex-col gap-12 p-6">
    <h5 class="flex justify-center text-6xl font-bold">Services</h5>

    <div class="flex items-center flex-col xl:flex-row gap-12">
      <div
        v-for="item in servicesList"
        :key="item.id"
        class="bg-gray-800 p-4 rounded-lg flex flex-col gap-2 max-w-xs hover:transition-all hover:scale-110 hover:shadow-xl hover:shadow-gray-500 shadow-md shadow-gray-500"
      >
        <h1 class="text-gray-200 font-semibold text-2xl">{{ item.name }}</h1>
        <p class="text-gray-400 text-sm font-medium">{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const servicesList = {
  Marketing: {
    name: "Marketing & Sales",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 1,
  },
  Analytics: {
    name: "Analytics",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 2,
  },
  Consulting: {
    name: "Consulting",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 3,
  },
  SocialMedia: {
    name: "Social Media",
    body: "We help you to grow your business by providing you with the best marketing and sales strategies.",
    id: 4,
  },
};
</script> -->
