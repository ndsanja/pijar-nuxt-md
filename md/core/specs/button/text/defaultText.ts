import { TextButtonSpecsType, ButtonPropsType } from '../../../types/button';
import { bgColors } from '../../../utils/bgColors';
import { textColors } from '../../../utils/textColors';

export const defaultButtonTextSpecs = (props: ButtonPropsType) => {
  const { active, color, endIcon, loading, size, startIcon, variant } = props;

  const bgColor = bgColors(color);
  const textColor = textColors(color);

  let bgSpecs = '';
  let textSpecs = '';
  let stateSpecs = '';

  let bgActiveSpecs = '';
  let textActiveSpecs = '';
  let stateActiveSpecs = '';

  let bgHoveredSpecs = '';
  let textHoveredSpecs = '';
  let stateHoveredSpecs = '';

  let bgFocusedSpecs = '';
  let textFocusedSpecs = '';
  let stateFocusedSpecs = '';

  let bgPressedSpecs = '';
  let textPressedSpecs = '';
  let statePressedSpecs = '';

  let bgDisabledSpecs =
    'disabled:bg-on-surface-light/[.12] dark:disabled:bg-on-surface-dark/[.12]';
  let textDisabledSpecs =
    'group-disabled/container:text-on-surface-light/[.38] dark:group-disabled/container:text-on-surface-dark/[.38]';
  let stateDisabledSpecs = '';

  let bgLoadingSpecs =
    'disabled:bg-on-surface-light/[.12] dark:disabled:bg-on-surface-dark/[.12]';
  let textLoadingSpecs =
    'group-disabled/container:text-on-surface-light/[.38] dark:group-disabled/container:text-on-surface-dark/[.38]';
  let stateLoadingSpecs = '';

  switch (color) {
    case 'primary':
      bgSpecs = 'bg-primary-container-light dark:bg-primary-container-dark';
      textSpecs =
        'text-on-primary-container-light dark:text-on-primary-container-dark';
      stateSpecs = '';

      bgActiveSpecs = 'bg-primary-light dark:bg-primary-dark';
      textActiveSpecs = 'text-on-primary-light dark:text-on-primary-dark';
      stateActiveSpecs = '';

      bgHoveredSpecs =
        'hover:after:bg-on-primary-container-light dark:hover:after:bg-on-primary-container-dark';
      textHoveredSpecs = '';
      stateHoveredSpecs = '';

      bgFocusedSpecs =
        'focus:after:bg-on-primary-container-light dark:focus:after:bg-on-primary-container-dark';
      textFocusedSpecs = '';
      stateFocusedSpecs = '';

      bgPressedSpecs =
        'active:after:bg-on-primary-container-light dark:active:after:bg-on-primary-container-dark';
      textPressedSpecs = '';
      statePressedSpecs = '';

      break;
    case 'secondary':
      bgSpecs = 'bg-secondary-container-light dark:bg-secondary-container-dark';
      textSpecs =
        'text-on-secondary-container-light dark:text-on-secondary-container-dark';
      stateSpecs = '';

      bgActiveSpecs = 'bg-secondary-light dark:bg-secondary-dark';
      textActiveSpecs = 'text-on-secondary-light dark:text-on-secondary-dark';
      stateActiveSpecs = '';

      bgHoveredSpecs =
        'hover:after:!bg-on-secondary-container-light dark:hover:after:!bg-on-secondary-container-dark';
      textHoveredSpecs = '';
      stateHoveredSpecs = '';

      bgFocusedSpecs =
        'focus:after:!bg-on-secondary-container-light dark:focus:after:!bg-on-secondary-container-dark';
      textFocusedSpecs = '';
      stateFocusedSpecs = '';

      bgPressedSpecs =
        'active:after:!bg-on-secondary-container-light dark:active:after:!bg-on-secondary-container-dark';
      textPressedSpecs = '';
      statePressedSpecs = '';

      break;
    case 'tertiary':
      bgSpecs = 'bg-tertiary-container-light dark:bg-tertiary-container-dark';
      textSpecs =
        'text-on-tertiary-container-light dark:text-on-tertiary-container-dark';
      stateSpecs = '';

      bgActiveSpecs = 'bg-tertiary-light dark:bg-tertiary-dark';
      textActiveSpecs = 'text-on-tertiary-light dark:text-on-tertiary-dark';
      stateActiveSpecs = '';

      bgHoveredSpecs =
        'hover:after:!bg-on-tertiary-container-light dark:hover:after:!bg-on-tertiary-container-dark';
      textHoveredSpecs = '';
      stateHoveredSpecs = '';

      bgFocusedSpecs =
        'focus:after:!bg-on-tertiary-container-light dark:focus:after:!bg-on-tertiary-container-dark';
      textFocusedSpecs = '';
      stateFocusedSpecs = '';

      bgPressedSpecs =
        'active:after:!bg-on-tertiary-container-light dark:active:after:!bg-on-tertiary-container-dark';
      textPressedSpecs = '';
      statePressedSpecs = '';

      break;
    case 'error':
      bgSpecs = 'bg-error-container-light dark:bg-error-container-dark';
      textSpecs =
        'text-on-error-container-light dark:text-on-error-container-dark';
      stateSpecs = '';

      bgActiveSpecs = 'bg-error-light dark:bg-error-dark';
      textActiveSpecs = 'text-on-error-light dark:text-on-error-dark';
      stateActiveSpecs = '';

      bgHoveredSpecs =
        'hover:after:!bg-on-error-container-light dark:hover:after:!bg-on-error-container-dark';
      textHoveredSpecs = '';
      stateHoveredSpecs = '';

      bgFocusedSpecs =
        'focus:after:!bg-on-error-container-light dark:focus:after:!bg-on-error-container-dark';
      textFocusedSpecs = '';
      stateFocusedSpecs = '';

      bgPressedSpecs =
        'active:after:!bg-on-error-container-light dark:active:after:!bg-on-error-container-dark';
      textPressedSpecs = '';
      statePressedSpecs = '';

      break;

    default:
      bgSpecs = '';
      textSpecs = '';
      stateSpecs = '';

      bgActiveSpecs = '';
      textActiveSpecs = '';
      stateActiveSpecs = '';

      bgHoveredSpecs = '';
      textHoveredSpecs = '';
      stateHoveredSpecs = '';

      bgFocusedSpecs = '';
      textFocusedSpecs = '';
      stateFocusedSpecs = '';

      bgPressedSpecs = '';
      textPressedSpecs = '';
      statePressedSpecs = '';

      break;
  }

  let bgHoverColorSpecs = '';
  switch (color) {
    case 'primary':
      bgHoverColorSpecs = tw(
        `hover:after:bg-primary-light dark:hover:after:bg-primary-dark`
      );
      break;
    case 'secondary':
      bgHoverColorSpecs = tw(
        `hover:after:bg-secondary-light dark:hover:after:bg-secondary-dark`
      );
      break;
    case 'tertiary':
      bgHoverColorSpecs = tw(
        `hover:after:bg-tertiary-light dark:hover:after:bg-tertiary-dark`
      );
      break;
    case 'error':
      bgHoverColorSpecs = tw(
        `hover:after:bg-error-light dark:hover:after:bg-error-dark`
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
        `focus:after:bg-primary-light dark:focus:after:bg-primary-dark`
      );
      break;
    case 'secondary':
      bgFocusColorSpecs = tw(
        `focus:after:bg-secondary-light dark:focus:after:bg-secondary-dark`
      );
      break;
    case 'tertiary':
      bgFocusColorSpecs = tw(
        `focus:after:bg-tertiary-light dark:focus:after:bg-tertiary-dark`
      );
      break;
    case 'error':
      bgFocusColorSpecs = tw(
        `focus:after:bg-error-light dark:focus:after:bg-error-dark`
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
        `active:after:bg-primary-light dark:active:after:bg-primary-dark`
      );
      break;
    case 'secondary':
      bgPressedColorSpecs = tw(
        `active:after:bg-secondary-light dark:active:after:bg-secondary-dark`
      );
      break;
    case 'tertiary':
      bgPressedColorSpecs = tw(
        `active:after:bg-tertiary-light dark:active:after:bg-tertiary-dark`
      );
      break;
    case 'error':
      bgPressedColorSpecs = tw(
        `active:after:bg-error-light dark:active:after:bg-error-dark`
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
    
    ${loading ? bgColor.bgContainerLoadingSpecs : ''}
    ${active ? bgColor.bgContainerActiveSpecs : ''}
    ${bgColor.bgMainHoveredSpecs}
    ${bgColor.bgMainFocusedSpecs}
    ${bgColor.bgMainPressedSpecs}
    ${bgPressedColorSpecs}
    ${bgDisabledSpecs}
    
    disabled:cursor-not-allowed
    
    after:absolute
    hover:after:inset-0
    focus:after:inset-0
    active:after:inset-0

    hover:after:opacity-state-hover
    focus:after:opacity-state-focus
    active:after:opacity/20
    
    shadow-elevation-0-light dark:shadow-elevation-0-dark
    shadow-shadow-light/20 dark:shadow-shadow-dark/20
    `),

    labelText: tw(`
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large
  
    ${active ? textColor.textOnContainerActiveSpecs : textColor.textMainSpecs}
    ${loading ? textColor.textOnContainerLoadingSpecs : ''}
    ${textDisabledSpecs}
    `),

    icon: tw(`
    text-lg
    ${active ? textColor.textOnContainerActiveSpecs : textColor.textMainSpecs}
    ${loading ? textColor.textOnContainerLoadingSpecs : ''}
    ${textDisabledSpecs}
    `),
  };

  return specs;
};
