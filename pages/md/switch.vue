<script setup lang="ts">
import { generateColor } from '~~/md/core/styles/colors';
const active = ref(false)
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
      <h1 class="text-xl mb-2">Switch</h1>
      <div class="flex items-center justify-center">
        <div class="flex flex-col items-center justify-center space-y-4">
          <!--Start COMPONENT -->
          <!-- no icon -->
          <div @click="active = !active"
            :class="tw(`flex items-center ${active ? 'justify-end' : 'justify-start'} h-8 w-[52px] px-2 rounded-full bg-surface-variant-light dark:bg-surface-variant-dark`)">
            <div class="h-4 w-4 rounded-full bg-primary-light dark:bg-primary-dark"></div>
          </div>
          <!-- with icon -->
          <div @click="active = !active"
            :class="tw(`flex items-center ${active ? 'justify-end' : 'justify-start'} h-8 w-[52px] px-1 rounded-full bg-surface-variant-light dark:bg-surface-variant-dark`)">
            <div class="h-6 w-6 rounded-full bg-primary-light dark:bg-primary-dark"></div>
          </div>
          <!--End COMPONENT -->
        </div>
      </div>
    </div>

  </div>
</template>