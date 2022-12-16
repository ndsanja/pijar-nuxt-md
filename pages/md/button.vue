<script setup lang="ts">
import { Button } from '~~/md/vue';
import { theme, toRGB } from '~~/md/core/styles/colors'
import hexRgb from 'hex-rgb';
import { hexFromArgb } from '~~/colorGenerator';



const color = useColorGen()

const setCssVar = (variable: string, hex: number) => {
  const toRGB = hexRgb(hexFromArgb(hex));
  document.documentElement.style.setProperty(`${variable}`, `${toRGB.red} ${toRGB.green} ${toRGB.blue}`);
}

const argb = theme.schemes

const colorGenerator = {
  // LIGHT
  primaryLight: setCssVar('--md-sys-color-primary-light', argb.light.primary),
  onPrimaryLight: '#ffffff',
  primaryContainerLight: '#eaddff',
  onPrimaryContainerLight: '#21005d',
  secondaryLight: '#625b71',
  onSecondaryLight: '#ffffff',
  secondaryContainerLight: '#e8def8',
  onSecondaryContainerLight: '#1d192b',
  tertiaryLight: '#7d5260',
  onTertiaryLight: '#ffffff',
  tertiaryContainerLight: '#ffd8e4',
  onTertiaryContainerLight: '#31111d',
  errorLight: '#b3261e',
  onErrorLight: '#ffffff',
  errorContainerLight: '#f9dedc',
  onErrorContainerLight: '#410e0b',
  outlineLight: '#79747e',
  backgroundLight: '#fffbfe',
  onBackgroundLight: '#1c1b1f',
  surfaceLight: '#fffbfe',
  onSurfaceLight: '#1c1b1f',
  surfaceVariantLight: '#e7e0ec',
  onSurfaceVariantLight: '#49454f',
  inverseSurfaceLight: '#313033',
  inverseOnSurfaceLight: '#f4eff4',
  inversePrimaryLight: '#d0bcff',
  shadowLight: '#000000',
  surfaceTintLight: '#6750a4',
  outlineVariantLight: '#cac4d0',
  scrimLight: '#000000',

  // DARK
  primaryDark: setCssVar('--md-sys-color-primary-light', argb.dark.primary),
  onPrimaryDark: '#ffffff',
  primaryContainerDark: '#eaddff',
  onPrimaryContainerDark: '#21005d',
  secondaryDark: '#625b71',
  onSecondaryDark: '#ffffff',
  secondaryContainerDark: '#e8def8',
  onSecondaryContainerDark: '#1d192b',
  tertiaryDark: '#7d5260',
  onTertiaryDark: '#ffffff',
  tertiaryContainerDark: '#ffd8e4',
  onTertiaryContainerDark: '#31111d',
  errorDark: '#b3261e',
  onErrorDark: '#ffffff',
  errorContainerDark: '#f9dedc',
  onErrorContainerDark: '#410e0b',
  outlineDark: '#79747e',
  backgroundDark: '#fffbfe',
  onBackgroundDark: '#1c1b1f',
  surfaceDark: '#fffbfe',
  onSurfaceDark: '#1c1b1f',
  surfaceVariantDark: '#e7e0ec',
  onSurfaceVariantDark: '#49454f',
  inverseSurfaceDark: '#313033',
  inverseOnSurfaceDark: '#f4eff4',
  inversePrimaryDark: '#d0bcff',
  shadowDark: '#000000',
  surfaceTintDark: '#6750a4',
  outlineVariantDark: '#cac4d0',
  scrimDark: '#000000',
}

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