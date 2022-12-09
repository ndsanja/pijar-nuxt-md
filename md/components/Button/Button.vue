<script setup lang="ts">
//Filled Button
import { buttonFilledSpecs } from '~~/md/components/Button/specs/variant/filled/index'
import { ButtonSpecsType } from '~~/md/components/Button/types/ButtonSpecsType'

//CreateTheme
import { createTheme } from '../../createTheme'

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  startIcon?: any
  endIcon?: any
  specs?: ButtonSpecsType
}

const { color, endIcon, size, startIcon, variant, specs: propsSpecs } = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  color: 'primary',
  size: 'medium'
})

const theme = createTheme()

const filled = buttonFilledSpecs({
  override: theme.components.button.variant.filled,
  props: propsSpecs?.variant?.filled
}, { color, endIcon, size, startIcon, variant })


</script>

<template>
  <button data-element="container" :class="tw(`
  ${variant === 'filled' ? filled.container : filled.container}
  `)">
    <span v-if="startIcon" data-element="icon" :class="tw(`
    ${variant === 'filled' ? filled.icon : filled.icon}
    `)">
      {{ startIcon }}
    </span>
    <span data-element="label-text" :class="tw(`
    ${variant === 'filled' ? filled.labelText : filled.labelText}
    `)">
      <slot />
    </span>
    <span v-if="endIcon" data-element="icon" :class="tw(`
    ${variant === 'filled' ? filled.icon : filled.icon}
    `)">
      {{ endIcon }}
    </span>
  </button>
</template>