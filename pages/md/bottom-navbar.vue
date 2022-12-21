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
      <h1 class="text-xl mb-2">Bottom Navbar</h1>
      <div class="flex items-center justify-center">
        <!--Start COMPONENT -->
        <div
          class="fixed bottom-0 left-0 right-0 flex items-center justify-around pt-3 pb-4 bg-surface-variant-light dark:bg-surface-variant-dark">

          <div class="flex flex-col items-center justify-center space-y-1">
            <div class="w-16 h-8 inline-flex items-center justify-center rounded-full bg-primary-container-light">
              <span class="">x</span>
            </div>
            <span class="text-label-medium font-label-medium leading-label-medium tracking-label-medium">Label</span>
          </div>

          <div class="flex flex-col items-center justify-center space-y-1">
            <div class="w-16 h-8 inline-flex items-center justify-center rounded-full bg-primary-container-light">
              <span class="">x</span>
            </div>
            <span class="text-label-medium font-label-medium leading-label-medium tracking-label-medium">Label</span>
          </div>

          <div class="flex flex-col items-center justify-center space-y-1">
            <div class="w-16 h-8 inline-flex items-center justify-center rounded-full bg-primary-container-light">
              <span class="">x</span>
            </div>
            <span class="text-label-medium font-label-medium leading-label-medium tracking-label-medium">Label</span>
          </div>

          <div class="flex flex-col items-center justify-center space-y-1">
            <div class="w-16 h-8 inline-flex items-center justify-center rounded-full bg-primary-container-light">
              <span class="">x</span>
            </div>
            <span class="text-label-medium font-label-medium leading-label-medium tracking-label-medium">Label</span>
          </div>

          <div class="flex flex-col items-center justify-center space-y-1">
            <div class="w-16 h-8 inline-flex items-center justify-center rounded-full bg-primary-container-light">
              <span class="">x</span>
            </div>
            <span class="text-label-medium font-label-medium leading-label-medium tracking-label-medium">Label</span>
          </div>
        </div>
        <!--End COMPONENT -->
      </div>
    </div>

  </div>
</template>