<script setup lang="ts">
import { Button } from '~~/md/vue';
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-4 py-10 text-on-background-light dark:text-on-background-dark bg-background-light dark:bg-background-dark">
    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">ELevated</h1>
      <div class="flex items-center justify-center space-x-2">
        <Button start-icon="+" variant="elevated">
          <p>Hello</p>
        </Button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Filled</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="btn btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">base</span>
        </button>
        <button class="btn btn-filled-primary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">primary</span>
        </button>
        <button class="btn btn-filled-secondary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">secondary</span>
        </button>
        <button class="btn btn-filled-tertiary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">tertiary</span>
        </button>
        <button class="btn btn-filled-error btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">error</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Oulined</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="btn btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">base</span>
        </button>
        <button class="btn btn-outlined-primary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">primary</span>
        </button>
        <button class="btn btn-outlined-secondary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">secondary</span>
        </button>
        <button class="btn btn-outlined-tertiary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">tertiary</span>
        </button>
        <button class="btn btn-outlined-error btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">error</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Tonal</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="btn btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">base</span>
        </button>
        <button class="btn btn-tonal-primary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">primary</span>
        </button>
        <button class="btn btn-tonal-secondary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">secondary</span>
        </button>
        <button class="btn btn-tonal-tertiary btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">tertiary</span>
        </button>
        <button class="btn btn-tonal-error btn-start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">error</span>
        </button>
      </div>

      <div class="flex flex-col items-center justify-center space-x-2">
        <h1 class="text-xl mb-2">Text</h1>
        <div class="flex items-center justify-center space-x-2">
          <button class="btn btn-start-icon">
            <span class="btn-icon">+</span>
            <span class="btn-label">base</span>
          </button>
          <button class="btn btn-text-primary btn-start-icon">
            <span class="btn-icon">+</span>
            <span class="btn-label">primary</span>
          </button>
          <button class="btn btn-text-secondary btn-start-icon">
            <span class="btn-icon">+</span>
            <span class="btn-label">secondary</span>
          </button>
          <button class="btn btn-text-tertiary btn-start-icon">
            <span class="btn-icon">+</span>
            <span class="btn-label">tertiary</span>
          </button>
          <button class="btn btn-text-error btn-start-icon">
            <span class="btn-icon">+</span>
            <span class="btn-label">error</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>