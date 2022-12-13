import { FabPropsType, FabSpecsType } from '../../types/fab';

export const defaultFabSpecs = (props: FabPropsType) => {
  const { color, icon, size, active, loading } = props;

  let bgColorSpecs = '';
  switch (color) {
    case 'primary':
      bgColorSpecs = tw(
        `bg-primary-container-light dark:bg-primary-container-dark after:absolute after:bg-on-primary-light dark:after:bg-on-primary-dark after:opacity-5`
      );
      break;
    case 'secondary':
      bgColorSpecs = tw(
        `bg-secondary-container-light dark:bg-secondary-container-dark after:absolute after:bg-on-primary-light dark:after:bg-on-primary-dark after:opacity-5`
      );
      break;
    case 'tertiary':
      bgColorSpecs = tw(
        `bg-tertiary-container-light dark:bg-tertiary-container-dark after:absolute after:bg-on-primary-light dark:after:bg-on-primary-dark after:opacity-5`
      );
      break;
    case 'surface':
      bgColorSpecs = tw(
        `bg-surface-light dark:bg-surface-dark after:absolute after:bg-primary-light dark:after:bg-primary-dark after:opacity-5`
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
      `bg-secondary-container-light dark:bg-secondary-container-dark`
    );
  } else if (color === 'tertiary' && active === true) {
    bgColorActiveSpecs = tw(
      `bg-tertiary-container-light dark:bg-tertiary-container-dark`
    );
  } else if (color === 'surface' && active === true) {
    bgColorActiveSpecs = tw(`bg-surface-light dark:bg-surface-dark`);
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
        `text-on-secondary-container-light dark:text-on-secondary-container-dark`
      );
      break;
    case 'tertiary':
      textColorSpecs = tw(
        `text-on-tertiary-container-light dark:text-on-tertiary-container-dark`
      );
      break;
    case 'surface':
      textColorSpecs = tw(`text-primary-light dark:text-primary-dark`);
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
      `text-on-secondary-container-light dark:text-on-secondary-container-dark`
    );
  } else if (color === 'tertiary' && active === true) {
    textColorActiveSpecs = tw(
      `text-on-tertiary-container-light dark:text-on-tertiary-container-dark`
    );
  } else if (color === 'surface' && active === true) {
    textColorActiveSpecs = tw(
      `text-on-surface-container-light dark:text-on-surface-container-dark`
    );
  } else {
    textColorActiveSpecs = '';
  }

  const specs: FabSpecsType = {
    container: tw(`
    group/container

    relative
    overflow-hidden

    inline-flex
    items-center
    justify-center
    
    h-14
    w-14
    rounded-[16px]
    m-4
    
    ${size === 'small' ? 'h-10' : ''}
    ${size === 'medium' ? 'h-14' : ''}
    ${size === 'large' ? 'h-24' : ''}

    ${size === 'small' ? 'w-10' : ''}
    ${size === 'medium' ? 'w-14' : ''}
    ${size === 'large' ? 'w-24' : ''}
    
    ${size === 'small' ? 'rounded-[12px]' : ''}
    ${size === 'medium' ? 'rounded-[16px]' : ''}
    ${size === 'large' ? 'rounded-[28px]' : ''}

    ${size === 'small' ? '!m-4' : ''}
    ${size === 'medium' ? '!m-4' : ''}
    ${size === 'large' ? '!m-4' : ''}
    

    shadow-elevation-3-light
    dark:shadow-elevation-3-dark
    shadow-shadow-light/[.15]
    dark:shadow-shadow-dark/[.15]

    bg-surface-light
    dark:bg-surface-dark
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
    hover:shadow-elevation-4-light
    dark:hover:shadow-elevation-4-dark

    focus:after:absolute
    focus:after:bg-on-primary-container-light
    dark:focus:after:bg-on-primary-container-dark
    focus:shadow-elevation-3-light
    dark:focus:shadow-elevation-3-dark
    focus:after:opacity-state-focus

    active:after:absolute
    active:after:bg-on-primary-container-light
    dark:active:after:bg-on-primary-container-dark
    active:after:opacity-20
    active:shadow-elevation-3-light
    dark:active:shadow-elevation-3-dark
    `),

    //

    icon: tw(`
    text-xl
    ${size === 'small' ? 'text-2xl' : ''}
    ${size === 'medium' ? 'text-2xl' : ''}
    ${size === 'large' ? 'text-4xl' : ''}
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
