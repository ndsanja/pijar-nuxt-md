import { ButtonSpecs } from './buttonSpecsType';

type Color = 'primary' | 'secondary' | 'tertiary' | 'error' | undefined;

export const buttonSpecs = (startIcon: any, endIcon: any, color: Color) => {
  const buttonSpecs: ButtonSpecs = {
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
      ${
        color === 'primary' &&
        'bg-md-sys-color-primary-light dark:bg-md-sys-color-primary-dark'
      }      
      ${
        color === 'secondary' &&
        'bg-md-sys-color-secondary-light dark:bg-md-sys-color-secondary-dark'
      }      
      ${
        color === 'tertiary' &&
        'bg-md-sys-color-tertiary-light dark:bg-md-sys-color-tertiary-dark'
      }      
      ${
        color === 'error' &&
        'bg-md-sys-color-error-light dark:bg-md-sys-color-error-dark'
      }      
      bg-md-sys-color-primary-light dark:bg-md-sys-color-primary-dark
      `,
        elevation: '',
        shadowColor: '',
      },
      labelText: {
        color: `
      ${
        color === 'primary' &&
        'text-md-sys-color-on-primary-light dark:text-md-sys-color-on-primary-dark'
      }      
      ${
        color === 'secondary' &&
        'text-md-sys-color-on-secondary-light dark:text-md-sys-color-on-secondary-dark'
      }      
      ${
        color === 'tertiary' &&
        'text-md-sys-color-on-tertiary-light dark:text-md-sys-color-on-tertiary-dark'
      }      
      ${
        color === 'error' &&
        'text-md-sys-color-on-error-light dark:text-md-sys-color-on-error-dark'
      }      
      text-md-sys-color-on-primary-light dark:text-md-sys-color-on-primary-dark
      `,
        font: '',
        size: '',
        lineHeight: '',
        tracking: '',
        weight: '',
      },
      icon: {
        color: '',
      },
    },
  };

  return buttonSpecs;
};
