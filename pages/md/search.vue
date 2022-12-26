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
      <h1 class="text-xl mb-2">Search</h1>
      <div class="flex flex-col space-y-4 items-center justify-center">
        <!--Start COMPONENT -->
        <!-- serachbar -->
        <div
          class="flex items-center h-14 w-full min-w-[360px] max-w-[720px] px-4 space-x-4 rounded-full !shadow-elevation-3-light dark:!shadow-elevation-3-dark shadow-surface-tint-light/20 dark:shadow-surface-tint-dark/20 bg-surface-light dark:bg-surface-dark">
          <div class="h-6 w-6 bg-on-surface-light dark:bg-on-surface-dark"></div>
          <input type="text" placeholder="Search Bar"
            class="flex-1 bg-transparent outline-none active:outline-none focus:outline-none text-on-surface-light dark:text-on-surface-dark placeholder:text-body-large placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark">
          <div class="h-[30px] w-[30px] rounded-full bg-primary-light dark:bg-primary-dark"></div>
        </div>

        <!-- serach view full -->
        <div>
          <div
            class="flex items-center h-[72px] w-full min-w-[360px] max-w-[720px] px-4 space-x-4 bg-surface-light dark:bg-surface-dark">
            <div class="text-[24px] text-on-surface-light dark:text-on-surface-dark">x</div>
            <input type="text" placeholder="Search View full"
              class="flex-1 bg-transparent outline-none active:outline-none focus:outline-none text-on-surface-light dark:text-on-surface-dark placeholder:text-body-large placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark">
            <div class="text-[24px] text-on-surface-light dark:text-on-surface-dark">x</div>
          </div>
          <div class="h-[1px] bg-outline-light dark:bg-outline-dark w-full" />
        </div>

        <!-- serach view docked -->
        <div>
          <div
            class="flex items-center h-14 w-full min-w-[360px] max-w-[720px] px-4 space-x-4 bg-surface-light dark:bg-surface-dark">
            <div class="text-[24px] text-on-surface-light dark:text-on-surface-dark">x</div>
            <input type="text" placeholder="Search View docked"
              class="flex-1 bg-transparent outline-none active:outline-none focus:outline-none text-on-surface-light dark:text-on-surface-dark placeholder:text-body-large placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark">
            <div class="text-[24px] text-on-surface-light dark:text-on-surface-dark">x</div>
          </div>
          <div class="h-[1px] bg-outline-light dark:bg-outline-dark w-full" />
        </div>
        <!--End COMPONENT -->
      </div>
    </div>

  </div>
</template>