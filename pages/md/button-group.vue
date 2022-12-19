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
      <h1 class="text-xl mb-2">default</h1>
      <div class="flex items-center justify-center">
        <div class="ButtonGroup">
          <button class="ButtonGroup__item">
            <span class="ButtonGroup__item__icon">+</span>
            <span class="ButtonGroup__item__label">Label 1</span>
          </button>
          <button class="ButtonGroup__item">
            <span class="ButtonGroup__item__icon">+</span>
            <span class="ButtonGroup__item__label">Label 2</span>
          </button>
          <button class="ButtonGroup__item">
            <span class="ButtonGroup__item__icon">+</span>
            <span class="ButtonGroup__item__label">Labelddddddddddd 3</span>
          </button>
          <button class="ButtonGroup__item">
            <span class="ButtonGroup__item__icon">+</span>
            <span class="ButtonGroup__item__label">Label 3</span>
          </button>
          <button class="ButtonGroup__item">
            <span class="ButtonGroup__item__icon">+</span>
            <span class="ButtonGroup__item__label">Label 3</span>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>