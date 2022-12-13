import { TextButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonTextSpecs = (props: ButtonPropsType) => {
  const { active, color, endIcon, loading, size, startIcon, variant } = props;

  let bgHoverColorSpecs = '';
  switch (color) {
    case 'primary':
      bgHoverColorSpecs = tw(
        `hover:after:absolute hover:after:bg-primary-light dark:hover:after:bg-primary-dark hover:after:opacity-state-hover`
      );
      break;
    case 'secondary':
      bgHoverColorSpecs = tw(
        `hover:after:absolute hover:after:bg-secondary-light dark:hover:after:bg-secondary-dark hover:after:opacity-state-hover`
      );
      break;
    case 'tertiary':
      bgHoverColorSpecs = tw(
        `hover:after:absolute hover:after:bg-tertiary-light dark:hover:after:bg-tertiary-dark hover:after:opacity-state-hover`
      );
      break;
    case 'error':
      bgHoverColorSpecs = tw(
        `hover:after:absolute hover:after:bg-error-light dark:hover:after:bg-error-dark hover:after:opacity-state-hover`
      );
      break;
    default:
      bgHoverColorSpecs = '';
      break;
  }

  let bgFocusColorSpecs = '';
  switch (color) {
    case 'primary':
      bgFocusColorSpecs = tw(
        `focus:after:absolute focus:after:bg-primary-light dark:focus:after:bg-primary-dark focus:after:opacity-state-focus`
      );
      break;
    case 'secondary':
      bgFocusColorSpecs = tw(
        `focus:after:absolute focus:after:bg-secondary-light dark:focus:after:bg-secondary-dark focus:after:opacity-state-focus`
      );
      break;
    case 'tertiary':
      bgFocusColorSpecs = tw(
        `focus:after:absolute focus:after:bg-tertiary-light dark:focus:after:bg-tertiary-dark focus:after:opacity-state-focus`
      );
      break;
    case 'error':
      bgFocusColorSpecs = tw(
        `focus:after:absolute focus:after:bg-error-light dark:focus:after:bg-error-dark focus:after:opacity-state-focus`
      );
      break;
    default:
      bgFocusColorSpecs = '';
      break;
  }

  let bgPressedColorSpecs = '';
  switch (color) {
    case 'primary':
      bgPressedColorSpecs = tw(
        `active:after:absolute active:after:bg-primary-light dark:active:after:bg-primary-dark active:after:opacity-20`
      );
      break;
    case 'secondary':
      bgPressedColorSpecs = tw(
        `active:after:absolute active:after:bg-secondary-light dark:active:after:bg-secondary-dark active:after:opacity-20`
      );
      break;
    case 'tertiary':
      bgPressedColorSpecs = tw(
        `active:after:absolute active:after:bg-tertiary-light dark:active:after:bg-tertiary-dark active:after:opacity-20`
      );
      break;
    case 'error':
      bgPressedColorSpecs = tw(
        `active:after:absolute active:after:bg-error-light dark:active:after:bg-error-dark active:after:opacity-20`
      );
      break;
    default:
      bgPressedColorSpecs = '';
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
      textColorSpecs = tw(`text-primary-light dark:text-primary-dark`);
      break;
    case 'secondary':
      textColorSpecs = tw(`text-secondary-light dark:text-secondary-dark`);
      break;
    case 'tertiary':
      textColorSpecs = tw(`text-tertiary-light dark:text-tertiary-dark`);
      break;
    case 'error':
      textColorSpecs = tw(`text-error-light dark:text-error-dark`);
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
  } else if (color === 'error' && active === true) {
    textColorActiveSpecs = tw(
      `text-on-error-container-light dark:text-on-error-container-dark`
    );
  } else {
    textColorActiveSpecs = '';
  }

  const specs: TextButtonSpecsType = {
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

    ${bgColorActiveSpecs}

    
    disabled:bg-on-surface-light/[.12]
    dark:disabled:bg-on-surface-dark/[.12]
    disabled:cursor-not-allowed

    after:inset-0

    ${bgHoverColorSpecs}
    ${bgFocusColorSpecs}
    ${bgPressedColorSpecs}
    `),

    labelText: tw(`
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large
  
    ${active ? textColorActiveSpecs : textColorSpecs}
  
    group-disabled/container:text-on-surface-light/[.38]
    dark:group-disabled/container:text-on-surface-dark/[.38]
    `),

    icon: tw(`
    text-lg
    ${active ? textColorActiveSpecs : textColorSpecs}
    group-disabled/container:text-on-surface-light/[.38]
    dark:group-disabled/container:text-on-surface-dark/[.38]
    `),
  };

  return specs;
};
