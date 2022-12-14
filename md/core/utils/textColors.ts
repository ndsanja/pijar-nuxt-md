type Color = 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface';

export const textColors = (color?: Color) => {
  let textMainSpecs = '';
  let textMainHoveredSpecs = '';
  let textMainFocusedSpecs = '';
  let textMainPressedSpecs = '';
  let textMainActiveSpecs = '';
  let textMainDisabledSpecs = '';
  let textMainLoadingSpecs = '';

  let textOnMainSpecs = '';
  let textOnMainHoveredSpecs = '';
  let textOnMainFocusedSpecs = '';
  let textOnMainPressedSpecs = '';
  let textOnMainActiveSpecs = '';
  let textOnMainDisabledSpecs = '';
  let textOnMainLoadingSpecs = '';

  let textContainerSpecs = '';
  let textContainerHoveredSpecs = '';
  let textContainerFocusedSpecs = '';
  let textContainerPressedSpecs = '';
  let textContainerActiveSpecs = '';
  let textContainerDisabledSpecs = '';
  let textContainerLoadingSpecs = '';

  let textOnContainerSpecs = '';
  let textOnContainerHoveredSpecs = '';
  let textOnContainerFocusedSpecs = '';
  let textOnContainerPressedSpecs = '';
  let textOnContainerActiveSpecs = '';
  let textOnContainerDisabledSpecs = '';
  let textOnContainerLoadingSpecs = '';

  switch (color) {
    case 'primary':
      textMainSpecs = 'text-primary-light dark:text-primary-dark';
      textMainHoveredSpecs =
        'hover:text-primary-light dark:hover:text-primary-dark';
      textMainFocusedSpecs =
        'focus:text-primary-light dark:focus:text-primary-dark';
      textMainPressedSpecs =
        'active:text-primary-light dark:active:text-primary-dark';
      textMainActiveSpecs = 'text-primary-light dark:text-primary-dark';
      textMainDisabledSpecs =
        'disabled:text-primary-light/[.12] dark:disabled:text-primary-dark/[.12]';
      textMainLoadingSpecs = 'text-primary-light dark:text-primary-dark';

      textOnMainSpecs = 'text-on-primary-light dark:text-on-primary-dark';
      textOnMainHoveredSpecs =
        'hover:text-on-primary-light dark:hover:text-on-primary-dark';
      textOnMainFocusedSpecs =
        'focus:text-on-primary-light dark:focus:text-on-primary-dark';
      textOnMainPressedSpecs =
        'active:text-on-primary-light dark:active:text-on-primary-dark';
      textOnMainActiveSpecs = 'text-on-primary-light dark:text-on-primary-dark';
      textOnMainDisabledSpecs =
        'disabled:text-on-primary-light/[.12] dark:disabled:text-on-primary-dark/[.12]';
      textOnMainLoadingSpecs =
        'text-on-primary-light dark:text-on-primary-dark';

      textContainerSpecs =
        'text-primary-container-light dark:text-primary-container-dark';
      textContainerHoveredSpecs =
        'hover:text-primary-container-light dark:hover:text-primary-container-dark';
      textContainerFocusedSpecs =
        'focus:text-primary-container-light dark:focus:text-primary-container-dark';
      textContainerPressedSpecs =
        'active:text-primary-container-light dark:active:text-primary-container-dark';
      textContainerActiveSpecs =
        'text-primary-container-light dark:text-primary-container-dark';
      textContainerDisabledSpecs =
        'disabled:text-primary-container-light/[.12] dark:disabled:text-primary-container-dark/[.12]';
      textContainerLoadingSpecs =
        'text-primary-container-light dark:text-primary-container-dark';

      textOnContainerSpecs =
        'text-on-primary-container-light dark:text-on-primary-container-dark';
      textOnContainerHoveredSpecs =
        'hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark';
      textOnContainerFocusedSpecs =
        'focus:text-on-primary-container-light dark:focus:text-on-primary-container-dark';
      textOnContainerPressedSpecs =
        'active:text-on-primary-container-light dark:active:text-on-primary-container-dark';
      textOnContainerActiveSpecs =
        'text-on-primary-container-light dark:text-on-primary-container-dark';
      textOnContainerDisabledSpecs =
        'disabled:text-on-primary-container-light/[.12] dark:disabled:text-on-primary-container-dark/[.12]';
      textOnContainerLoadingSpecs =
        'text-on-primary-container-light dark:text-on-primary-container-dark';
      break;

    case 'secondary':
      textMainSpecs = 'text-secondary-light dark:text-secondary-dark';
      textMainHoveredSpecs =
        'hover:text-secondary-light dark:hover:text-secondary-dark';
      textMainFocusedSpecs =
        'focus:text-secondary-light dark:focus:text-secondary-dark';
      textMainPressedSpecs =
        'active:text-secondary-light dark:active:text-secondary-dark';
      textMainActiveSpecs = 'text-secondary-light dark:text-secondary-dark';
      textMainDisabledSpecs =
        'disabled:text-secondary-light/[.12] dark:disabled:text-secondary-dark/[.12]';
      textMainLoadingSpecs = 'text-secondary-light dark:text-secondary-dark';

      textOnMainSpecs = 'text-on-secondary-light dark:text-on-secondary-dark';
      textOnMainHoveredSpecs =
        'hover:text-on-secondary-light dark:hover:text-on-secondary-dark';
      textOnMainFocusedSpecs =
        'focus:text-on-secondary-light dark:focus:text-on-secondary-dark';
      textOnMainPressedSpecs =
        'active:text-on-secondary-light dark:active:text-on-secondary-dark';
      textOnMainActiveSpecs =
        'text-on-secondary-light dark:text-on-secondary-dark';
      textOnMainDisabledSpecs =
        'disabled:text-on-secondary-light/[.12] dark:disabled:text-on-secondary-dark/[.12]';
      textOnMainLoadingSpecs =
        'text-on-secondary-light dark:text-on-secondary-dark';

      textContainerSpecs =
        'text-secondary-container-light dark:text-secondary-container-dark';
      textContainerHoveredSpecs =
        'hover:text-secondary-container-light dark:hover:text-secondary-container-dark';
      textContainerFocusedSpecs =
        'focus:text-secondary-container-light dark:focus:text-secondary-container-dark';
      textContainerPressedSpecs =
        'active:text-secondary-container-light dark:active:text-secondary-container-dark';
      textContainerActiveSpecs =
        'text-secondary-container-light dark:text-secondary-container-dark';
      textContainerDisabledSpecs =
        'disabled:text-secondary-container-light/[.12] dark:disabled:text-secondary-container-dark/[.12]';
      textContainerLoadingSpecs =
        'text-secondary-container-light dark:text-secondary-container-dark';

      textOnContainerSpecs =
        'text-on-secondary-container-light dark:text-on-secondary-container-dark';
      textOnContainerHoveredSpecs =
        'hover:text-on-secondary-container-light dark:hover:text-on-secondary-container-dark';
      textOnContainerFocusedSpecs =
        'focus:text-on-secondary-container-light dark:focus:text-on-secondary-container-dark';
      textOnContainerPressedSpecs =
        'active:text-on-secondary-container-light dark:active:text-on-secondary-container-dark';
      textOnContainerActiveSpecs =
        'text-on-secondary-container-light dark:text-on-secondary-container-dark';
      textOnContainerDisabledSpecs =
        'disabled:text-on-secondary-container-light/[.12] dark:disabled:text-on-secondary-container-dark/[.12]';
      textOnContainerLoadingSpecs =
        'text-on-secondary-container-light dark:text-on-secondary-container-dark';
      break;

    case 'tertiary':
      textMainSpecs = 'text-tertiary-light dark:text-tertiary-dark';
      textMainHoveredSpecs =
        'hover:text-tertiary-light dark:hover:text-tertiary-dark';
      textMainFocusedSpecs =
        'focus:text-tertiary-light dark:focus:text-tertiary-dark';
      textMainPressedSpecs =
        'active:text-tertiary-light dark:active:text-tertiary-dark';
      textMainActiveSpecs = 'text-tertiary-light dark:text-tertiary-dark';
      textMainDisabledSpecs =
        'disabled:text-tertiary-light/[.12] dark:disabled:text-tertiary-dark/[.12]';
      textMainLoadingSpecs = 'text-tertiary-light dark:text-tertiary-dark';

      textOnMainSpecs = 'text-on-tertiary-light dark:text-on-tertiary-dark';
      textOnMainHoveredSpecs =
        'hover:text-on-tertiary-light dark:hover:text-on-tertiary-dark';
      textOnMainFocusedSpecs =
        'focus:text-on-tertiary-light dark:focus:text-on-tertiary-dark';
      textOnMainPressedSpecs =
        'active:text-on-tertiary-light dark:active:text-on-tertiary-dark';
      textOnMainActiveSpecs =
        'text-on-tertiary-light dark:text-on-tertiary-dark';
      textOnMainDisabledSpecs =
        'disabled:text-on-tertiary-light/[.12] dark:disabled:text-on-tertiary-dark/[.12]';
      textOnMainLoadingSpecs =
        'text-on-tertiary-light dark:text-on-tertiary-dark';

      textContainerSpecs =
        'text-tertiary-container-light dark:text-tertiary-container-dark';
      textContainerHoveredSpecs =
        'hover:text-tertiary-container-light dark:hover:text-tertiary-container-dark';
      textContainerFocusedSpecs =
        'focus:text-tertiary-container-light dark:focus:text-tertiary-container-dark';
      textContainerPressedSpecs =
        'active:text-tertiary-container-light dark:active:text-tertiary-container-dark';
      textContainerActiveSpecs =
        'text-tertiary-container-light dark:text-tertiary-container-dark';
      textContainerDisabledSpecs =
        'disabled:text-tertiary-container-light/[.12] dark:disabled:text-tertiary-container-dark/[.12]';
      textContainerLoadingSpecs =
        'text-tertiary-container-light dark:text-tertiary-container-dark';

      textOnContainerSpecs =
        'text-on-tertiary-container-light dark:text-on-tertiary-container-dark';
      textOnContainerHoveredSpecs =
        'hover:text-on-tertiary-container-light dark:hover:text-on-tertiary-container-dark';
      textOnContainerFocusedSpecs =
        'focus:text-on-tertiary-container-light dark:focus:text-on-tertiary-container-dark';
      textOnContainerPressedSpecs =
        'active:text-on-tertiary-container-light dark:active:text-on-tertiary-container-dark';
      textOnContainerActiveSpecs =
        'text-on-tertiary-container-light dark:text-on-tertiary-container-dark';
      textOnContainerDisabledSpecs =
        'disabled:text-on-tertiary-container-light/[.12] dark:disabled:text-on-tertiary-container-dark/[.12]';
      textOnContainerLoadingSpecs =
        'text-on-tertiary-container-light dark:text-on-tertiary-container-dark';
      break;

    case 'error':
      textMainSpecs = 'text-error-light dark:text-error-dark';
      textMainHoveredSpecs =
        'hover:text-error-light dark:hover:text-error-dark';
      textMainFocusedSpecs =
        'focus:text-error-light dark:focus:text-error-dark';
      textMainPressedSpecs =
        'active:text-error-light dark:active:text-error-dark';
      textMainActiveSpecs = 'text-error-light dark:text-error-dark';
      textMainDisabledSpecs =
        'disabled:text-error-light/[.12] dark:disabled:text-error-dark/[.12]';
      textMainLoadingSpecs = 'text-error-light dark:text-error-dark';

      textOnMainSpecs = 'text-on-error-light dark:text-on-error-dark';
      textOnMainHoveredSpecs =
        'hover:text-on-error-light dark:hover:text-on-error-dark';
      textOnMainFocusedSpecs =
        'focus:text-on-error-light dark:focus:text-on-error-dark';
      textOnMainPressedSpecs =
        'active:text-on-error-light dark:active:text-on-error-dark';
      textOnMainActiveSpecs = 'text-on-error-light dark:text-on-error-dark';
      textOnMainDisabledSpecs =
        'disabled:text-on-error-light/[.12] dark:disabled:text-on-error-dark/[.12]';
      textOnMainLoadingSpecs = 'text-on-error-light dark:text-on-error-dark';

      textContainerSpecs =
        'text-error-container-light dark:text-error-container-dark';
      textContainerHoveredSpecs =
        'hover:text-error-container-light dark:hover:text-error-container-dark';
      textContainerFocusedSpecs =
        'focus:text-error-container-light dark:focus:text-error-container-dark';
      textContainerPressedSpecs =
        'active:text-error-container-light dark:active:text-error-container-dark';
      textContainerActiveSpecs =
        'text-error-container-light dark:text-error-container-dark';
      textContainerDisabledSpecs =
        'disabled:text-error-container-light/[.12] dark:disabled:text-error-container-dark/[.12]';
      textContainerLoadingSpecs =
        'text-error-container-light dark:text-error-container-dark';

      textOnContainerSpecs =
        'text-on-error-container-light dark:text-on-error-container-dark';
      textOnContainerHoveredSpecs =
        'hover:text-on-error-container-light dark:hover:text-on-error-container-dark';
      textOnContainerFocusedSpecs =
        'focus:text-on-error-container-light dark:focus:text-on-error-container-dark';
      textOnContainerPressedSpecs =
        'active:text-on-error-container-light dark:active:text-on-error-container-dark';
      textOnContainerActiveSpecs =
        'text-on-error-container-light dark:text-on-error-container-dark';
      textOnContainerDisabledSpecs =
        'disabled:text-on-error-container-light/[.12] dark:disabled:text-on-error-container-dark/[.12]';
      textOnContainerLoadingSpecs =
        'text-on-error-container-light dark:text-on-error-container-dark';
      break;

    case 'surface':
      textMainSpecs = 'text-surface-light dark:text-surface-dark';
      textMainHoveredSpecs =
        'hover:text-surface-light dark:hover:text-surface-dark';
      textMainFocusedSpecs =
        'focus:text-surface-light dark:focus:text-surface-dark';
      textMainPressedSpecs =
        'active:text-surface-light dark:active:text-surface-dark';
      textMainActiveSpecs = 'text-surface-light dark:text-surface-dark';
      textMainDisabledSpecs =
        'disabled:text-surface-light/[.12] dark:disabled:text-surface-dark/[.12]';
      textMainLoadingSpecs = 'text-surface-light dark:text-surface-dark';

      textOnMainSpecs = 'text-on-surface-light dark:text-on-surface-dark';
      textOnMainHoveredSpecs =
        'hover:text-on-surface-light dark:hover:text-on-surface-dark';
      textOnMainFocusedSpecs =
        'focus:text-on-surface-light dark:focus:text-on-surface-dark';
      textOnMainPressedSpecs =
        'active:text-on-surface-light dark:active:text-on-surface-dark';
      textOnMainActiveSpecs = 'text-on-surface-light dark:text-on-surface-dark';
      textOnMainDisabledSpecs =
        'disabled:text-on-surface-light/[.12] dark:disabled:text-on-surface-dark/[.12]';
      textOnMainLoadingSpecs =
        'text-on-surface-light dark:text-on-surface-dark';

      textContainerSpecs =
        'text-surface-variant-light dark:text-surface-variant-dark';
      textContainerHoveredSpecs =
        'hover:text-surface-variant-light dark:hover:text-surface-variant-dark';
      textContainerFocusedSpecs =
        'focus:text-surface-variant-light dark:focus:text-surface-variant-dark';
      textContainerPressedSpecs =
        'active:text-surface-variant-light dark:active:text-surface-variant-dark';
      textContainerActiveSpecs =
        'text-surface-variant-light dark:text-surface-variant-dark';
      textContainerDisabledSpecs =
        'disabled:text-surface-variant-light/[.12] dark:disabled:text-surface-variant-dark/[.12]';
      textContainerLoadingSpecs =
        'text-surface-variant-light dark:text-surface-variant-dark';

      textOnContainerSpecs =
        'text-on-surface-variant-light dark:text-on-surface-variant-dark';
      textOnContainerHoveredSpecs =
        'hover:text-on-surface-variant-light dark:hover:text-on-surface-variant-dark';
      textOnContainerFocusedSpecs =
        'focus:text-on-surface-variant-light dark:focus:text-on-surface-variant-dark';
      textOnContainerPressedSpecs =
        'active:text-on-surface-variant-light dark:active:text-on-surface-variant-dark';
      textOnContainerActiveSpecs =
        'text-on-surface-variant-light dark:text-on-surface-variant-dark';
      textOnContainerDisabledSpecs =
        'disabled:text-on-surface-variant-light/[.12] dark:disabled:text-on-surface-variant-dark/[.12]';
      textOnContainerLoadingSpecs =
        'text-on-surface-variant-light dark:text-on-surface-variant-dark';
      break;

    default:
      break;
  }

  return {
    textMainSpecs,
    textMainHoveredSpecs,
    textMainFocusedSpecs,
    textMainPressedSpecs,
    textMainActiveSpecs,
    textMainLoadingSpecs,
    textMainDisabledSpecs,

    textOnMainSpecs,
    textOnMainHoveredSpecs,
    textOnMainFocusedSpecs,
    textOnMainPressedSpecs,
    textOnMainActiveSpecs,
    textOnMainLoadingSpecs,
    textOnMainDisabledSpecs,

    textContainerSpecs,
    textContainerHoveredSpecs,
    textContainerFocusedSpecs,
    textContainerPressedSpecs,
    textContainerActiveSpecs,
    textContainerDisabledSpecs,
    textContainerLoadingSpecs,

    textOnContainerSpecs,
    textOnContainerHoveredSpecs,
    textOnContainerFocusedSpecs,
    textOnContainerPressedSpecs,
    textOnContainerActiveSpecs,
    textOnContainerDisabledSpecs,
    textOnContainerLoadingSpecs,
  };
};
