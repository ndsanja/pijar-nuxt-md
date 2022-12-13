<script setup lang="ts">
import { Button } from '~~/md/vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-4 py-10 bg-background-light dark:bg-background-dark">
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

        <Button start-icon="+" variant="filled">
          <p>default</p>
        </Button>
        <Button start-icon="+" variant="filled" color="primary">
          <p>primary</p>
        </Button>
        <Button start-icon="+" variant="filled" color="secondary">
          <p>Secondary</p>
        </Button>
        <Button start-icon="+" variant="filled" color="tertiary">
          <p>Tertiary</p>
        </Button>
        <Button start-icon="+" variant="filled" color="error">
          <p>Error</p>
        </Button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Oulined</h1>
      <div class="flex items-center justify-center space-x-2">
        <Button start-icon="+" variant="outlined">
          <p>default</p>
        </Button>
        <Button start-icon="+" variant="outlined" color="primary">
          <p>primary</p>
        </Button>
        <Button start-icon="+" variant="outlined" color="secondary">
          <p>Secondary</p>
        </Button>
        <Button start-icon="+" variant="outlined" color="tertiary">
          <p>Tertiary</p>
        </Button>
        <Button start-icon="+" variant="outlined" color="error">
          <p>Error</p>
        </Button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-x-2">
      <h1 class="text-xl mb-2">Tonal</h1>
      <div class="flex items-center justify-center space-x-2">
        <Button start-icon="+" variant="tonal">
          <p>default</p>
        </Button>
        <Button start-icon="+" variant="tonal" color="primary">
          <p>primary</p>
        </Button>
        <Button start-icon="+" variant="tonal" color="secondary">
          <p>Secondary</p>
        </Button>
        <Button start-icon="+" variant="tonal" color="tertiary">
          <p>Tertiary</p>
        </Button>
        <Button start-icon="+" variant="tonal" color="error">
          <p>Error</p>
        </Button>
      </div>

      <div class="flex flex-col items-center justify-center space-x-2">
        <h1 class="text-xl mb-2">Text</h1>
        <div class="flex items-center justify-center space-x-2">
          <Button start-icon="+" variant="text">
            <p>default</p>
          </Button>
          <Button start-icon="+" variant="text" color="primary">
            <p>primary</p>
          </Button>
          <Button start-icon="+" variant="text" color="secondary">
            <p>Secondary</p>
          </Button>
          <Button start-icon="+" variant="text" color="tertiary">
            <p>Tertiary</p>
          </Button>
          <Button start-icon="+" variant="text" color="error">
            <p>Error</p>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>