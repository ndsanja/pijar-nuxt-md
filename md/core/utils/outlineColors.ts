type Color = 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface';

export const outlineColors = (color?: Color) => {
  let outlineMainSpecs = '';
  let outlineMainHoveredSpecs = '';
  let outlineMainFocusedSpecs = '';
  let outlineMainPressedSpecs = '';
  let outlineMainActiveSpecs = '';
  let outlineMainDisabledSpecs = '';
  let outlineMainLoadingSpecs = '';

  let outlineOnMainSpecs = '';
  let outlineOnMainHoveredSpecs = '';
  let outlineOnMainFocusedSpecs = '';
  let outlineOnMainPressedSpecs = '';
  let outlineOnMainActiveSpecs = '';
  let outlineOnMainDisabledSpecs = '';
  let outlineOnMainLoadingSpecs = '';

  let outlineContainerSpecs = '';
  let outlineContainerHoveredSpecs = '';
  let outlineContainerFocusedSpecs = '';
  let outlineContainerPressedSpecs = '';
  let outlineContainerActiveSpecs = '';
  let outlineContainerDisabledSpecs = '';
  let outlineContainerLoadingSpecs = '';

  let outlineOnContainerSpecs = '';
  let outlineOnContainerHoveredSpecs = '';
  let outlineOnContainerFocusedSpecs = '';
  let outlineOnContainerPressedSpecs = '';
  let outlineOnContainerActiveSpecs = '';
  let outlineOnContainerDisabledSpecs = '';
  let outlineOnContainerLoadingSpecs = '';

  switch (color) {
    case 'primary':
      outlineMainSpecs = 'outline-primary-light dark:outline-primary-dark';
      outlineMainHoveredSpecs =
        'hover:outline-primary-light dark:hover:outline-primary-dark';
      outlineMainFocusedSpecs =
        'focus:outline-primary-light dark:focus:outline-primary-dark';
      outlineMainPressedSpecs =
        'active:outline-primary-light dark:active:outline-primary-dark';
      outlineMainActiveSpecs =
        'outline-primary-light dark:outline-primary-dark';
      outlineMainDisabledSpecs =
        'disabled:outline-primary-light/[.12] dark:disabled:outline-primary-dark/[.12]';
      outlineMainLoadingSpecs =
        'outline-primary-light dark:outline-primary-dark';

      outlineOnMainSpecs =
        'outline-on-primary-light dark:outline-on-primary-dark';
      outlineOnMainHoveredSpecs =
        'hover:outline-on-primary-light dark:hover:outline-on-primary-dark';
      outlineOnMainFocusedSpecs =
        'focus:outline-on-primary-light dark:focus:outline-on-primary-dark';
      outlineOnMainPressedSpecs =
        'active:outline-on-primary-light dark:active:outline-on-primary-dark';
      outlineOnMainActiveSpecs =
        'outline-on-primary-light dark:outline-on-primary-dark';
      outlineOnMainDisabledSpecs =
        'disabled:outline-on-primary-light/[.12] dark:disabled:outline-on-primary-dark/[.12]';
      outlineOnMainLoadingSpecs =
        'outline-on-primary-light dark:outline-on-primary-dark';

      outlineContainerSpecs =
        'outline-primary-container-light dark:outline-primary-container-dark';
      outlineContainerHoveredSpecs =
        'hover:outline-primary-container-light dark:hover:outline-primary-container-dark';
      outlineContainerFocusedSpecs =
        'focus:outline-primary-container-light dark:focus:outline-primary-container-dark';
      outlineContainerPressedSpecs =
        'active:outline-primary-container-light dark:active:outline-primary-container-dark';
      outlineContainerActiveSpecs =
        'outline-primary-container-light dark:outline-primary-container-dark';
      outlineContainerDisabledSpecs =
        'disabled:outline-primary-container-light/[.12] dark:disabled:outline-primary-container-dark/[.12]';
      outlineContainerLoadingSpecs =
        'outline-primary-container-light dark:outline-primary-container-dark';

      outlineOnContainerSpecs =
        'outline-on-primary-container-light dark:outline-on-primary-container-dark';
      outlineOnContainerHoveredSpecs =
        'hover:outline-on-primary-container-light dark:hover:outline-on-primary-container-dark';
      outlineOnContainerFocusedSpecs =
        'focus:outline-on-primary-container-light dark:focus:outline-on-primary-container-dark';
      outlineOnContainerPressedSpecs =
        'active:outline-on-primary-container-light dark:active:outline-on-primary-container-dark';
      outlineOnContainerActiveSpecs =
        'outline-on-primary-container-light dark:outline-on-primary-container-dark';
      outlineOnContainerDisabledSpecs =
        'disabled:outline-on-primary-container-light/[.12] dark:disabled:outline-on-primary-container-dark/[.12]';
      outlineOnContainerLoadingSpecs =
        'outline-on-primary-container-light dark:outline-on-primary-container-dark';
      break;

    case 'secondary':
      outlineMainSpecs = 'outline-secondary-light dark:outline-secondary-dark';
      outlineMainHoveredSpecs =
        'hover:outline-secondary-light dark:hover:outline-secondary-dark';
      outlineMainFocusedSpecs =
        'focus:outline-secondary-light dark:focus:outline-secondary-dark';
      outlineMainPressedSpecs =
        'active:outline-secondary-light dark:active:outline-secondary-dark';
      outlineMainActiveSpecs =
        'outline-secondary-light dark:outline-secondary-dark';
      outlineMainDisabledSpecs =
        'disabled:outline-secondary-light/[.12] dark:disabled:outline-secondary-dark/[.12]';
      outlineMainLoadingSpecs =
        'outline-secondary-light dark:outline-secondary-dark';

      outlineOnMainSpecs =
        'outline-on-secondary-light dark:outline-on-secondary-dark';
      outlineOnMainHoveredSpecs =
        'hover:outline-on-secondary-light dark:hover:outline-on-secondary-dark';
      outlineOnMainFocusedSpecs =
        'focus:outline-on-secondary-light dark:focus:outline-on-secondary-dark';
      outlineOnMainPressedSpecs =
        'active:outline-on-secondary-light dark:active:outline-on-secondary-dark';
      outlineOnMainActiveSpecs =
        'outline-on-secondary-light dark:outline-on-secondary-dark';
      outlineOnMainDisabledSpecs =
        'disabled:outline-on-secondary-light/[.12] dark:disabled:outline-on-secondary-dark/[.12]';
      outlineOnMainLoadingSpecs =
        'outline-on-secondary-light dark:outline-on-secondary-dark';

      outlineContainerSpecs =
        'outline-secondary-container-light dark:outline-secondary-container-dark';
      outlineContainerHoveredSpecs =
        'hover:outline-secondary-container-light dark:hover:outline-secondary-container-dark';
      outlineContainerFocusedSpecs =
        'focus:outline-secondary-container-light dark:focus:outline-secondary-container-dark';
      outlineContainerPressedSpecs =
        'active:outline-secondary-container-light dark:active:outline-secondary-container-dark';
      outlineContainerActiveSpecs =
        'outline-secondary-container-light dark:outline-secondary-container-dark';
      outlineContainerDisabledSpecs =
        'disabled:outline-secondary-container-light/[.12] dark:disabled:outline-secondary-container-dark/[.12]';
      outlineContainerLoadingSpecs =
        'outline-secondary-container-light dark:outline-secondary-container-dark';

      outlineOnContainerSpecs =
        'outline-on-secondary-container-light dark:outline-on-secondary-container-dark';
      outlineOnContainerHoveredSpecs =
        'hover:outline-on-secondary-container-light dark:hover:outline-on-secondary-container-dark';
      outlineOnContainerFocusedSpecs =
        'focus:outline-on-secondary-container-light dark:focus:outline-on-secondary-container-dark';
      outlineOnContainerPressedSpecs =
        'active:outline-on-secondary-container-light dark:active:outline-on-secondary-container-dark';
      outlineOnContainerActiveSpecs =
        'outline-on-secondary-container-light dark:outline-on-secondary-container-dark';
      outlineOnContainerDisabledSpecs =
        'disabled:outline-on-secondary-container-light/[.12] dark:disabled:outline-on-secondary-container-dark/[.12]';
      outlineOnContainerLoadingSpecs =
        'outline-on-secondary-container-light dark:outline-on-secondary-container-dark';
      break;

    case 'tertiary':
      outlineMainSpecs = 'outline-tertiary-light dark:outline-tertiary-dark';
      outlineMainHoveredSpecs =
        'hover:outline-tertiary-light dark:hover:outline-tertiary-dark';
      outlineMainFocusedSpecs =
        'focus:outline-tertiary-light dark:focus:outline-tertiary-dark';
      outlineMainPressedSpecs =
        'active:outline-tertiary-light dark:active:outline-tertiary-dark';
      outlineMainActiveSpecs =
        'outline-tertiary-light dark:outline-tertiary-dark';
      outlineMainDisabledSpecs =
        'disabled:outline-tertiary-light/[.12] dark:disabled:outline-tertiary-dark/[.12]';
      outlineMainLoadingSpecs =
        'outline-tertiary-light dark:outline-tertiary-dark';

      outlineOnMainSpecs =
        'outline-on-tertiary-light dark:outline-on-tertiary-dark';
      outlineOnMainHoveredSpecs =
        'hover:outline-on-tertiary-light dark:hover:outline-on-tertiary-dark';
      outlineOnMainFocusedSpecs =
        'focus:outline-on-tertiary-light dark:focus:outline-on-tertiary-dark';
      outlineOnMainPressedSpecs =
        'active:outline-on-tertiary-light dark:active:outline-on-tertiary-dark';
      outlineOnMainActiveSpecs =
        'outline-on-tertiary-light dark:outline-on-tertiary-dark';
      outlineOnMainDisabledSpecs =
        'disabled:outline-on-tertiary-light/[.12] dark:disabled:outline-on-tertiary-dark/[.12]';
      outlineOnMainLoadingSpecs =
        'outline-on-tertiary-light dark:outline-on-tertiary-dark';

      outlineContainerSpecs =
        'outline-tertiary-container-light dark:outline-tertiary-container-dark';
      outlineContainerHoveredSpecs =
        'hover:outline-tertiary-container-light dark:hover:outline-tertiary-container-dark';
      outlineContainerFocusedSpecs =
        'focus:outline-tertiary-container-light dark:focus:outline-tertiary-container-dark';
      outlineContainerPressedSpecs =
        'active:outline-tertiary-container-light dark:active:outline-tertiary-container-dark';
      outlineContainerActiveSpecs =
        'outline-tertiary-container-light dark:outline-tertiary-container-dark';
      outlineContainerDisabledSpecs =
        'disabled:outline-tertiary-container-light/[.12] dark:disabled:outline-tertiary-container-dark/[.12]';
      outlineContainerLoadingSpecs =
        'outline-tertiary-container-light dark:outline-tertiary-container-dark';

      outlineOnContainerSpecs =
        'outline-on-tertiary-container-light dark:outline-on-tertiary-container-dark';
      outlineOnContainerHoveredSpecs =
        'hover:outline-on-tertiary-container-light dark:hover:outline-on-tertiary-container-dark';
      outlineOnContainerFocusedSpecs =
        'focus:outline-on-tertiary-container-light dark:focus:outline-on-tertiary-container-dark';
      outlineOnContainerPressedSpecs =
        'active:outline-on-tertiary-container-light dark:active:outline-on-tertiary-container-dark';
      outlineOnContainerActiveSpecs =
        'outline-on-tertiary-container-light dark:outline-on-tertiary-container-dark';
      outlineOnContainerDisabledSpecs =
        'disabled:outline-on-tertiary-container-light/[.12] dark:disabled:outline-on-tertiary-container-dark/[.12]';
      outlineOnContainerLoadingSpecs =
        'outline-on-tertiary-container-light dark:outline-on-tertiary-container-dark';
      break;

    case 'error':
      outlineMainSpecs = 'outline-error-light dark:outline-error-dark';
      outlineMainHoveredSpecs =
        'hover:outline-error-light dark:hover:outline-error-dark';
      outlineMainFocusedSpecs =
        'focus:outline-error-light dark:focus:outline-error-dark';
      outlineMainPressedSpecs =
        'active:outline-error-light dark:active:outline-error-dark';
      outlineMainActiveSpecs = 'outline-error-light dark:outline-error-dark';
      outlineMainDisabledSpecs =
        'disabled:outline-error-light/[.12] dark:disabled:outline-error-dark/[.12]';
      outlineMainLoadingSpecs = 'outline-error-light dark:outline-error-dark';

      outlineOnMainSpecs = 'outline-on-error-light dark:outline-on-error-dark';
      outlineOnMainHoveredSpecs =
        'hover:outline-on-error-light dark:hover:outline-on-error-dark';
      outlineOnMainFocusedSpecs =
        'focus:outline-on-error-light dark:focus:outline-on-error-dark';
      outlineOnMainPressedSpecs =
        'active:outline-on-error-light dark:active:outline-on-error-dark';
      outlineOnMainActiveSpecs =
        'outline-on-error-light dark:outline-on-error-dark';
      outlineOnMainDisabledSpecs =
        'disabled:outline-on-error-light/[.12] dark:disabled:outline-on-error-dark/[.12]';
      outlineOnMainLoadingSpecs =
        'outline-on-error-light dark:outline-on-error-dark';

      outlineContainerSpecs =
        'outline-error-container-light dark:outline-error-container-dark';
      outlineContainerHoveredSpecs =
        'hover:outline-error-container-light dark:hover:outline-error-container-dark';
      outlineContainerFocusedSpecs =
        'focus:outline-error-container-light dark:focus:outline-error-container-dark';
      outlineContainerPressedSpecs =
        'active:outline-error-container-light dark:active:outline-error-container-dark';
      outlineContainerActiveSpecs =
        'outline-error-container-light dark:outline-error-container-dark';
      outlineContainerDisabledSpecs =
        'disabled:outline-error-container-light/[.12] dark:disabled:outline-error-container-dark/[.12]';
      outlineContainerLoadingSpecs =
        'outline-error-container-light dark:outline-error-container-dark';

      outlineOnContainerSpecs =
        'outline-on-error-container-light dark:outline-on-error-container-dark';
      outlineOnContainerHoveredSpecs =
        'hover:outline-on-error-container-light dark:hover:outline-on-error-container-dark';
      outlineOnContainerFocusedSpecs =
        'focus:outline-on-error-container-light dark:focus:outline-on-error-container-dark';
      outlineOnContainerPressedSpecs =
        'active:outline-on-error-container-light dark:active:outline-on-error-container-dark';
      outlineOnContainerActiveSpecs =
        'outline-on-error-container-light dark:outline-on-error-container-dark';
      outlineOnContainerDisabledSpecs =
        'disabled:outline-on-error-container-light/[.12] dark:disabled:outline-on-error-container-dark/[.12]';
      outlineOnContainerLoadingSpecs =
        'outline-on-error-container-light dark:outline-on-error-container-dark';
      break;

    case 'surface':
      outlineMainSpecs = 'outline-surface-light dark:outline-surface-dark';
      outlineMainHoveredSpecs =
        'hover:outline-surface-light dark:hover:outline-surface-dark';
      outlineMainFocusedSpecs =
        'focus:outline-surface-light dark:focus:outline-surface-dark';
      outlineMainPressedSpecs =
        'active:outline-surface-light dark:active:outline-surface-dark';
      outlineMainActiveSpecs =
        'outline-surface-light dark:outline-surface-dark';
      outlineMainDisabledSpecs =
        'disabled:outline-surface-light/[.12] dark:disabled:outline-surface-dark/[.12]';
      outlineMainLoadingSpecs =
        'outline-surface-light dark:outline-surface-dark';

      outlineOnMainSpecs =
        'outline-on-surface-light dark:outline-on-surface-dark';
      outlineOnMainHoveredSpecs =
        'hover:outline-on-surface-light dark:hover:outline-on-surface-dark';
      outlineOnMainFocusedSpecs =
        'focus:outline-on-surface-light dark:focus:outline-on-surface-dark';
      outlineOnMainPressedSpecs =
        'active:outline-on-surface-light dark:active:outline-on-surface-dark';
      outlineOnMainActiveSpecs =
        'outline-on-surface-light dark:outline-on-surface-dark';
      outlineOnMainDisabledSpecs =
        'disabled:outline-on-surface-light/[.12] dark:disabled:outline-on-surface-dark/[.12]';
      outlineOnMainLoadingSpecs =
        'outline-on-surface-light dark:outline-on-surface-dark';

      outlineContainerSpecs =
        'outline-surface-variant-light dark:outline-surface-variant-dark';
      outlineContainerHoveredSpecs =
        'hover:outline-surface-variant-light dark:hover:outline-surface-variant-dark';
      outlineContainerFocusedSpecs =
        'focus:outline-surface-variant-light dark:focus:outline-surface-variant-dark';
      outlineContainerPressedSpecs =
        'active:outline-surface-variant-light dark:active:outline-surface-variant-dark';
      outlineContainerActiveSpecs =
        'outline-surface-variant-light dark:outline-surface-variant-dark';
      outlineContainerDisabledSpecs =
        'disabled:outline-surface-variant-light/[.12] dark:disabled:outline-surface-variant-dark/[.12]';
      outlineContainerLoadingSpecs =
        'outline-surface-variant-light dark:outline-surface-variant-dark';

      outlineOnContainerSpecs =
        'outline-on-surface-variant-light dark:outline-on-surface-variant-dark';
      outlineOnContainerHoveredSpecs =
        'hover:outline-on-surface-variant-light dark:hover:outline-on-surface-variant-dark';
      outlineOnContainerFocusedSpecs =
        'focus:outline-on-surface-variant-light dark:focus:outline-on-surface-variant-dark';
      outlineOnContainerPressedSpecs =
        'active:outline-on-surface-variant-light dark:active:outline-on-surface-variant-dark';
      outlineOnContainerActiveSpecs =
        'outline-on-surface-variant-light dark:outline-on-surface-variant-dark';
      outlineOnContainerDisabledSpecs =
        'disabled:outline-on-surface-variant-light/[.12] dark:disabled:outline-on-surface-variant-dark/[.12]';
      outlineOnContainerLoadingSpecs =
        'outline-on-surface-variant-light dark:outline-on-surface-variant-dark';
      break;

    default:
      break;
  }

  return {
    outlineMainSpecs,
    outlineMainHoveredSpecs,
    outlineMainFocusedSpecs,
    outlineMainPressedSpecs,
    outlineMainActiveSpecs,
    outlineMainLoadingSpecs,
    outlineMainDisabledSpecs,

    outlineOnMainSpecs,
    outlineOnMainHoveredSpecs,
    outlineOnMainFocusedSpecs,
    outlineOnMainPressedSpecs,
    outlineOnMainActiveSpecs,
    outlineOnMainLoadingSpecs,
    outlineOnMainDisabledSpecs,

    outlineContainerSpecs,
    outlineContainerHoveredSpecs,
    outlineContainerFocusedSpecs,
    outlineContainerPressedSpecs,
    outlineContainerActiveSpecs,
    outlineContainerDisabledSpecs,
    outlineContainerLoadingSpecs,

    outlineOnContainerSpecs,
    outlineOnContainerHoveredSpecs,
    outlineOnContainerFocusedSpecs,
    outlineOnContainerPressedSpecs,
    outlineOnContainerActiveSpecs,
    outlineOnContainerDisabledSpecs,
    outlineOnContainerLoadingSpecs,
  };
};
