<script setup lang="ts">
import { ButtonSpecs } from '~~/md/components/Button/buttonSpecsType'
import { buttonSpecs } from '~~/md/components/Button/buttonSpecs'

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  startIcon?: any
  endIcon?: any
  specs?: ButtonSpecs
}

const { variant, size, color, startIcon, endIcon, specs: specsProps } = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  color: 'primary',
  size: 'medium'
})

const specs = buttonSpecs(startIcon, endIcon, color)
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
  ${specs.layout?.paddingLeft}
  ${specs.layout?.paddingRight}
  ${specs.layout?.paddingLeftWithIcon}
  ${specs.layout?.paddingRightWithIcon}
  ${specs.layout?.paddingBetweenElement}
  ${specs.layout?.shape}
  ${specs.layout?.labelTextAlignment}
  
  ${specsProps?.design?.container?.color}
  ${specsProps?.design?.container?.elevation}
  ${specsProps?.design?.container?.shadowColor}
  
  ${specsProps?.design?.labelText?.color}
  ${specsProps?.design?.labelText?.font}
  ${specsProps?.design?.labelText?.lineHeight}
  ${specsProps?.design?.labelText?.size}
  ${specsProps?.design?.labelText?.tracking}
  ${specsProps?.design?.labelText?.weight}
  
  ${specsProps?.layout?.height}
  ${specsProps?.layout?.paddingLeft}
  ${specsProps?.layout?.paddingRight}
  ${specsProps?.layout?.paddingLeftWithIcon}
  ${specsProps?.layout?.paddingRightWithIcon}
  ${specsProps?.layout?.paddingBetweenElement}
  ${specsProps?.layout?.shape}
  ${specsProps?.layout?.labelTextAlignment}
  
  disabled:bg-on-surface-light/[.12]
  dark:disabled:bg-on-surface-dark/[.12]
  disabled:text-on-surface-light/[.38]
  dark:disabled:text-on-surface-dark/[.38]
  `)">
    <span v-if="startIcon" :class="tw(`
    ${specs.layout?.iconSize}
    ${specsProps?.layout?.iconSize}
    ${specs.design?.icon?.color}
    ${specsProps?.design?.icon?.color}
    `)">{{ startIcon }}</span>
    <slot />
    <span v-if="endIcon" :class="tw(`
    ${specs.layout?.iconSize}
    ${specsProps?.layout?.iconSize}
    ${specs.design?.icon?.color}
    ${specsProps?.design?.icon?.color}
    `)">{{ endIcon }}</span>
  </button>
</template>