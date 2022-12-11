import { FilledButtonSpecsType, ButtonPropsType } from '../../../types';

export const defaultButtonFilledSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;

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
    ${active ? 'bg-primary-container-light dark:bg-primary-container-dark' : ''}

    ${color === 'primary' ? 'bg-primary-light dark:bg-primary-dark' : ''}
    ${
      color === 'primary' && active === true
        ? 'bg-primary-container-light dark:bg-primary-container-dark'
        : ''
    }
    ${color === 'secondary' ? 'bg-secondary-light dark:bg-secondary-dark' : ''}
    ${
      color === 'secondary' && active === true
        ? 'bg-secondary-container-light dark:bg-secondary-container-dark'
        : ''
    }
    ${color === 'tertiary' ? 'bg-tertiary-light dark:bg-tertiary-dark' : ''}
    ${
      color === 'tertiary' && active === true
        ? 'bg-tertiary-container-light dark:bg-tertiary-container-dark'
        : ''
    }
    ${color === 'error' ? 'bg-error-light dark:bg-error-dark' : ''}
    ${
      color === 'error' && active === true
        ? 'bg-error-container-light dark:bg-error-container-dark'
        : ''
    }
    
    after:inset-0
    ${
      loading
        ? 'bg-on-surface-light/[.12] shadow-shadow-elevation-0 cursor-not-allowed'
        : ''
    }
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
      active
        ? 'text-on-primary-container-light dark:text-on-primary-container-dark'
        : ''
    }
    
    ${
      color === 'primary'
        ? 'text-on-primary-light dark:text-on-primary-dark'
        : ''
    }
    ${
      color === 'primary' && active === true
        ? 'text-on-primary-container-light dark:text-on-primary-container-dark'
        : ''
    }
    ${
      color === 'secondary'
        ? 'text-on-secondary-light dark:text-on-secondary-dark'
        : ''
    }
    ${
      color === 'secondary' && active === true
        ? 'text-on-secondary-container-light dark:text-on-secondary-container-dark'
        : ''
    }
    ${
      color === 'tertiary'
        ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
        : ''
    }
    ${
      color === 'tertiary' && active === true
        ? 'text-on-tertiary-container-light dark:text-on-tertiary-container-dark'
        : ''
    }
    ${color === 'error' ? 'text-on-error-light dark:text-on-error-dark' : ''}
    ${
      color === 'error' && active === true
        ? 'text-on-error-container-light dark:text-on-error-container-dark'
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
    text-on-primary-light dark:text-on-primary-dark
    ${
      active
        ? 'text-on-primary-container-light dark:text-on-primary-container-dark'
        : ''
    }
    
    ${
      color === 'primary'
        ? 'text-on-primary-light dark:text-on-primary-dark'
        : ''
    }
    ${
      color === 'primary' && active === true
        ? 'text-on-primary-container-light dark:text-on-primary-container-dark'
        : ''
    }
    ${
      color === 'secondary'
        ? 'text-on-secondary-light dark:text-on-secondary-dark'
        : ''
    }
    ${
      color === 'secondary' && active === true
        ? 'text-on-secondary-container-light dark:text-on-secondary-container-dark'
        : ''
    }
    ${
      color === 'tertiary'
        ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
        : ''
    }
    ${
      color === 'tertiary' && active === true
        ? 'text-on-tertiary-container-light dark:text-on-tertiary-container-dark'
        : ''
    }
    ${color === 'error' ? 'text-on-error-light dark:text-on-error-dark' : ''}
    ${
      color === 'error' && active === true
        ? 'text-on-error-container-light dark:text-on-error-container-dark'
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

  return defaultButtonFilled;
};
