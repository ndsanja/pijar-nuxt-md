<script setup lang="ts">
import { Button } from '~~/md';
</script>

<template>
  <div class="flex items-center justify-center space-x-4 py-10">
    <Button start-icon="+" variant="elevated">
      <p>Hello</p>
    </Button>
    <Button start-icon="+" variant="filled">
      <p>Hello</p>
    </Button>
    <Button start-icon="+">
      <p>Hello</p>
    </Button>
  </div>
</template>