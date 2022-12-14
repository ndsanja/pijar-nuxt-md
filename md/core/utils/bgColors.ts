type Color = 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface';

export const bgColors = (color?: Color) => {
  let bgMainSpecs = '';
  let bgMainHoveredSpecs = '';
  let bgMainFocusedSpecs = '';
  let bgMainPressedSpecs = '';
  let bgMainActiveSpecs = '';
  let bgMainDisabledSpecs = '';
  let bgMainLoadingSpecs = '';

  let bgOnMainSpecs = '';
  let bgOnMainHoveredSpecs = '';
  let bgOnMainFocusedSpecs = '';
  let bgOnMainPressedSpecs = '';
  let bgOnMainActiveSpecs = '';
  let bgOnMainDisabledSpecs = '';
  let bgOnMainLoadingSpecs = '';

  let bgContainerSpecs = '';
  let bgContainerHoveredSpecs = '';
  let bgContainerFocusedSpecs = '';
  let bgContainerPressedSpecs = '';
  let bgContainerActiveSpecs = '';
  let bgContainerDisabledSpecs = '';
  let bgContainerLoadingSpecs = '';

  let bgOnContainerSpecs = '';
  let bgOnContainerHoveredSpecs = '';
  let bgOnContainerFocusedSpecs = '';
  let bgOnContainerPressedSpecs = '';
  let bgOnContainerActiveSpecs = '';
  let bgOnContainerDisabledSpecs = '';
  let bgOnContainerLoadingSpecs = '';

  switch (color) {
    case 'primary':
      bgMainSpecs = 'bg-primary-light dark:bg-primary-dark';
      bgMainHoveredSpecs =
        'hover:after:bg-primary-light dark:hover:after:bg-primary-dark';
      bgMainFocusedSpecs =
        'focus:after:bg-primary-light dark:focus:after:bg-primary-dark';
      bgMainPressedSpecs =
        'active:after:bg-primary-light dark:active:after:bg-primary-dark';
      bgMainActiveSpecs = 'bg-primary-light dark:bg-primary-dark';
      bgMainDisabledSpecs =
        'disabled:bg-primary-light/[.12] dark:disabled:bg-primary-dark/[.12]';
      bgMainLoadingSpecs = 'bg-primary-light dark:bg-primary-dark';

      bgOnMainSpecs = 'bg-on-primary-light dark:bg-on-primary-dark';
      bgOnMainHoveredSpecs =
        'hover:after:bg-on-primary-light dark:hover:after:bg-on-primary-dark';
      bgOnMainFocusedSpecs =
        'focus:after:bg-on-primary-light dark:focus:after:bg-on-primary-dark';
      bgOnMainPressedSpecs =
        'active:after:bg-on-primary-light dark:active:after:bg-on-primary-dark';
      bgOnMainActiveSpecs = 'bg-on-primary-light dark:bg-on-primary-dark';
      bgOnMainDisabledSpecs =
        'disabled:bg-on-primary-light/[.12] dark:disabled:bg-on-primary-dark/[.12]';
      bgOnMainLoadingSpecs = 'bg-on-primary-light dark:bg-on-primary-dark';

      bgContainerSpecs =
        'bg-primary-container-light dark:bg-primary-container-dark';
      bgContainerHoveredSpecs =
        'hover:after:bg-primary-container-light dark:hover:after:bg-primary-container-dark';
      bgContainerFocusedSpecs =
        'focus:after:bg-primary-container-light dark:focus:after:bg-primary-container-dark';
      bgContainerPressedSpecs =
        'active:after:bg-primary-container-light dark:active:after:bg-primary-container-dark';
      bgContainerActiveSpecs =
        'bg-primary-container-light dark:bg-primary-container-dark';
      bgContainerDisabledSpecs =
        'disabled:bg-primary-container-light/[.12] dark:disabled:bg-primary-container-dark/[.12]';
      bgContainerLoadingSpecs =
        'bg-primary-container-light dark:bg-primary-container-dark';

      bgOnContainerSpecs =
        'bg-on-primary-container-light dark:bg-on-primary-container-dark';
      bgOnContainerHoveredSpecs =
        'hover:after:bg-on-primary-container-light dark:hover:after:bg-on-primary-container-dark';
      bgOnContainerFocusedSpecs =
        'focus:after:bg-on-primary-container-light dark:focus:after:bg-on-primary-container-dark';
      bgOnContainerPressedSpecs =
        'active:after:bg-on-primary-container-light dark:active:after:bg-on-primary-container-dark';
      bgOnContainerActiveSpecs =
        'bg-on-primary-container-light dark:bg-on-primary-container-dark';
      bgOnContainerDisabledSpecs =
        'disabled:bg-on-primary-container-light/[.12] dark:disabled:bg-on-primary-container-dark/[.12]';
      bgOnContainerLoadingSpecs =
        'bg-on-primary-container-light dark:bg-on-primary-container-dark';
      break;

    case 'secondary':
      bgMainSpecs = 'bg-secondary-light dark:bg-secondary-dark';
      bgMainHoveredSpecs =
        'hover:after:bg-secondary-light dark:hover:after:bg-secondary-dark';
      bgMainFocusedSpecs =
        'focus:after:bg-secondary-light dark:focus:after:bg-secondary-dark';
      bgMainPressedSpecs =
        'active:after:bg-secondary-light dark:active:after:bg-secondary-dark';
      bgMainActiveSpecs = 'bg-secondary-light dark:bg-secondary-dark';
      bgMainDisabledSpecs =
        'disabled:bg-secondary-light/[.12] dark:disabled:bg-secondary-dark/[.12]';
      bgMainLoadingSpecs = 'bg-secondary-light dark:bg-secondary-dark';

      bgOnMainSpecs = 'bg-on-secondary-light dark:bg-on-secondary-dark';
      bgOnMainHoveredSpecs =
        'hover:after:bg-on-secondary-light dark:hover:after:bg-on-secondary-dark';
      bgOnMainFocusedSpecs =
        'focus:after:bg-on-secondary-light dark:focus:after:bg-on-secondary-dark';
      bgOnMainPressedSpecs =
        'active:after:bg-on-secondary-light dark:active:after:bg-on-secondary-dark';
      bgOnMainActiveSpecs = 'bg-on-secondary-light dark:bg-on-secondary-dark';
      bgOnMainDisabledSpecs =
        'disabled:bg-on-secondary-light/[.12] dark:disabled:bg-on-secondary-dark/[.12]';
      bgOnMainLoadingSpecs = 'bg-on-secondary-light dark:bg-on-secondary-dark';

      bgContainerSpecs =
        'bg-secondary-container-light dark:bg-secondary-container-dark';
      bgContainerHoveredSpecs =
        'hover:after:bg-secondary-container-light dark:hover:after:bg-secondary-container-dark';
      bgContainerFocusedSpecs =
        'focus:after:bg-secondary-container-light dark:focus:after:bg-secondary-container-dark';
      bgContainerPressedSpecs =
        'active:after:bg-secondary-container-light dark:active:after:bg-secondary-container-dark';
      bgContainerActiveSpecs =
        'bg-secondary-container-light dark:bg-secondary-container-dark';
      bgContainerDisabledSpecs =
        'disabled:bg-secondary-container-light/[.12] dark:disabled:bg-secondary-container-dark/[.12]';
      bgContainerLoadingSpecs =
        'bg-secondary-container-light dark:bg-secondary-container-dark';

      bgOnContainerSpecs =
        'bg-on-secondary-container-light dark:bg-on-secondary-container-dark';
      bgOnContainerHoveredSpecs =
        'hover:after:bg-on-secondary-container-light dark:hover:after:bg-on-secondary-container-dark';
      bgOnContainerFocusedSpecs =
        'focus:after:bg-on-secondary-container-light dark:focus:after:bg-on-secondary-container-dark';
      bgOnContainerPressedSpecs =
        'active:after:bg-on-secondary-container-light dark:active:after:bg-on-secondary-container-dark';
      bgOnContainerActiveSpecs =
        'bg-on-secondary-container-light dark:bg-on-secondary-container-dark';
      bgOnContainerDisabledSpecs =
        'disabled:bg-on-secondary-container-light/[.12] dark:disabled:bg-on-secondary-container-dark/[.12]';
      bgOnContainerLoadingSpecs =
        'bg-on-secondary-container-light dark:bg-on-secondary-container-dark';
      break;

    case 'tertiary':
      bgMainSpecs = 'bg-tertiary-light dark:bg-tertiary-dark';
      bgMainHoveredSpecs =
        'hover:after:bg-tertiary-light dark:hover:after:bg-tertiary-dark';
      bgMainFocusedSpecs =
        'focus:after:bg-tertiary-light dark:focus:after:bg-tertiary-dark';
      bgMainPressedSpecs =
        'active:after:bg-tertiary-light dark:active:after:bg-tertiary-dark';
      bgMainActiveSpecs = 'bg-tertiary-light dark:bg-tertiary-dark';
      bgMainDisabledSpecs =
        'disabled:bg-tertiary-light/[.12] dark:disabled:bg-tertiary-dark/[.12]';
      bgMainLoadingSpecs = 'bg-tertiary-light dark:bg-tertiary-dark';

      bgOnMainSpecs = 'bg-on-tertiary-light dark:bg-on-tertiary-dark';
      bgOnMainHoveredSpecs =
        'hover:after:bg-on-tertiary-light dark:hover:after:bg-on-tertiary-dark';
      bgOnMainFocusedSpecs =
        'focus:after:bg-on-tertiary-light dark:focus:after:bg-on-tertiary-dark';
      bgOnMainPressedSpecs =
        'active:after:bg-on-tertiary-light dark:active:after:bg-on-tertiary-dark';
      bgOnMainActiveSpecs = 'bg-on-tertiary-light dark:bg-on-tertiary-dark';
      bgOnMainDisabledSpecs =
        'disabled:bg-on-tertiary-light/[.12] dark:disabled:bg-on-tertiary-dark/[.12]';
      bgOnMainLoadingSpecs = 'bg-on-tertiary-light dark:bg-on-tertiary-dark';

      bgContainerSpecs =
        'bg-tertiary-container-light dark:bg-tertiary-container-dark';
      bgContainerHoveredSpecs =
        'hover:after:bg-tertiary-container-light dark:hover:after:bg-tertiary-container-dark';
      bgContainerFocusedSpecs =
        'focus:after:bg-tertiary-container-light dark:focus:after:bg-tertiary-container-dark';
      bgContainerPressedSpecs =
        'active:after:bg-tertiary-container-light dark:active:after:bg-tertiary-container-dark';
      bgContainerActiveSpecs =
        'bg-tertiary-container-light dark:bg-tertiary-container-dark';
      bgContainerDisabledSpecs =
        'disabled:bg-tertiary-container-light/[.12] dark:disabled:bg-tertiary-container-dark/[.12]';
      bgContainerLoadingSpecs =
        'bg-tertiary-container-light dark:bg-tertiary-container-dark';

      bgOnContainerSpecs =
        'bg-on-tertiary-container-light dark:bg-on-tertiary-container-dark';
      bgOnContainerHoveredSpecs =
        'hover:after:bg-on-tertiary-container-light dark:hover:after:bg-on-tertiary-container-dark';
      bgOnContainerFocusedSpecs =
        'focus:after:bg-on-tertiary-container-light dark:focus:after:bg-on-tertiary-container-dark';
      bgOnContainerPressedSpecs =
        'active:after:bg-on-tertiary-container-light dark:active:after:bg-on-tertiary-container-dark';
      bgOnContainerActiveSpecs =
        'bg-on-tertiary-container-light dark:bg-on-tertiary-container-dark';
      bgOnContainerDisabledSpecs =
        'disabled:bg-on-tertiary-container-light/[.12] dark:disabled:bg-on-tertiary-container-dark/[.12]';
      bgOnContainerLoadingSpecs =
        'bg-on-tertiary-container-light dark:bg-on-tertiary-container-dark';
      break;

    case 'error':
      bgMainSpecs = 'bg-error-light dark:bg-error-dark';
      bgMainHoveredSpecs =
        'hover:after:bg-error-light dark:hover:after:bg-error-dark';
      bgMainFocusedSpecs =
        'focus:after:bg-error-light dark:focus:after:bg-error-dark';
      bgMainPressedSpecs =
        'active:after:bg-error-light dark:active:after:bg-error-dark';
      bgMainActiveSpecs = 'bg-error-light dark:bg-error-dark';
      bgMainDisabledSpecs =
        'disabled:bg-error-light/[.12] dark:disabled:bg-error-dark/[.12]';
      bgMainLoadingSpecs = 'bg-error-light dark:bg-error-dark';

      bgOnMainSpecs = 'bg-on-error-light dark:bg-on-error-dark';
      bgOnMainHoveredSpecs =
        'hover:after:bg-on-error-light dark:hover:after:bg-on-error-dark';
      bgOnMainFocusedSpecs =
        'focus:after:bg-on-error-light dark:focus:after:bg-on-error-dark';
      bgOnMainPressedSpecs =
        'active:after:bg-on-error-light dark:active:after:bg-on-error-dark';
      bgOnMainActiveSpecs = 'bg-on-error-light dark:bg-on-error-dark';
      bgOnMainDisabledSpecs =
        'disabled:bg-on-error-light/[.12] dark:disabled:bg-on-error-dark/[.12]';
      bgOnMainLoadingSpecs = 'bg-on-error-light dark:bg-on-error-dark';

      bgContainerSpecs =
        'bg-error-container-light dark:bg-error-container-dark';
      bgContainerHoveredSpecs =
        'hover:after:bg-error-container-light dark:hover:after:bg-error-container-dark';
      bgContainerFocusedSpecs =
        'focus:after:bg-error-container-light dark:focus:after:bg-error-container-dark';
      bgContainerPressedSpecs =
        'active:after:bg-error-container-light dark:active:after:bg-error-container-dark';
      bgContainerActiveSpecs =
        'bg-error-container-light dark:bg-error-container-dark';
      bgContainerDisabledSpecs =
        'disabled:bg-error-container-light/[.12] dark:disabled:bg-error-container-dark/[.12]';
      bgContainerLoadingSpecs =
        'bg-error-container-light dark:bg-error-container-dark';

      bgOnContainerSpecs =
        'bg-on-error-container-light dark:bg-on-error-container-dark';
      bgOnContainerHoveredSpecs =
        'hover:after:bg-on-error-container-light dark:hover:after:bg-on-error-container-dark';
      bgOnContainerFocusedSpecs =
        'focus:after:bg-on-error-container-light dark:focus:after:bg-on-error-container-dark';
      bgOnContainerPressedSpecs =
        'active:after:bg-on-error-container-light dark:active:after:bg-on-error-container-dark';
      bgOnContainerActiveSpecs =
        'bg-on-error-container-light dark:bg-on-error-container-dark';
      bgOnContainerDisabledSpecs =
        'disabled:bg-on-error-container-light/[.12] dark:disabled:bg-on-error-container-dark/[.12]';
      bgOnContainerLoadingSpecs =
        'bg-on-error-container-light dark:bg-on-error-container-dark';
      break;

    case 'surface':
      bgMainSpecs = 'bg-surface-light dark:bg-surface-dark';
      bgMainHoveredSpecs =
        'hover:after:bg-surface-light dark:hover:after:bg-surface-dark';
      bgMainFocusedSpecs =
        'focus:after:bg-surface-light dark:focus:after:bg-surface-dark';
      bgMainPressedSpecs =
        'active:after:bg-surface-light dark:active:after:bg-surface-dark';
      bgMainActiveSpecs = 'bg-surface-light dark:bg-surface-dark';
      bgMainDisabledSpecs =
        'disabled:bg-surface-light/[.12] dark:disabled:bg-surface-dark/[.12]';
      bgMainLoadingSpecs = 'bg-surface-light dark:bg-surface-dark';

      bgOnMainSpecs = 'bg-on-surface-light dark:bg-on-surface-dark';
      bgOnMainHoveredSpecs =
        'hover:after:bg-on-surface-light dark:hover:after:bg-on-surface-dark';
      bgOnMainFocusedSpecs =
        'focus:after:bg-on-surface-light dark:focus:after:bg-on-surface-dark';
      bgOnMainPressedSpecs =
        'active:after:bg-on-surface-light dark:active:after:bg-on-surface-dark';
      bgOnMainActiveSpecs = 'bg-on-surface-light dark:bg-on-surface-dark';
      bgOnMainDisabledSpecs =
        'disabled:bg-on-surface-light/[.12] dark:disabled:bg-on-surface-dark/[.12]';
      bgOnMainLoadingSpecs = 'bg-on-surface-light dark:bg-on-surface-dark';

      bgContainerSpecs =
        'bg-surface-variant-light dark:bg-surface-variant-dark';
      bgContainerHoveredSpecs =
        'hover:after:bg-surface-variant-light dark:hover:after:bg-surface-variant-dark';
      bgContainerFocusedSpecs =
        'focus:after:bg-surface-variant-light dark:focus:after:bg-surface-variant-dark';
      bgContainerPressedSpecs =
        'active:after:bg-surface-variant-light dark:active:after:bg-surface-variant-dark';
      bgContainerActiveSpecs =
        'bg-surface-variant-light dark:bg-surface-variant-dark';
      bgContainerDisabledSpecs =
        'disabled:bg-surface-variant-light/[.12] dark:disabled:bg-surface-variant-dark/[.12]';
      bgContainerLoadingSpecs =
        'bg-surface-variant-light dark:bg-surface-variant-dark';

      bgOnContainerSpecs =
        'bg-on-surface-variant-light dark:bg-on-surface-variant-dark';
      bgOnContainerHoveredSpecs =
        'hover:after:bg-on-surface-variant-light dark:hover:after:bg-on-surface-variant-dark';
      bgOnContainerFocusedSpecs =
        'focus:after:bg-on-surface-variant-light dark:focus:after:bg-on-surface-variant-dark';
      bgOnContainerPressedSpecs =
        'active:after:bg-on-surface-variant-light dark:active:after:bg-on-surface-variant-dark';
      bgOnContainerActiveSpecs =
        'bg-on-surface-variant-light dark:bg-on-surface-variant-dark';
      bgOnContainerDisabledSpecs =
        'disabled:bg-on-surface-variant-light/[.12] dark:disabled:bg-on-surface-variant-dark/[.12]';
      bgOnContainerLoadingSpecs =
        'bg-on-surface-variant-light dark:bg-on-surface-variant-dark';
      break;

    default:
      break;
  }

  return {
    bgMainSpecs,
    bgMainHoveredSpecs,
    bgMainFocusedSpecs,
    bgMainPressedSpecs,
    bgMainActiveSpecs,
    bgMainLoadingSpecs,
    bgMainDisabledSpecs,

    bgOnMainSpecs,
    bgOnMainHoveredSpecs,
    bgOnMainFocusedSpecs,
    bgOnMainPressedSpecs,
    bgOnMainActiveSpecs,
    bgOnMainLoadingSpecs,
    bgOnMainDisabledSpecs,

    bgContainerSpecs,
    bgContainerHoveredSpecs,
    bgContainerFocusedSpecs,
    bgContainerPressedSpecs,
    bgContainerActiveSpecs,
    bgContainerDisabledSpecs,
    bgContainerLoadingSpecs,

    bgOnContainerSpecs,
    bgOnContainerHoveredSpecs,
    bgOnContainerFocusedSpecs,
    bgOnContainerPressedSpecs,
    bgOnContainerActiveSpecs,
    bgOnContainerDisabledSpecs,
    bgOnContainerLoadingSpecs,
  };
};
