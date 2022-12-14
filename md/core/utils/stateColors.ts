type Color = 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface';

export const stateColors = (color?: Color) => {
  let stateMainSpecs = '';
  let stateMainHoveredSpecs = '';
  let stateMainFocusedSpecs = '';
  let stateMainPressedSpecs = '';
  let stateMainActiveSpecs = '';
  let stateMainDisabledSpecs = '';
  let stateMainLoadingSpecs = '';

  let stateOnMainSpecs = '';
  let stateOnMainHoveredSpecs = '';
  let stateOnMainFocusedSpecs = '';
  let stateOnMainPressedSpecs = '';
  let stateOnMainActiveSpecs = '';
  let stateOnMainDisabledSpecs = '';
  let stateOnMainLoadingSpecs = '';

  let stateContainerSpecs = '';
  let stateContainerHoveredSpecs = '';
  let stateContainerFocusedSpecs = '';
  let stateContainerPressedSpecs = '';
  let stateContainerActiveSpecs = '';
  let stateContainerDisabledSpecs = '';
  let stateContainerLoadingSpecs = '';

  let stateOnContainerSpecs = '';
  let stateOnContainerHoveredSpecs = '';
  let stateOnContainerFocusedSpecs = '';
  let stateOnContainerPressedSpecs = '';
  let stateOnContainerActiveSpecs = '';
  let stateOnContainerDisabledSpecs = '';
  let stateOnContainerLoadingSpecs = '';

  switch (color) {
    case 'primary':
      stateMainSpecs =
        'after:bg-primary-light dark:after:bg-primary-dark after:inset-0 after:opacity-[.12]';
      stateMainHoveredSpecs =
        'hover:after:bg-primary-light dark:hover:after:bg-primary-dark after:inset-0 after:opacity-[.12]';
      stateMainFocusedSpecs =
        'focus:after:bg-primary-light dark:focus:after:bg-primary-dark after:inset-0 after:opacity-[.12]';
      stateMainPressedSpecs =
        'active:after:bg-primary-light dark:active:after:bg-primary-dark after:inset-0 after:opacity-[.12]';
      stateMainActiveSpecs =
        'after:bg-primary-light dark:after:bg-primary-dark after:inset-0 after:opacity-[.12]';
      stateMainDisabledSpecs =
        'disabled:after:bg-primary-light/[.12] dark:disabled:after:bg-primary-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateMainLoadingSpecs =
        'after:bg-primary-light dark:after:bg-primary-dark after:inset-0 after:opacity-[.12]';

      stateOnMainSpecs =
        'after:bg-on-primary-light dark:after:bg-on-primary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainHoveredSpecs =
        'hover:after:bg-on-primary-light dark:hover:after:bg-on-primary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainFocusedSpecs =
        'focus:after:bg-on-primary-light dark:focus:after:bg-on-primary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainPressedSpecs =
        'active:after:bg-on-primary-light dark:active:after:bg-on-primary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainActiveSpecs =
        'after:bg-on-primary-light dark:after:bg-on-primary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainDisabledSpecs =
        'disabled:after:bg-on-primary-light/[.12] dark:disabled:after:bg-on-primary-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnMainLoadingSpecs =
        'after:bg-on-primary-light dark:after:bg-on-primary-dark after:inset-0 after:opacity-[.12]';

      stateContainerSpecs =
        'after:bg-primary-container-light dark:after:bg-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerHoveredSpecs =
        'hover:after:bg-primary-container-light dark:hover:after:bg-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerFocusedSpecs =
        'focus:after:bg-primary-container-light dark:focus:after:bg-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerPressedSpecs =
        'active:after:bg-primary-container-light dark:active:after:bg-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerActiveSpecs =
        'after:bg-primary-container-light dark:after:bg-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerDisabledSpecs =
        'disabled:after:bg-primary-container-light/[.12] dark:disabled:after:bg-primary-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateContainerLoadingSpecs =
        'after:bg-primary-container-light dark:after:bg-primary-container-dark after:inset-0 after:opacity-[.12]';

      stateOnContainerSpecs =
        'after:bg-on-primary-container-light dark:after:bg-on-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerHoveredSpecs =
        'hover:after:bg-on-primary-container-light dark:hover:after:bg-on-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerFocusedSpecs =
        'focus:after:bg-on-primary-container-light dark:focus:after:bg-on-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerPressedSpecs =
        'active:after:bg-on-primary-container-light dark:active:after:bg-on-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerActiveSpecs =
        'after:bg-on-primary-container-light dark:after:bg-on-primary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerDisabledSpecs =
        'disabled:after:bg-on-primary-container-light/[.12] dark:disabled:after:bg-on-primary-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnContainerLoadingSpecs =
        'after:bg-on-primary-container-light dark:after:bg-on-primary-container-dark after:inset-0 after:opacity-[.12]';
      break;

    case 'secondary':
      stateMainSpecs =
        'after:bg-secondary-light dark:after:bg-secondary-dark after:inset-0 after:opacity-[.12]';
      stateMainHoveredSpecs =
        'hover:after:bg-secondary-light dark:hover:after:bg-secondary-dark after:inset-0 after:opacity-[.12]';
      stateMainFocusedSpecs =
        'focus:after:bg-secondary-light dark:focus:after:bg-secondary-dark after:inset-0 after:opacity-[.12]';
      stateMainPressedSpecs =
        'active:after:bg-secondary-light dark:active:after:bg-secondary-dark after:inset-0 after:opacity-[.12]';
      stateMainActiveSpecs =
        'after:bg-secondary-light dark:after:bg-secondary-dark after:inset-0 after:opacity-[.12]';
      stateMainDisabledSpecs =
        'disabled:after:bg-secondary-light/[.12] dark:disabled:after:bg-secondary-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateMainLoadingSpecs =
        'after:bg-secondary-light dark:after:bg-secondary-dark after:inset-0 after:opacity-[.12]';

      stateOnMainSpecs =
        'after:bg-on-secondary-light dark:after:bg-on-secondary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainHoveredSpecs =
        'hover:after:bg-on-secondary-light dark:hover:after:bg-on-secondary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainFocusedSpecs =
        'focus:after:bg-on-secondary-light dark:focus:after:bg-on-secondary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainPressedSpecs =
        'active:after:bg-on-secondary-light dark:active:after:bg-on-secondary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainActiveSpecs =
        'after:bg-on-secondary-light dark:after:bg-on-secondary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainDisabledSpecs =
        'disabled:after:bg-on-secondary-light/[.12] dark:disabled:after:bg-on-secondary-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnMainLoadingSpecs =
        'after:bg-on-secondary-light dark:after:bg-on-secondary-dark after:inset-0 after:opacity-[.12]';

      stateContainerSpecs =
        'after:bg-secondary-container-light dark:after:bg-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerHoveredSpecs =
        'hover:after:bg-secondary-container-light dark:hover:after:bg-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerFocusedSpecs =
        'focus:after:bg-secondary-container-light dark:focus:after:bg-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerPressedSpecs =
        'active:after:bg-secondary-container-light dark:active:after:bg-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerActiveSpecs =
        'after:bg-secondary-container-light dark:after:bg-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerDisabledSpecs =
        'disabled:after:bg-secondary-container-light/[.12] dark:disabled:after:bg-secondary-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateContainerLoadingSpecs =
        'after:bg-secondary-container-light dark:after:bg-secondary-container-dark after:inset-0 after:opacity-[.12]';

      stateOnContainerSpecs =
        'after:bg-on-secondary-container-light dark:after:bg-on-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerHoveredSpecs =
        'hover:after:bg-on-secondary-container-light dark:hover:after:bg-on-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerFocusedSpecs =
        'focus:after:bg-on-secondary-container-light dark:focus:after:bg-on-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerPressedSpecs =
        'active:after:bg-on-secondary-container-light dark:active:after:bg-on-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerActiveSpecs =
        'after:bg-on-secondary-container-light dark:after:bg-on-secondary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerDisabledSpecs =
        'disabled:after:bg-on-secondary-container-light/[.12] dark:disabled:after:bg-on-secondary-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnContainerLoadingSpecs =
        'after:bg-on-secondary-container-light dark:after:bg-on-secondary-container-dark after:inset-0 after:opacity-[.12]';
      break;

    case 'tertiary':
      stateMainSpecs =
        'after:bg-tertiary-light dark:after:bg-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateMainHoveredSpecs =
        'hover:after:bg-tertiary-light dark:hover:after:bg-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateMainFocusedSpecs =
        'focus:after:bg-tertiary-light dark:focus:after:bg-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateMainPressedSpecs =
        'active:after:bg-tertiary-light dark:active:after:bg-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateMainActiveSpecs =
        'after:bg-tertiary-light dark:after:bg-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateMainDisabledSpecs =
        'disabled:after:bg-tertiary-light/[.12] dark:disabled:after:bg-tertiary-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateMainLoadingSpecs =
        'after:bg-tertiary-light dark:after:bg-tertiary-dark after:inset-0 after:opacity-[.12]';

      stateOnMainSpecs =
        'after:bg-on-tertiary-light dark:after:bg-on-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainHoveredSpecs =
        'hover:after:bg-on-tertiary-light dark:hover:after:bg-on-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainFocusedSpecs =
        'focus:after:bg-on-tertiary-light dark:focus:after:bg-on-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainPressedSpecs =
        'active:after:bg-on-tertiary-light dark:active:after:bg-on-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainActiveSpecs =
        'after:bg-on-tertiary-light dark:after:bg-on-tertiary-dark after:inset-0 after:opacity-[.12]';
      stateOnMainDisabledSpecs =
        'disabled:after:bg-on-tertiary-light/[.12] dark:disabled:after:bg-on-tertiary-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnMainLoadingSpecs =
        'after:bg-on-tertiary-light dark:after:bg-on-tertiary-dark after:inset-0 after:opacity-[.12]';

      stateContainerSpecs =
        'after:bg-tertiary-container-light dark:after:bg-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerHoveredSpecs =
        'hover:after:bg-tertiary-container-light dark:hover:after:bg-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerFocusedSpecs =
        'focus:after:bg-tertiary-container-light dark:focus:after:bg-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerPressedSpecs =
        'active:after:bg-tertiary-container-light dark:active:after:bg-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerActiveSpecs =
        'after:bg-tertiary-container-light dark:after:bg-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerDisabledSpecs =
        'disabled:after:bg-tertiary-container-light/[.12] dark:disabled:after:bg-tertiary-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateContainerLoadingSpecs =
        'after:bg-tertiary-container-light dark:after:bg-tertiary-container-dark after:inset-0 after:opacity-[.12]';

      stateOnContainerSpecs =
        'after:bg-on-tertiary-container-light dark:after:bg-on-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerHoveredSpecs =
        'hover:after:bg-on-tertiary-container-light dark:hover:after:bg-on-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerFocusedSpecs =
        'focus:after:bg-on-tertiary-container-light dark:focus:after:bg-on-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerPressedSpecs =
        'active:after:bg-on-tertiary-container-light dark:active:after:bg-on-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerActiveSpecs =
        'after:bg-on-tertiary-container-light dark:after:bg-on-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerDisabledSpecs =
        'disabled:after:bg-on-tertiary-container-light/[.12] dark:disabled:after:bg-on-tertiary-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnContainerLoadingSpecs =
        'after:bg-on-tertiary-container-light dark:after:bg-on-tertiary-container-dark after:inset-0 after:opacity-[.12]';
      break;

    case 'error':
      stateMainSpecs =
        'after:bg-error-light dark:after:bg-error-dark after:inset-0 after:opacity-[.12]';
      stateMainHoveredSpecs =
        'hover:after:bg-error-light dark:hover:after:bg-error-dark after:inset-0 after:opacity-[.12]';
      stateMainFocusedSpecs =
        'focus:after:bg-error-light dark:focus:after:bg-error-dark after:inset-0 after:opacity-[.12]';
      stateMainPressedSpecs =
        'active:after:bg-error-light dark:active:after:bg-error-dark after:inset-0 after:opacity-[.12]';
      stateMainActiveSpecs =
        'after:bg-error-light dark:after:bg-error-dark after:inset-0 after:opacity-[.12]';
      stateMainDisabledSpecs =
        'disabled:after:bg-error-light/[.12] dark:disabled:after:bg-error-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateMainLoadingSpecs =
        'after:bg-error-light dark:after:bg-error-dark after:inset-0 after:opacity-[.12]';

      stateOnMainSpecs =
        'after:bg-on-error-light dark:after:bg-on-error-dark after:inset-0 after:opacity-[.12]';
      stateOnMainHoveredSpecs =
        'hover:after:bg-on-error-light dark:hover:after:bg-on-error-dark after:inset-0 after:opacity-[.12]';
      stateOnMainFocusedSpecs =
        'focus:after:bg-on-error-light dark:focus:after:bg-on-error-dark after:inset-0 after:opacity-[.12]';
      stateOnMainPressedSpecs =
        'active:after:bg-on-error-light dark:active:after:bg-on-error-dark after:inset-0 after:opacity-[.12]';
      stateOnMainActiveSpecs =
        'after:bg-on-error-light dark:after:bg-on-error-dark after:inset-0 after:opacity-[.12]';
      stateOnMainDisabledSpecs =
        'disabled:after:bg-on-error-light/[.12] dark:disabled:after:bg-on-error-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnMainLoadingSpecs =
        'after:bg-on-error-light dark:after:bg-on-error-dark after:inset-0 after:opacity-[.12]';

      stateContainerSpecs =
        'after:bg-error-container-light dark:after:bg-error-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerHoveredSpecs =
        'hover:after:bg-error-container-light dark:hover:after:bg-error-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerFocusedSpecs =
        'focus:after:bg-error-container-light dark:focus:after:bg-error-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerPressedSpecs =
        'active:after:bg-error-container-light dark:active:after:bg-error-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerActiveSpecs =
        'after:bg-error-container-light dark:after:bg-error-container-dark after:inset-0 after:opacity-[.12]';
      stateContainerDisabledSpecs =
        'disabled:after:bg-error-container-light/[.12] dark:disabled:after:bg-error-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateContainerLoadingSpecs =
        'after:bg-error-container-light dark:after:bg-error-container-dark after:inset-0 after:opacity-[.12]';

      stateOnContainerSpecs =
        'after:bg-on-error-container-light dark:after:bg-on-error-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerHoveredSpecs =
        'hover:after:bg-on-error-container-light dark:hover:after:bg-on-error-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerFocusedSpecs =
        'focus:after:bg-on-error-container-light dark:focus:after:bg-on-error-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerPressedSpecs =
        'active:after:bg-on-error-container-light dark:active:after:bg-on-error-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerActiveSpecs =
        'after:bg-on-error-container-light dark:after:bg-on-error-container-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerDisabledSpecs =
        'disabled:after:bg-on-error-container-light/[.12] dark:disabled:after:bg-on-error-container-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnContainerLoadingSpecs =
        'after:bg-on-error-container-light dark:after:bg-on-error-container-dark after:inset-0 after:opacity-[.12]';
      break;

    case 'surface':
      stateMainSpecs =
        'after:bg-surface-light dark:after:bg-surface-dark after:inset-0 after:opacity-[.12]';
      stateMainHoveredSpecs =
        'hover:after:bg-surface-light dark:hover:after:bg-surface-dark after:inset-0 after:opacity-[.12]';
      stateMainFocusedSpecs =
        'focus:after:bg-surface-light dark:focus:after:bg-surface-dark after:inset-0 after:opacity-[.12]';
      stateMainPressedSpecs =
        'active:after:bg-surface-light dark:active:after:bg-surface-dark after:inset-0 after:opacity-[.12]';
      stateMainActiveSpecs =
        'after:bg-surface-light dark:after:bg-surface-dark after:inset-0 after:opacity-[.12]';
      stateMainDisabledSpecs =
        'disabled:after:bg-surface-light/[.12] dark:disabled:after:bg-surface-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateMainLoadingSpecs =
        'after:bg-surface-light dark:after:bg-surface-dark after:inset-0 after:opacity-[.12]';

      stateOnMainSpecs =
        'after:bg-on-surface-light dark:after:bg-on-surface-dark after:inset-0 after:opacity-[.12]';
      stateOnMainHoveredSpecs =
        'hover:after:bg-on-surface-light dark:hover:after:bg-on-surface-dark after:inset-0 after:opacity-[.12]';
      stateOnMainFocusedSpecs =
        'focus:after:bg-on-surface-light dark:focus:after:bg-on-surface-dark after:inset-0 after:opacity-[.12]';
      stateOnMainPressedSpecs =
        'active:after:bg-on-surface-light dark:active:after:bg-on-surface-dark after:inset-0 after:opacity-[.12]';
      stateOnMainActiveSpecs =
        'after:bg-on-surface-light dark:after:bg-on-surface-dark after:inset-0 after:opacity-[.12]';
      stateOnMainDisabledSpecs =
        'disabled:after:bg-on-surface-light/[.12] dark:disabled:after:bg-on-surface-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnMainLoadingSpecs =
        'after:bg-on-surface-light dark:after:bg-on-surface-dark after:inset-0 after:opacity-[.12]';

      stateContainerSpecs =
        'after:bg-surface-variant-light dark:after:bg-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateContainerHoveredSpecs =
        'hover:after:bg-surface-variant-light dark:hover:after:bg-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateContainerFocusedSpecs =
        'focus:after:bg-surface-variant-light dark:focus:after:bg-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateContainerPressedSpecs =
        'active:after:bg-surface-variant-light dark:active:after:bg-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateContainerActiveSpecs =
        'after:bg-surface-variant-light dark:after:bg-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateContainerDisabledSpecs =
        'disabled:after:bg-surface-variant-light/[.12] dark:disabled:after:bg-surface-variant-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateContainerLoadingSpecs =
        'after:bg-surface-variant-light dark:after:bg-surface-variant-dark after:inset-0 after:opacity-[.12]';

      stateOnContainerSpecs =
        'after:bg-on-surface-variant-light dark:after:bg-on-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerHoveredSpecs =
        'hover:after:bg-on-surface-variant-light dark:hover:after:bg-on-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerFocusedSpecs =
        'focus:after:bg-on-surface-variant-light dark:focus:after:bg-on-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerPressedSpecs =
        'active:after:bg-on-surface-variant-light dark:active:after:bg-on-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerActiveSpecs =
        'after:bg-on-surface-variant-light dark:after:bg-on-surface-variant-dark after:inset-0 after:opacity-[.12]';
      stateOnContainerDisabledSpecs =
        'disabled:after:bg-on-surface-variant-light/[.12] dark:disabled:after:bg-on-surface-variant-dark/[.12] after:inset-0 after:opacity-[.12]';
      stateOnContainerLoadingSpecs =
        'after:bg-on-surface-variant-light dark:after:bg-on-surface-variant-dark after:inset-0 after:opacity-[.12]';
      break;

    default:
      stateMainSpecs = '';
      stateMainHoveredSpecs = '';
      stateMainFocusedSpecs = '';
      stateMainPressedSpecs = '';
      stateMainActiveSpecs = '';
      stateMainLoadingSpecs = '';
      stateMainDisabledSpecs = '';

      stateOnMainSpecs = '';
      stateOnMainHoveredSpecs = '';
      stateOnMainFocusedSpecs = '';
      stateOnMainPressedSpecs = '';
      stateOnMainActiveSpecs = '';
      stateOnMainLoadingSpecs = '';
      stateOnMainDisabledSpecs = '';

      stateContainerSpecs = '';
      stateContainerHoveredSpecs = '';
      stateContainerFocusedSpecs = '';
      stateContainerPressedSpecs = '';
      stateContainerActiveSpecs = '';
      stateContainerDisabledSpecs = '';
      stateContainerLoadingSpecs = '';

      stateOnContainerSpecs = '';
      stateOnContainerHoveredSpecs = '';
      stateOnContainerFocusedSpecs = '';
      stateOnContainerPressedSpecs = '';
      stateOnContainerActiveSpecs = '';
      stateOnContainerDisabledSpecs = '';
      stateOnContainerLoadingSpecs = '';
      break;
  }

  return {
    stateMainSpecs,
    stateMainHoveredSpecs,
    stateMainFocusedSpecs,
    stateMainPressedSpecs,
    stateMainActiveSpecs,
    stateMainLoadingSpecs,
    stateMainDisabledSpecs,

    stateOnMainSpecs,
    stateOnMainHoveredSpecs,
    stateOnMainFocusedSpecs,
    stateOnMainPressedSpecs,
    stateOnMainActiveSpecs,
    stateOnMainLoadingSpecs,
    stateOnMainDisabledSpecs,

    stateContainerSpecs,
    stateContainerHoveredSpecs,
    stateContainerFocusedSpecs,
    stateContainerPressedSpecs,
    stateContainerActiveSpecs,
    stateContainerDisabledSpecs,
    stateContainerLoadingSpecs,

    stateOnContainerSpecs,
    stateOnContainerHoveredSpecs,
    stateOnContainerFocusedSpecs,
    stateOnContainerPressedSpecs,
    stateOnContainerActiveSpecs,
    stateOnContainerDisabledSpecs,
    stateOnContainerLoadingSpecs,
  };
};
