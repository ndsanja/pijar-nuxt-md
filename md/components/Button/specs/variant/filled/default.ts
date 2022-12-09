import { FilledButtonSpecsType } from '../../../types/ButtonSpecsType';

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
};

export const defaultButtonFilledSpecs = (props: Props) => {
  const { color, endIcon, size, startIcon, variant } = props;
  const defaultButtonFilled: FilledButtonSpecsType = {
    container: tw(`
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
    ${
      color === 'primary'
        ? 'bg-primary-light dark:bg-primary-dark'
        : color === 'secondary'
        ? 'bg-secondary-light dark:bg-secondary-dark'
        : color === 'tertiary'
        ? 'bg-tertiary-light dark:bg-tertiary-dark'
        : color === 'error'
        ? 'bg-error-light dark:bg-error-dark'
        : 'bg-primary-light dark:bg-primary-dark'
    }
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
        : 'text-on-primary-light dark:text-on-primary-dark'
    }
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
        : 'text-on-primary-light dark:text-on-primary-dark'
    }
    `),
  };

  return defaultButtonFilled;
};
