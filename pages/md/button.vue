<script setup lang="ts">
import { Button } from '~~/md/vue';
import { theme, toRGB } from '~~/md/core/styles/colors'


const color = useColorGen()

//chnage css variable on runtime
const changeColor = () => {
  document.documentElement.style.setProperty(`--color-primary`, `${toRGB.red} ${toRGB.green} ${toRGB.blue}`);
}

</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-8 py-10 text-on-background-light dark:text-on-background-dark bg-background-light dark:bg-background-dark">
    <input type="text" v-model="color">
    <p>{{ color }}</p>
    {{ JSON.stringify(toRGB) }}
    <div class="h-10 w-10 bg-test" />
    <button @click="changeColor">chagnge</button>
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
        <button class="btn filled start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">base</span>
        </button>
        <button class="btn filled primary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">primary</span>
        </button>
        <button class="btn filled secondary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">secondary</span>
        </button>
        <button class="btn filled tertiary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">tertiary</span>
        </button>
        <button class="btn filled error start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">error</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Oulined</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="btn start-icon outlined">
          <span class="btn-icon">+</span>
          <span class="btn-label">base</span>
        </button>
        <button class="btn outlined primary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">primary</span>
        </button>
        <button class="btn outlined secondary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">secondary</span>
        </button>
        <button class="btn outlined tertiary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">tertiary</span>
        </button>
        <button class="btn outlined error start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">error</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Tonal</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="btn start-icon tonal">
          <span class="btn-icon">+</span>
          <span class="btn-label">base</span>
        </button>
        <button class="btn tonal primary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">primary</span>
        </button>
        <button class="btn tonal secondary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">secondary</span>
        </button>
        <button class="btn tonal tertiary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">tertiary</span>
        </button>
        <button class="btn tonal error start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">error</span>
        </button>
      </div>
    </div>


    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Text</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="btn start-icon text">
          <span class="btn-icon">+</span>
          <span class="btn-label">base</span>
        </button>
        <button class="btn text primary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">primary</span>
        </button>
        <button class="btn text secondary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">secondary</span>
        </button>
        <button class="btn text tertiary start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">tertiary</span>
        </button>
        <button class="btn text error start-icon">
          <span class="btn-icon">+</span>
          <span class="btn-label">error</span>
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
    <pre>
      {{ JSON.stringify(theme, null, 2) }}
    </pre>
  </div>

</template>