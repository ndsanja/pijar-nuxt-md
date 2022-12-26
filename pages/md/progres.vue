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
      <h1 class="text-xl mb-2">Progress</h1>
      <div class="flex items-center justify-center">
        <div class="w-[300px] h-[300px] flex flex-col items-center justify-center space-y-4">
          <!--Start COMPONENT -->
          <!-- linear -->
          <div class="relative h-[4px] w-full bg-surface-variant-light dark:bg-surface-variant-dark">
            <div class="absolute h-full w-[75%] bg-primary-light dark:bg-primary-dark"></div>
          </div>
          <!-- cirlcular- bug!! -->
          <div
            class="relative aspect-square w-[48px] rounded-full bg-transparent border-[4px] border-surface-variant-light dark:border-surface-variant-dark">
            <div
              class="absolute aspect-square w-[48px] rounded-full bg-transparent border-[4px] border-primary-light dark:border-primary-dark">
            </div>
          </div>
          <!--End COMPONENT -->
        </div>
      </div>
    </div>

  </div>
</template>