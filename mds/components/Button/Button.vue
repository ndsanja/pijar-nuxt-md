<script setup lang="ts">
import { buttonSpecs } from './specs';
import { defaultButtonSpecs } from './specs/default';
import { overrideButtonSpecs } from './specs/override';
import { ButtonSpecs } from './types/buttonSpecsType';

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  startIcon?: any
  endIcon?: any
  specs?: ButtonSpecs
}

const { variant, size, color, startIcon, endIcon, specs: propsButtonSpecs } = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  color: 'primary',
  size: 'medium'
})

const defaultSpecs = defaultButtonSpecs({ color, endIcon, size, startIcon, variant })
const overrideSpecs = overrideButtonSpecs({ color, endIcon, size, startIcon, variant })

const specs = buttonSpecs({
  default: defaultSpecs,
  override: overrideSpecs,
  props: propsButtonSpecs
})
</script>

<template>
  <button :class="tw(`
    inline-flex
    items-center
    justify-center
  ${specs.design?.container?.color}
  ${specs.design?.container?.elevation}
  ${specs.design?.container?.shadowColor}
  
  ${specs.design?.labelText?.color}
  ${specs.design?.labelText?.font}
  ${specs.design?.labelText?.lineHeight}
  ${specs.design?.labelText?.size}
  ${specs.design?.labelText?.tracking}
  ${specs.design?.labelText?.weight}
  
  ${specs.layout?.height}
  ${specs.layout?.paddingRightLeft}
  ${specs.layout?.paddingLeftWithIcon}
  ${specs.layout?.paddingRightWithIcon}
  ${specs.layout?.paddingBetweenElement}
  ${specs.layout?.shape}
  ${specs.layout?.labelTextAlignment}
 
  disabled:bg-on-surface-light/[.12]
  dark:disabled:bg-on-surface-dark/[.12]
  disabled:text-on-surface-light/[.38]
  dark:disabled:text-on-surface-dark/[.38]
  `)">
    <span v-if="startIcon" :class="tw(`
    ${specs.layout?.iconSize}
    ${specs.design?.icon?.color}
    `)">{{ startIcon }}</span>
    <slot />
    <span v-if="endIcon" :class="tw(`
    ${specs.layout?.iconSize}
    ${specs.design?.icon?.color}
    `)">{{ endIcon }}</span>
  </button>
</template>