<template>
  <div class="flex flex-col !h-screen">
    <MainHeader />
    <div class="flex w-full flex-1 justify-center">
      <slot />
    </div>
    <PreFooter />

    <MainFooter />
  </div>
</template>
