<script setup lang="ts">
type Props = {
  startIcon?: any
  color?: string
}
const props = defineProps<Props>()

</script>
<template>
  <button :class="tw(`
  inline-flex
  items-center
  justify-center
  space-x-2
  rounded-full
  px-4
  h-10
  bg-md-sys-color-primary-light
  ${props.color}
  `)">
    <span data-design="color" data-element="icon" :class="tw(`
    ${props.color}
    `)">{{ startIcon }}</span>
    <slot />
  </button>
</template>