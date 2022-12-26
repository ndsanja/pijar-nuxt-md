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
    <NuxtLink to="/md/button-group" class="underline">goto button group</NuxtLink>
    <NuxtLink to="/md/badge" class="underline">goto badge</NuxtLink>
    <NuxtLink to="/md/bottom-appbar" class="underline">goto bottom appbar</NuxtLink>
    <NuxtLink to="/md/bottom-sheet" class="underline">goto bottom sheet</NuxtLink>
    <NuxtLink to="/md/card" class="underline">goto card</NuxtLink>
    <NuxtLink to="/md/checkbox" class="underline">goto checkbox</NuxtLink>
    <NuxtLink to="/md/chip" class="underline">goto chip</NuxtLink>
    <NuxtLink to="/md/dialog" class="underline">goto dialog</NuxtLink>
    <NuxtLink to="/md/divider" class="underline">divider</NuxtLink>
    <NuxtLink to="/md/bottom-navbar" class="underline">bottom-navbar</NuxtLink>
    <NuxtLink to="/md/drawer" class="underline">drawer</NuxtLink>
    <NuxtLink to="/md/rail" class="underline">rail</NuxtLink>
    <NuxtLink to="/md/progres" class="underline">progres</NuxtLink>
    <NuxtLink to="/md/radio" class="underline">radio</NuxtLink>
    <NuxtLink to="/md/search" class="underline">search</NuxtLink>
    <div class="flex space-x-2">
      <button @click="generateColor('#10b981')">emerald</button>
      <button @click="generateColor('#f59e0b')">amber</button>
      <button @click="generateColor('#0ea5e9')">sky</button>
      <button @click="generateColor('#d946ef')">fuschia</button>
      <button @click="generateColor('#84cc16')">lime</button>
      <button @click="generateColor('#881337')">rose</button>
    </div>
  </div>
</template>