<script setup lang="ts">
import { Fab } from '~~/md/vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-4 py-10 bg-background-light dark:bg-background-dark">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <button class="Fab color-surface">
          <span class="Fab__icon">+</span>
        </button>
        <button class="Fab color-primary">
          <span class="Fab__icon">+</span>
        </button>
        <button class="Fab color-secondary">
          <span class="Fab__icon">+</span>
        </button>
        <button class="Fab color-tertiary">
          <span class="Fab__icon">+</span>
        </button>
        <button class="Fab color-error">
          <span class="Fab__icon">+</span>
        </button>

      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">small</h1>
      <div class="flex items-center justify-center">
        <button class="Fab size-sm color-surface">
          <span class="Fab__icon size-sm">+</span>
        </button>
        <button class="Fab size-sm color-primary">
          <span class="Fab__icon size-sm">+</span>
        </button>
        <button class="Fab size-sm color-secondary">
          <span class="Fab__icon size-sm">+</span>
        </button>
        <button class="Fab size-sm color-tertiary">
          <span class="Fab__icon size-sm">+</span>
        </button>
        <button class="Fab size-sm color-error">
          <span class="Fab__icon size-sm">+</span>
        </button>

      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <button class="Fab size-md color-surface">
          <span class="Fab__icon size-md">+</span>
        </button>
        <button class="Fab size-md color-primary">
          <span class="Fab__icon size-md">+</span>
        </button>
        <button class="Fab size-md color-secondary">
          <span class="Fab__icon size-md">+</span>
        </button>
        <button class="Fab size-md color-tertiary">
          <span class="Fab__icon size-md">+</span>
        </button>
        <button class="Fab size-md color-error">
          <span class="Fab__icon size-md">+</span>
        </button>

      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <button class="Fab size-lg color-surface">
          <span class="Fab__icon size-lg">+</span>
        </button>
        <button class="Fab size-lg color-primary">
          <span class="Fab__icon size-lg">+</span>
        </button>
        <button class="Fab size-lg color-secondary">
          <span class="Fab__icon size-lg">+</span>
        </button>
        <button class="Fab size-lg color-tertiary">
          <span class="Fab__icon size-lg">+</span>
        </button>
        <button class="Fab size-lg color-error">
          <span class="Fab__icon size-lg">+</span>
        </button>

      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <Fab>
          +
        </Fab>
        <Fab color="surface">
          +
        </Fab>
        <Fab color="primary">
          +
        </Fab>
        <Fab color="secondary">
          +
        </Fab>
        <Fab color="tertiary">
          +
        </Fab>

      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">small</h1>
      <div class="flex items-center justify-center">
        <Fab size="small">
          +
        </Fab>
        <Fab color="surface" size="small">
          +
        </Fab>
        <Fab color="primary" size="small">
          +
        </Fab>
        <Fab color="secondary" size="small">
          +
        </Fab>
        <Fab color="tertiary" size="small">
          +
        </Fab>

      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <Fab size="medium">
          +
        </Fab>
        <Fab color="surface" size="medium">
          +
        </Fab>
        <Fab color="primary" size="medium">
          +
        </Fab>
        <Fab color="secondary" size="medium">
          +
        </Fab>
        <Fab color="tertiary" size="medium">
          +
        </Fab>

      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <Fab size="large">
          +
        </Fab>
        <Fab color="surface" size="large">
          +
        </Fab>
        <Fab color="primary" size="large">
          +
        </Fab>
        <Fab color="secondary" size="large">
          +
        </Fab>
        <Fab color="tertiary" size="large">
          +
        </Fab>

      </div>
    </div>
  </div>
</template>