<script setup lang="ts">
import { ButtonSpecsType } from '~~/md/core/types/button';
import { buttonSpecs } from '~~/md/core';


export type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
  active?: boolean;
  loading?: boolean
  specs?: ButtonSpecsType;
};

const { color, endIcon, size, startIcon, variant, specs, active, loading } = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  color: 'primary',
  size: 'medium',
})

const specsButton = buttonSpecs({
  active, color, endIcon, loading, size, specs, startIcon, variant
})

console.log(specsButton);

</script>

<template>
  <button data-element="container" :class="tw(`${specsButton?.container}`)">
    <span v-if="startIcon" data-element="icon" :class="tw(`${specsButton?.icon}`)">
      {{ startIcon }}
    </span>
    <span data-element="label-text" :class="tw(`${specsButton?.labelText}`)">
      <slot />
    </span>
    <span v-if="endIcon" data-element="icon" :class="tw(`${specsButton?.icon}`)">
      {{ endIcon }}
    </span>
  </button>
</template>