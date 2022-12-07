<script setup lang="ts">

import { ButtonSpecs } from '~/md/components/Button/specs'

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


const specs: ButtonSpecs = {
  layout: {
    height: 'h-10',
    paddingLeft: startIcon ? '' : 'pl-6',
    paddingLeftWithIcon: startIcon ? 'pl-4' : '',
    paddingRight: endIcon ? '' : 'pr-6',
    paddingRightWithIcon: endIcon ? 'pr-4' : '',
    paddingBetweenElement: 'space-x-2',
    shape: 'rounded-full',
    iconSize: 'text-lg',
    labelTextAlignment: 'text-center',
  },
  design: {
    container: {
      color: `
      ${color === 'primary' && "bg-md-sys-color-primary-light dark:bg-md-sys-color-primary-dark"}      
      ${color === 'secondary' && "bg-md-sys-color-secondary-light dark:bg-md-sys-color-secondary-dark"}      
      ${color === 'tertiary' && "bg-md-sys-color-tertiary-light dark:bg-md-sys-color-tertiary-dark"}      
      ${color === 'error' && "bg-md-sys-color-error-light dark:bg-md-sys-color-error-dark"}      
      bg-md-sys-color-primary-light dark:bg-md-sys-color-primary-dark
      `,
      elevation: '',
      shadowColor: ''
    },
    labelText: {
      color: `
      ${color === 'primary' && "text-md-sys-color-on-primary-light dark:text-md-sys-color-on-primary-dark"}      
      ${color === 'secondary' && "text-md-sys-color-on-secondary-light dark:text-md-sys-color-on-secondary-dark"}      
      ${color === 'tertiary' && "text-md-sys-color-on-tertiary-light dark:text-md-sys-color-on-tertiary-dark"}      
      ${color === 'error' && "text-md-sys-color-on-error-light dark:text-md-sys-color-on-error-dark"}      
      text-md-sys-color-on-primary-light dark:text-md-sys-color-on-primary-dark
      `,
      font: '',
      size: '',
      lineHeight: '',
      tracking: '',
      weight: '',
    },
    icon: {
      color: ''
    }
  }


}
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
${specs.design?.icon?.color}

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
${specsProps?.design?.icon?.color}

${specsProps?.layout?.height}
${specsProps?.layout?.paddingLeft}
${specsProps?.layout?.paddingRight}
${specsProps?.layout?.paddingLeftWithIcon}
${specsProps?.layout?.paddingRightWithIcon}
${specsProps?.layout?.paddingBetweenElement}
${specsProps?.layout?.shape}
${specsProps?.layout?.labelTextAlignment}
  
  disabled:bg-md-sys-color-on-surface-light/[.12]
  dark:disabled:bg-md-sys-color-on-surface-dark/[.12]
  disabled:text-md-sys-color-on-surface-light/[.38]
  dark:disabled:text-md-sys-color-on-surface-dark/[.38]
  `)">
    <span v-if="startIcon" :class="tw(`${specs.layout?.iconSize} ${specsProps?.layout?.iconSize}`)">{{ startIcon
    }}</span>
    <slot />
    <span v-if="endIcon" :class="tw(`${specs.layout?.iconSize} ${specsProps?.layout?.iconSize}`)">{{ endIcon }}</span>
  </button>
</template>