<script setup lang="ts">
import { generateColor } from '~~/md/core/styles/colors'

onMounted(() => {
  generateColor('#14b8a6')
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-2 min-h-screen w-full text-on-background-light dark:text-on-background-dark bg-background-light dark:bg-background-dark">
    <NuxtLink to="/md/button" class="underline" @click="generateColor('#881337')">goto button</NuxtLink>
    <NuxtLink to="/md/fab" class="underline">goto fab</NuxtLink>
    <NuxtLink to="/md/extended-fab" class="underline">goto extended fab</NuxtLink>
    <button @click="generateColor('#14b8a6')">theme</button>
  </div>
</template>