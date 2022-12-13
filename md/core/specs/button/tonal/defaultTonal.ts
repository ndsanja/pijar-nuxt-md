import { TonalButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonTonalSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;

  let bgColorSpecs = '';
  switch (color) {
    case 'primary':
      bgColorSpecs = tw(
        `bg-primary-container-light dark:bg-primary-container-dark`
      );
      break;
    case 'secondary':
      bgColorSpecs = tw(
        `!bg-secondary-container-light dark:!bg-secondary-container-dark`
      );
      break;
    case 'tertiary':
      bgColorSpecs = tw(
        `bg-tertiary-container-light dark:bg-tertiary-container-dark`
      );
      break;
    case 'error':
      bgColorSpecs = tw(
        `bg-error-container-light dark:bg-error-container-dark`
      );
      break;
    default:
      bgColorSpecs = '';
      break;
  }

  let bgColorActiveSpecs = '';
  if (color === 'primary' && active === true) {
    bgColorActiveSpecs = tw(
      `bg-primary-container-light dark:bg-primary-container-dark`
    );
  } else if (color === 'secondary' && active === true) {
    bgColorActiveSpecs = tw(
      `!bg-secondary-container-light dark:!bg-secondary-container-dark`
    );
  } else if (color === 'tertiary' && active === true) {
    bgColorActiveSpecs = tw(
      `bg-tertiary-container-light dark:bg-tertiary-container-dark`
    );
  } else if (color === 'error' && active === true) {
    bgColorActiveSpecs = tw(
      `bg-error-container-light dark:bg-error-container-dark`
    );
  } else {
    bgColorActiveSpecs = '';
  }

  let textColorSpecs = '';
  switch (color) {
    case 'primary':
      textColorSpecs = tw(
        `text-on-primary-container-light dark:text-on-primary-container-dark`
      );
      break;
    case 'secondary':
      textColorSpecs = tw(
        `!text-on-secondary-container-light dark:!text-on-secondary-container-dark`
      );
      break;
    case 'tertiary':
      textColorSpecs = tw(
        `text-on-tertiary-container-light dark:text-on-tertiary-container-dark`
      );
      break;
    case 'error':
      textColorSpecs = tw(
        `text-on-error-container-light dark:text-on-error-container-dark`
      );
      break;
    default:
      textColorSpecs = '';
      break;
  }

  let textColorActiveSpecs = '';
  if (color === 'primary' && active === true) {
    textColorActiveSpecs = tw(
      `text-on-primary-container-light dark:text-on-primary-container-dark`
    );
  } else if (color === 'secondary' && active === true) {
    textColorActiveSpecs = tw(
      `!text-on-secondary-container-light dark:!text-on-secondary-container-dark`
    );
  } else if (color === 'tertiary' && active === true) {
    textColorActiveSpecs = tw(
      `text-on-tertiary-container-light dark:text-on-tertiary-container-dark`
    );
  } else if (color === 'error' && active === true) {
    textColorActiveSpecs = tw(
      `text-on-error-container-light dark:text-on-error-container-dark`
    );
  } else {
    textColorActiveSpecs = '';
  }

  const specs: TonalButtonSpecsType = {
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

    shadow-elevation-0-light
    dark:shadow-elevation-0-dark
    shadow-shadow-light
    dark:shadow-shadow-dark

    bg-primary-light
    dark:bg-primary-dark
    ${active ? 'bg-primary-container-light dark:bg-primary-container-dark' : ''}

    ${active ? bgColorActiveSpecs : bgColorSpecs}

    after:inset-0

    ${
      loading
        ? 'bg-on-surface-light/[.12] dark:bg-on-surface-dark/[.12] shadow-elevation-0-light dark:shadow-elevation-0-dark cursor-not-allowed'
        : ''
    }

    disabled:bg-on-surface-light/[.12]
    dark:disabled:bg-on-surface-dark/[.12]
    disabled:shadow-elevation-0-light
    dark:disabled:shadow-elevation-0-dark
    disabled:cursor-not-allowed

    hover:after:absolute
    hover:after:bg-on-primary-container-light
    dark:hover:after:bg-on-primary-container-dark
    hover:after:opacity-state-hover
    hover:shadow-elevation-1-light
    dark:hover:shadow-elevation-1-dark

    focus:after:absolute
    focus:after:bg-on-primary-container-light
    dark:focus:after:bg-on-primary-container-dark
    focus:after:opacity-state-focus

    focus:shadow-elevation-0-light
    dark:focus:shadow-elevation-0-dark
    active:after:absolute
    active:after:bg-on-primary-container-light
    dark:active:after:bg-on-primary-container-dark
    active:after:opacity-20
    active:shadow-elevation-0-light
    dark:active:shadow-elevation-0-dark
    `),

    labelText: tw(`
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large
    text-on-primary-light
    dark:text-on-primary-dark

    ${
      active
        ? 'text-on-primary-container-light dark:text-on-primary-container-dark'
        : ''
    }

    ${active ? textColorActiveSpecs : textColorSpecs}

    ${
      loading
        ? 'text-on-surface-light/[.38] dark:text-on-surface-dark/[.38] shadow-elevation-0-light dark:shadow-elevation-0-dark cursor-not-allowed'
        : ''
    }
    group-disabled/container:text-on-surface-light/[.38]
    dark:group-disabled/container:text-on-surface-dark/[.38]
    `),

    icon: tw(`
    text-lg
    text-on-primary-light
    dark:text-on-primary-dark
    ${
      active
        ? 'text-on-primary-container-light dark:text-on-primary-container-dark'
        : ''
    }
      
    ${active ? textColorActiveSpecs : textColorSpecs}

    ${
      loading
        ? 'text-on-surface-light/[.38] shadow-shadow-elevation-0 cursor-not-allowed'
        : ''
    }
     group-disabled/container:text-on-surface-light/[.38]
     dark:group-disabled/container:text-on-surface-dark/[.38]
    `),
  };

  return specs;
};
