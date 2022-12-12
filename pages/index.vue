<script setup lang="ts">
import { Button } from '~~/md/vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-4 py-10">
    <div class="flex items-center justify-center space-x-2">
      <Button start-icon="+" variant="elevated">
        <p>Hello</p>
      </Button>
    </div>
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
</template>