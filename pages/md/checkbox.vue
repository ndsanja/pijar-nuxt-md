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
      <h1 class="text-xl mb-2">Checkbox</h1>
      <div class="flex items-center justify-center">
        <!--Start COMPONENT -->
        <div
          class="h-10 w-10 rounded-full inline-flex items-center justify-center bg-surface-variant-light dark:bg-surface-variant-dark">
          <input type="checkbox" class="h-[18px] w-[18px] rounded-sm accent-primary-light dark:accent-primary-dark" />
        </div>
        <!--End COMPONENT -->
      </div>
    </div>

  </div>
</template>