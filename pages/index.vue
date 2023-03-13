<template>
  <div class="w-full">
    <img
      id="flower"
      src="/images/flower.png"
      class="w-32 fixed z-[999] left-5"
      :class="{ 'absolute top-0': isScrolled, 'fixed top-10': !isScrolled }"
    />

    <main>
      <HomeSectionPreview
        data-aos="slide-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />

      <HomeSectionWithVideo />
      <HomeSectionStats ref="target" />
    </main>
  </div>
</template>
<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@vueuse/core";

gsap.registerPlugin(ScrollTrigger);

const { setNumberSectionVisible } = useNumberSectionVisible();

const target = ref();
const isScrolled = ref(false);

const { width } = useWindowSize();

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    setNumberSectionVisible(isIntersecting);
  }
);

const teleport = computed(() => {
  return !isScrolled.value ? "body" : "#stats";
});

onMounted(() => {
  // gsap.timeline().to("#flower", {
  //   y: 750,
  //   ease: "power4.out",
  //   duration: 1,
  //   // onComplete: () => {
  //   //   gsap.to("#flower", {
  //   //     x: "91vw",
  //   //     rotate: 1080,
  //   //     ease: "power4.out",
  //   //     duration: 1,
  //   //   });
  //   //   // isScrolled.value = true;
  //   // },
  //   scrollTrigger: {
  //     trigger: "#stats",
  //     start: "top 70%",
  //     end: "bottom 20%",
  //   },
  // });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#flower",
        scrub: true,
      },
    })
    .to("#flower", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#hero",
        scrub: 1,
        start: "bottom 7%",
      },
    })
    .to("#flower", {
      opacity: 0,
      duration: 0.01,
      markers: true,
      scrollTrigger: {
        trigger: "#video",
        scrub: true,
        start: "top 15%",
      },
    })
    .to("#flower", {
      opacity: 1,
      x: width.value - 180,
      rotate: 720,
      ease: "power4.out",
      duration: 2,
      scrollTrigger: {
        trigger: "#stats",
        scrub: true,
        pin: true,
        start: "center center",
      },
    })
    .from("#stats-container", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#stats",
        scrub: 1,
        start: "center 90%",
      },
    })
    .from(".stat-component", {
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#stats",
        scrub: 1,
        start: "center center",
      },
    });

  // gsap.from("#flower", {
  //   y: 100,
  //   opacity: 0,
  //   ease: "power4.out",
  //   duration: 2,
  // });

  gsap;

  // gsap.fromTo(
  //   "#flower",
  //   {
  //     y: 700,
  //     duration: 1.5,
  //     scrollTrigger: {
  //       trigger: "#stats",
  //       start: "top 65%",
  //       end: "bottom 20%",
  //       scrub: true,
  //     },
  //   },
  //   {
  //     x: '91vw',
  //     ease: "power4.out",
  //     duration: 1.5,
  //     scrollTrigger: {
  //       trigger: "#stats",
  //       start: "top 70%",
  //       end: "bottom 20%",
  //     },
  //   }
  // );
});
</script>

<style>
#__nuxt {
  background: rgb(128, 55, 196);
  background: linear-gradient(
    267deg,
    rgba(128, 55, 196, 1) 0%,
    rgba(195, 54, 239, 1) 55%,
    rgba(128, 55, 196, 1) 100%
  );
}
</style>
