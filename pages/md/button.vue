<script setup lang="ts">
import { Button } from '~~/md/vue';
import { generateColor } from '~~/md/core/styles/colors';


const color = ref('#06b6d4')

onMounted(() => {
  generateColor('#881337')
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-8 py-10 text-on-background-light dark:text-on-background-dark bg-background-light dark:bg-background-dark">
    <input type="text" v-model="color">
    <button @click="generateColor(color)">change theme</button>
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
        <button class="Button variant-filled icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">base</span>
        </button>
        <button class="Button variant-filled color-primary icon-start" disabled>
          <span class="Button__icon">+</span>
          <span class="Button__label">primary</span>
        </button>
        <button class="Button variant-filled color-secondary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">secondary</span>
        </button>
        <button class="Button variant-filled color-tertiary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">tertiary</span>
        </button>
        <button class="Button variant-filled color-error icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">error</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Oulined</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="Button variant-outlined start-icon">
          <span class="Button__icon">+</span>
          <span class="Button__label">base</span>
        </button>
        <button class="Button variant-outlined color-primary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">primary</span>
        </button>
        <button class="Button variant-outlined color-secondary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">secondary</span>
        </button>
        <button class="Button variant-outlined color-tertiary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">tertiary</span>
        </button>
        <button class="Button variant-outlined color-error icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">error</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Tonal</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="Button variant-tonal start-icon">
          <span class="Button__icon">+</span>
          <span class="Button__label">base</span>
        </button>
        <button class="Button variant-tonal color-primary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">primary</span>
        </button>
        <button class="Button variant-tonal color-secondary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">secondary</span>
        </button>
        <button class="Button variant-tonal color-tertiary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">tertiary</span>
        </button>
        <button class="Button variant-tonal color-error icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">error</span>
        </button>
      </div>
    </div>


    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Text</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="Button variant-text start-icon">
          <span class="Button__icon">+</span>
          <span class="Button__label">base</span>
        </button>
        <button class="Button variant-text color-primary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">primary</span>
        </button>
        <button class="Button variant-text color-secondary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">secondary</span>
        </button>
        <button class="Button variant-text color-tertiary icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">tertiary</span>
        </button>
        <button class="Button variant-text color-error icon-start">
          <span class="Button__icon">+</span>
          <span class="Button__label">error</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Filled Components</h1>
      <div class="flex items-center justify-center space-x-2">
        <Button start-icon="+" variant="filled">
          Base
        </Button>
        <Button start-icon="+" variant="filled" color="primary">
          Primary
        </Button>
        <Button start-icon="+" variant="filled" color="secondary">
          Secondary
        </Button>
        <Button start-icon="+" variant="filled" color="tertiary">
          Tertiary
        </Button>
        <Button start-icon="+" variant="filled" color="error">
          Error
        </Button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Outlined Components</h1>
      <div class="flex items-center justify-center space-x-2">
        <Button start-icon="+" variant="outlined">
          Base
        </Button>
        <Button start-icon="+" variant="outlined" color="primary">
          Primary
        </Button>
        <Button start-icon="+" variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button start-icon="+" variant="outlined" color="tertiary">
          Tertiary
        </Button>
        <Button start-icon="+" variant="outlined" color="error">
          Error
        </Button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Tonal Components</h1>
      <div class="flex items-center justify-center space-x-2">
        <Button start-icon="+" variant="tonal">
          Base
        </Button>
        <Button start-icon="+" variant="tonal" color="primary">
          Primary
        </Button>
        <Button start-icon="+" variant="tonal" color="secondary">
          Secondary
        </Button>
        <Button start-icon="+" variant="tonal" color="tertiary">
          Tertiary
        </Button>
        <Button start-icon="+" variant="tonal" color="error">
          Error
        </Button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Text Components</h1>
      <div class="flex items-center justify-center space-x-2">
        <Button start-icon="+" variant="text">
          Base
        </Button>
        <Button start-icon="+" variant="text" color="primary">
          Primary
        </Button>
        <Button start-icon="+" variant="text" color="secondary">
          Secondary
        </Button>
        <Button start-icon="+" variant="text" color="tertiary">
          Tertiary
        </Button>
        <Button start-icon="+" variant="text" color="error">
          Error
        </Button>
      </div>
    </div>

  </div>

</template>