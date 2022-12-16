<script setup lang="ts">
import { Fab } from '~~/md/vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-4 py-10 bg-background-light dark:bg-background-dark">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <button class="ExtendedFab color-surface icon-start">
          <span class="ExtendedFab__icon">+</span>
          <span class="ExtendedFab__label">Extended</span>
        </button>
        <button class="ExtendedFab color-primary icon-end">
          <span class="ExtendedFab__label">Extended</span>
          <span class="ExtendedFab__icon">+</span>
        </button>
        <button class="ExtendedFab color-secondary icon-start">
          <span class="ExtendedFab__icon">+</span>
          <span class="ExtendedFab__label">Extended</span>
        </button>
        <button class="ExtendedFab color-tertiary icon-end">
          <span class="ExtendedFab__label">Extended</span>
          <span class="ExtendedFab__icon">+</span>
        </button>
        <button class="ExtendedFab color-error icon-start">
          <span class="ExtendedFab__icon">+</span>
          <span class="ExtendedFab__label">Extended</span>
        </button>
      </div>
    </div>
  </div>
</template>