<script setup lang="ts">
import { FabSpecsType } from '~~/md/core/types/fab';
import { fabSpecs } from '~~/md/core';


export type Props = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'surface';
  icon?: any
  active?: boolean;
  loading?: boolean
  specs?: FabSpecsType;
};

const { color, size, icon, specs, active, loading } = withDefaults(defineProps<Props>(), {
  color: 'surface',
  size: 'medium',
})

const specsFab = fabSpecs({
  active, color, loading, size, specs, icon
})

</script>

<template>
  <button data-element="container" :class="tw(`${specsFab?.container}`)">
    <span data-element="icon" :class="tw(`${specsFab?.icon}`)">
      <slot />
    </span>
  </button>
</template>