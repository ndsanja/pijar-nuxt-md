import { ElevatedButtonSpecsType, ButtonPropsType } from '../../../types';

export const defaultButtonElevatedSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active } = props;
  const defaultButtonElevated: ElevatedButtonSpecsType = {
    container: tw(`
    group/container
    relative
    overflow-hidden
    inline-flex
    items-center
    justify-center
    h-10
    ${startIcon ? 'pr-6' : endIcon ? 'pl-6' : 'px-6'}
    ${startIcon ? 'pl-4' : ''}
    ${endIcon ? 'pr-4' : ''}
    space-x-2
    rounded-full
    shadow-elevation-1-light dark:shadow-elevation-1-dark
    shadow-shadow-light/[.20] dark:shadow-shadow-dark/[.20]
    bg-surface-light dark:bg-surface-dark
    ${
      color === 'primary'
        ? 'bg-primary-light dark:bg-primary-dark'
        : color === 'secondary'
        ? 'bg-secondary-light dark:bg-secondary-dark'
        : color === 'tertiary'
        ? 'bg-tertiary-light dark:bg-tertiary-dark'
        : color === 'error'
        ? 'bg-error-light dark:bg-error-dark'
        : ''
    }
    after:absolute after:inset-0 after:bg-surface-tint-light dark:after:bg-surface-tint-dark after:opacity-5
    disabled:bg-on-surface-light/[.12]
    disabled:shadow-shadow-elevation-0
    disabled:cursor-not-allowed
    hover:after:opacity-state-hover
    hover:shadow-elevation-2-light dark:hover:shadow-elevation-2-dark
    focus:after:opacity-state-focus
    focus:shadow-elevation-1-light dark:focus:shadow-elevation-1-dark
    active:after:opacity-20
    active:shadow-elevation-1-light dark:active:shadow-elevation-1-dark
    `),

    labelText: tw(`
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large
    text-primary-light dark:text-primary-dark
    ${
      color === 'primary'
        ? 'text-on-primary-light dark:text-on-primary-dark'
        : color === 'secondary'
        ? 'text-on-secondary-light dark:text-on-secondary-dark'
        : color === 'tertiary'
        ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
        : color === 'error'
        ? 'text-on-error-light dark:text-on-error-dark'
        : ''
    }
    group-disabled/container:text-on-surface-light/[.38]
    `),

    icon: tw(`
    text-lg
    text-primary-light dark:text-primary-dark
    ${
      color === 'primary'
        ? 'text-on-primary-light dark:text-on-primary-dark'
        : color === 'secondary'
        ? 'text-on-secondary-light dark:text-on-secondary-dark'
        : color === 'tertiary'
        ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
        : color === 'error'
        ? 'text-on-error-light dark:text-on-error-dark'
        : ''
    }
    group-disabled/container:text-on-surface-light/[.38]
    `),
  };

  return defaultButtonElevated;
};
