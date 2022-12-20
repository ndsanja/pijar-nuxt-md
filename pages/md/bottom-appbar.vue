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
      <h1 class="text-xl mb-2">Bottom Appbar</h1>
      <div class="flex items-center justify-center">
        <div class="BottomAppbar">
          <div class="BottomAppbar__item">
            <div class="h-full w-full bg-primary-light dark:bg-primary-dark"></div>
          </div>
          <div class="BottomAppbar__item">
            <div class="h-full w-full bg-primary-light dark:bg-primary-dark"></div>
          </div>
          <div class="BottomAppbar__item">
            <div class="h-full w-full bg-primary-light dark:bg-primary-dark"></div>
          </div>
          <div class="BottomAppbar__item is-grow !justify-end">
            <div class="w-12 aspect-square bg-primary-light dark:bg-primary-dark"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>