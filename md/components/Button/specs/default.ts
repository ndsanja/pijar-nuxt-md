import { ButtonSpecs } from '../types/buttonSpecsType';

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
};

export const defaultButtonSpecs = (props: Props) => {
  const { color, endIcon, startIcon, size, variant } = props;
  const buttonSpecs: ButtonSpecs = {
    //LAYOUT
    layout: {
      height: 'h-10',
      paddingRightLeft: startIcon ? 'pr-6' : endIcon ? 'pl-6' : 'px-6',
      paddingLeftWithIcon: startIcon ? 'pl-4' : '',
      paddingRightWithIcon: endIcon ? 'pr-4' : '',
      paddingBetweenElement: 'space-x-2',
      shape: 'rounded-full',
      iconSize: 'text-lg',
      labelTextAlignment: 'text-center',
    },

    //DESIGN
    design: {
      container: {
        color:
          color === 'primary'
            ? 'bg-primary-light dark:bg-primary-dark'
            : color === 'secondary'
            ? 'bg-secondary-light dark:bg-secondary-dark'
            : color === 'tertiary'
            ? 'bg-tertiary-light dark:bg-tertiary-dark'
            : color === 'error'
            ? 'bg-error-light dark:bg-error-dark'
            : 'bg-primary-light dark:bg-primary-dark',
        elevation: 'shadow-elevation-0-light dark:shadow-elevation-0-light',
        shadowColor: 'shadow-shadow-light dark:shadow-shadow-light',
      },

      //LABEL TEXT
      labelText: {
        color:
          color === 'primary'
            ? 'text-on-primary-light dark:text-on-primary-dark'
            : color === 'secondary'
            ? 'text-on-secondary-light dark:text-on-secondary-dark'
            : color === 'tertiary'
            ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
            : color === 'error'
            ? 'text-on-error-light dark:text-on-error-dark'
            : 'text-on-primary-light dark:text-on-primary-dark',
        font: 'font-brand',
        size: 'text-label-large',
        lineHeight: 'leading-label-large',
        tracking: 'tracking-label-large',
        weight: 'font-label-large',
      },

      //ICON
      icon: {
        color:
          color === 'primary'
            ? 'text-on-primary-light dark:text-on-primary-dark'
            : color === 'secondary'
            ? 'text-on-secondary-light dark:text-on-secondary-dark'
            : color === 'tertiary'
            ? 'text-on-tertiary-light dark:text-on-tertiary-dark'
            : color === 'error'
            ? 'text-on-error-light dark:text-on-error-dark'
            : 'text-on-primary-light dark:text-on-primary-dark',
      },
    },
  };

  return buttonSpecs;
};
