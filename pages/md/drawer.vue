<script setup lang="ts">
import { generateColor } from '~~/md/core/styles/colors';
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-4 py-10 text-on-background-light dark:text-on-background-dark bg-background-light dark:bg-background-dark">
    <div class="flex space-x-2">
      <button @click="generateColor('#10b981')">emerald</button>
      <button @click="generateColor('#f59e0b')">amber</button>
      <button @click="generateColor('#0ea5e9')">sky</button>
      <button @click="generateColor('#d946ef')">fuschia</button>
      <button @click="generateColor('#84cc16')">lime</button>
      <button @click="generateColor('#881337')">rose</button>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">Drawer</h1>
      <div class="flex items-center justify-center">
        <!--Start COMPONENT -->
        <div
          class="z-50 fixed left-0 top-0 bottom-0 rounded-r-2xl px-3 py-6 w-[360px] bg-surface-variant-light dark:bg-surface-variant-dark">
          <h2 class="text-title-small font-title-small leading-title-small tracking-title-small mb-4 pl-3">Title</h2>
          <div class="flex items-center h-14 pl-4 pr-6 space-x-3 rounded-full bg-primary-container-light">
            <span class="text-[24px]">x</span>
            <span class="flex-1 text-label-large font-label-large tracking-label-large leading-label-large">Menu ke
              1</span>
            <span class="text-label-large font-label-large tracking-label-large leading-label-large">12</span>
          </div>
          <div class="flex items-center h-14 pl-4 pr-6 space-x-3 rounded-full">
            <span class="text-[24px]">x</span>
            <span class="flex-1 text-label-large font-label-large tracking-label-large leading-label-large">Menu ke
              1</span>
            <span class="text-label-large font-label-large tracking-label-large leading-label-large">12</span>
          </div>
          <div class="flex items-center h-14 pl-4 pr-6 space-x-3 rounded-full">
            <span class="text-[24px]">x</span>
            <span class="flex-1 text-label-large font-label-large tracking-label-large leading-label-large">Menu ke
              1</span>
            <span class="text-label-large font-label-large tracking-label-large leading-label-large">12</span>
          </div>

          <div class="h-[1px] mr-4 ml-4 bg-outline-variant-light mb-4"></div>

          <h2 class="text-title-small font-title-small leading-title-small tracking-title-small mb-4 pl-3">Title</h2>
          <div class="flex items-center h-14 pl-4 pr-6 space-x-3 rounded-full">
            <span class="text-[24px]">x</span>
            <span class="flex-1 text-label-large font-label-large tracking-label-large leading-label-large">Menu ke
              1</span>
            <span class="text-label-large font-label-large tracking-label-large leading-label-large">12</span>
          </div>
          <div class="flex items-center h-14 pl-4 pr-6 space-x-3 rounded-full">
            <span class="text-[24px]">x</span>
            <span class="flex-1 text-label-large font-label-large tracking-label-large leading-label-large">Menu ke
              1</span>
            <span class="text-label-large font-label-large tracking-label-large leading-label-large">12</span>
          </div>
          <div class="flex items-center h-14 pl-4 pr-6 space-x-3 rounded-full">
            <span class="text-[24px]">x</span>
            <span class="flex-1 text-label-large font-label-large tracking-label-large leading-label-large">Menu ke
              1</span>
            <span class="text-label-large font-label-large tracking-label-large leading-label-large">12</span>
          </div>
        </div>
        <!--End COMPONENT -->
      </div>
    </div>

  </div>
</template>