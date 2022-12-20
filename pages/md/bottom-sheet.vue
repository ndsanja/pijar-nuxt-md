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
      <h1 class="text-xl mb-2">Bottom Sheet</h1>
      <div class="flex items-center justify-center">
        <!--Start COMPONENT -->
        <div class="fixed flex flex-col justify-end items-center inset-0 bg-scrim-light/30 dark:bg-scrim-dark/30">
          <div class="relative w-full max-w-[640px] h-80 rounded-t-2xl bg-primary-light">
            <div class="absolute top-[9px] left-1/2 -translate-x-1/2 h-[4px] w-8 rounded-full bg-surface-variant-light">

            </div>
          </div>
        </div>
        <!--End COMPONENT -->
      </div>
    </div>

  </div>
</template>