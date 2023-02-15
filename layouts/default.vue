<template>
  <div class="flex flex-col !h-screen">
    <MainHeader />
    <div class="flex w-full flex-1">
      <slot />
    </div>
    <MainFooter />
  </div>
</template>
