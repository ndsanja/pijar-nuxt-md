import { ElevatedButtonSpecsType } from '../../../types/ButtonSpecsType';

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
};

export const defaultButtonElevatedSpecs = (props: Props) => {
  const { color, endIcon, size, startIcon, variant } = props;
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
    ${
      color === 'primary'
        ? 'bg-primary-light dark:bg-primary-dark'
        : color === 'secondary'
        ? 'bg-secondary-light dark:bg-secondary-dark'
        : color === 'tertiary'
        ? 'bg-tertiary-light dark:bg-tertiary-dark'
        : color === 'error'
        ? 'bg-error-light dark:bg-error-dark'
        : 'bg-surface-light dark:bg-surface-dark'
    }
    bg-surface-light dark:bg-surface-dark
    after:absolute after:inset-0 after:bg-surface-tint-light dark:after:bg-surface-tint-dark after:opacity-5
    disabled:bg-on-surface-light/[.12]
    disabled:shadow-shadow-elevation-0
    disabled:cursor-not-allowed
    hover:after:opacity-[.08]
    hover:shadow-elevation-2-light dark:hover:shadow-elevation-2-dark
    focus:after:opacity-[.12]
    focus:shadow-elevation-1-light dark:focus:shadow-elevation-1-dark
    active:bg-secondary-container-light dark:active:bg-secondary-container-dark
    active:shadow-elevation-1-light dark:active:shadow-elevation-1-dark
    `),

    labelText: tw(`
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large
    ${
      color === 'primary'
        ? 'text-on-primary-light dark:text-on-primary-dark'
        : color === 'secondary'
        ? 'text-on-secondary-light dark:text-on-secondary-dark'
        : color === 'tertiary'
        ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
        : color === 'error'
        ? 'text-on-error-light dark:text-on-error-dark'
        : 'text-primary-light dark:text-primary-dark'
    }
    text-primary-light dark:text-primary-dark
    group-disabled/container:text-on-surface-light/[.38]
    group-active/container:text-on-secondary-container-light dark:group-active/container:text-on-secondary-container-dark
    `),

    icon: tw(`
    text-lg
    ${
      color === 'primary'
        ? 'text-on-primary-light dark:text-on-primary-dark'
        : color === 'secondary'
        ? 'text-on-secondary-light dark:text-on-secondary-dark'
        : color === 'tertiary'
        ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
        : color === 'error'
        ? 'text-on-error-light dark:text-on-error-dark'
        : 'text-primary-light dark:text-primary-dark'
    }
    text-primary-light dark:text-primary-dark
    group-disabled/container:text-on-surface-light/[.38]
    group-active/container:text-on-secondary-container-light dark:group-active/container:text-on-secondary-container-dark
    `),
  };

  return defaultButtonElevated;
};
