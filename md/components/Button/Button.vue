<script setup lang="ts">
//Filled Button
import { ButtonSpecsType } from '~~/md/components/Button/types/index'
import { buttonFilledSpecs } from '~~/md/components/Button/specs/variant/filled/index'
import { buttonElevatedSpecs } from '~~/md/components/Button/specs/variant/elevated/index'

export type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
  active?: boolean;
  specs?: ButtonSpecsType;
};

const { color, endIcon, size, startIcon, variant, specs: propsSpecs, active } = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  color: 'primary',
  size: 'medium',
  active: true
})

const filled = buttonFilledSpecs({
  props: propsSpecs?.variant?.filled
}, { color, endIcon, size, startIcon, variant, active })

const elevated = buttonElevatedSpecs({
  props: propsSpecs?.variant?.elevated
}, { color, endIcon, size, startIcon, variant, active })


</script>

<template>
  <button data-element="container" :class="tw(`
  ${variant === 'filled'
    ? filled.container
    : variant === 'elevated'
      ? elevated.container
      : filled.container
  }
  `)">
    <span v-if="startIcon" data-element="icon" :class="tw(`
    ${variant === 'filled'
    ? filled.icon
    : variant === 'elevated'
      ? elevated.icon
      : filled.icon
  }
    `)">
      {{ startIcon }}
    </span>
    <span data-element="label-text" :class="tw(`
    ${variant === 'filled'
    ? filled.labelText
    : variant === 'elevated'
      ? elevated.labelText
      : filled.labelText
  }
    `)">
      <slot />
    </span>
    <span v-if="endIcon" data-element="icon" :class="tw(`
    ${variant === 'filled'
    ? filled.icon
    : variant === 'elevated'
      ? elevated.icon
      : filled.icon
  }
    `)">
      {{ endIcon }}
    </span>
  </button>
</template>