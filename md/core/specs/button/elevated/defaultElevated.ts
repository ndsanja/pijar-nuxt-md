import {
  ElevatedButtonSpecsType,
  ButtonPropsType,
} from '../../../types/button';

export const defaultButtonElevatedSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;
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
    after:absolute after:inset-0 after:bg-surface-tint-light dark:after:bg-surface-tint-dark after:opacity-5
    ${
      active
        ? 'bg-secondary-container-light dark:bg-secondary-container-dark after:inset-0'
        : ''
    }
    ${
      loading
        ? 'bg-on-surface-light/[.12] shadow-shadow-elevation-0 cursor-not-allowed'
        : ''
    }
    disabled:bg-on-surface-light/[.12]
    disabled:shadow-elevation-0-light disabled:dark:shadow-elevation-0-dark
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
      active
        ? 'text-on-secondary-container-light dark:text-on-secondary-container-dark'
        : ''
    }
    ${
      loading
        ? 'text-on-surface-light/[.38] shadow-shadow-elevation-0 cursor-not-allowed'
        : ''
    }
    group-disabled/container:text-on-surface-light/[.38]
    `),

    icon: tw(`
    text-lg
    text-primary-light dark:text-primary-dark
    ${
      active
        ? 'text-on-secondary-container-light dark:text-on-secondary-container-dark'
        : ''
    }
    ${
      loading
        ? 'text-on-surface-light/[.38] shadow-shadow-elevation-0 cursor-not-allowed'
        : ''
    }
    group-disabled/container:text-on-surface-light/[.38]
    `),
  };

  return defaultButtonElevated;
};
