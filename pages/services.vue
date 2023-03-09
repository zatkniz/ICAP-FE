<template>
  <div class="w-full">
    <ServicesOurServices />

    <ServicesHowWeDoIt />

    <ServicesMeetOurPeople />

    <!-- <div class="bg-white">
      <div
        class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
      >
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center"
        >
          OUR DIGITAL MARKETING SERVICES
        </h2>
        <div class="text-lg leading-8 text-gray-600 mt-12 pt-12">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
          fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui
          irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
          occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt
          sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
          veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non
          deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad
          non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad
          ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
          amet fugiat veniam occaecat fugiat aliqua.
        </div>
      </div>
    </div> -->

    <!-- <div class="bg-transparent">
      <div
        class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
      >
        <h2
          data-aos="flip-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center"
        >
          HOW WE DO IT
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
              <p class="text-xl font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
            </a>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="bg-transparent">
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
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
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
    </div> -->
  </div>
</template>

<script setup></script>
