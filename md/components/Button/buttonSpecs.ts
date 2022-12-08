import { ButtonSpecs } from './buttonSpecsType';

type Color = 'primary' | 'secondary' | 'tertiary' | 'error' | undefined;

export const buttonSpecs = (startIcon: any, endIcon: any, color: Color) => {
  const buttonSpecs: ButtonSpecs = {
    //LAYOUT
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

    //DESIGN
    design: {
      container: {
        color: `
      ${color === 'primary' && 'bg-primary-light dark:bg-primary-dark'}      
      ${
        color === 'secondary' && 'bg-secondary-light dark:bg-secondary-dark'
      }      
      ${color === 'tertiary' && 'bg-tertiary-light dark:bg-tertiary-dark'}      
      ${color === 'error' && 'bg-error-light dark:bg-error-dark'}      
      bg-primary-light dark:bg-primary-dark
      `,
        elevation: '',
        shadowColor: 'shadow-shadow-light dark:shadow-shadow-light',
      },

      //LABEL TEXT
      labelText: {
        color: `
      ${
        color === 'primary' && 'text-on-primary-light dark:text-on-primary-dark'
      }      
      ${
        color === 'secondary' &&
        'text-on-secondary-light dark:text-on-secondary-dark'
      }      
      ${
        color === 'tertiary' &&
        'text-on-tertiary-light dark:text-on-tertiary-dark'
      }      
      ${
        color === 'error' && 'text-on-error-light dark:text-on-error-dark'
      }      
      text-on-primary-light dark:text-on-primary-dark
      `,
        font: 'font-brand',
        size: 'text-label-large',
        lineHeight: 'leading-label-large',
        tracking: 'tracking-label-large',
        weight: 'font-label-large',
      },

      //ICON
      icon: {
        color: `
      ${
        color === 'primary' && 'text-on-primary-light dark:text-on-primary-dark'
      }      
      ${
        color === 'secondary' &&
        'text-on-secondary-light dark:text-on-secondary-dark'
      }      
      ${
        color === 'tertiary' &&
        'text-on-tertiary-light dark:text-on-tertiary-dark'
      }      
      ${
        color === 'error' && 'text-on-error-light dark:text-on-error-dark'
      }      
      text-on-primary-light dark:text-on-primary-dark
      `,
      },
    },
  };

  return buttonSpecs;
};
