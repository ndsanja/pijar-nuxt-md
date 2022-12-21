<script setup lang="ts">
import { generateColor } from '~~/md/core/styles/colors';

const showBasicDialog = ref(false)
const showFullScreenDialog = ref(false)
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
      <h1 class="text-xl mb-2">Dialog</h1>
      <div class="flex items-center justify-center space-x-2">
        <button class="Button variant-filled color-primary" @click="showBasicDialog = true">
          <span class="Button__label">
            Reg Dialog
          </span>
        </button>
        <button class="Button variant-filled color-primary" @click="showFullScreenDialog = true">
          <span class="Button__label">
            Full Dialog
          </span>
        </button>
        <!--Start COMPONENT -->
        <!-- Basic dialog -->
        <div v-if="showBasicDialog" @click="showBasicDialog = false"
          class="fixed inset-0 flex items-center justify-center bg-scrim-light/20 dark:bg-scrim-dark/20">
          <div
            class="flex flex-col space-y-4 p-6 rounded-[28px] w-full min-w-[280px] max-w-[560px] bg-surface-variant-light dark:bg-surface-variant-dark">
            <span class="self-center text-center text-2xl">+</span>
            <h1
              class="self-center text-center text-headline-small font-headline-small tracking-headline-small leading-headline-small">
              This is Title</h1>
            <p
              class="self-center text-center text-body-medium font-body-medium tracking-body-medium leading-body-medium">
              This is subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat,
              culpa!</p>
            <div class="h-[1px] w-full bg-outline-light dark:bg-outline-dark"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint nihil voluptates ex facilis optio
              dolorum saepe? Labore, odit ab, error rem, itaque alias nesciunt officiis nostrum reiciendis tempora
              possimus!</p>
            <div class="h-[1px] w-full bg-outline-light dark:bg-outline-dark"></div>
            <div class="flex items-center justify-end space-x-2">
              <button class="Button variant-text color-primary">
                <span class="Button__label">accpet</span>
              </button>
              <button class="Button variant-text color-error">
                <span class="Button__label">deny</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Full screen dialog -->
        <div v-if="showFullScreenDialog"
          class="fixed inset-0 flex items-center justify-center bg-scrim-light/20 dark:bg-scrim-dark/20">
          <div
            class="min-h-screen h-screen md flex flex-col space-y-4 p-6 w-full max-w-[560px] bg-surface-variant-light dark:bg-surface-variant-dark">
            <div class="h-14 flex items-center">
              <button class="p-4" @click="showFullScreenDialog = false">
                X
              </button>
              <h1 class="flex-1 text-title-large font-title-large tracking-title-large leading-title-large">This is
                title</h1>
              <button class="Button variant-text color-primary">
                <span class="Button__label">Save</span>
              </button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint nihil voluptates ex facilis optio
              dolorum saepe? Labore, odit ab, error rem, itaque alias nesciunt officiis nostrum reiciendis tempora
              possimus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint nihil voluptates ex facilis optio
              dolorum saepe? Labore, odit ab, error rem, itaque alias nesciunt officiis nostrum reiciendis tempora
              possimus!</p>
          </div>
        </div>

        <!--End COMPONENT -->
      </div>
    </div>

  </div>
</template>