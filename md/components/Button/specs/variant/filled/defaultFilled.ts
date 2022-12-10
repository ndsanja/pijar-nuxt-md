import { FilledButtonSpecsType, ButtonPropsType } from '../../../types';

export const defaultButtonFilledSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active } = props;
  const defaultButtonFilled: FilledButtonSpecsType = {
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
    shadow-elevation-0-light dark:shadow-elevation-0-light
    shadow-shadow-light dark:shadow-shadow-light
    bg-primary-light dark:bg-primary-dark  
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
    after:inset-0
    disabled:bg-on-surface-light/[.12]
    disabled:shadow-shadow-elevation-0
    disabled:cursor-not-allowed
    hover:after:absolute hover:after:bg-on-primary-light dark:hover:after:bg-on-primary-dark hover:after:opacity-state-hover
    hover:shadow-elevation-1-light dark:hover:shadow-elevation-1-dark
    focus:after:absolute focus:after:bg-on-primary-light dark:focus:after:bg-on-primary-dark focus:after:opacity-state-focus
    focus:shadow-elevation-0-light dark:focus:shadow-elevation-0-dark
    active:after:absolute active:after:bg-on-primary-light dark:active:after:bg-on-primary-dark active:after:opacity-20
    active:shadow-elevation-0-light dark:active:shadow-elevation-0-dark
    `),

    labelText: tw(`
    group/container
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large
    text-on-primary-light dark:text-on-primary-dark
    
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
    text-on-primary-light dark:text-on-primary-dark
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

  return defaultButtonFilled;
};
