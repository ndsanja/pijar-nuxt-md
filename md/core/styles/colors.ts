import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from '../../../colorGenerator';
import hexRgb from 'hex-rgb';

// Get the theme from a hex color

export const generateColor = (color: string) => {
  const theme = themeFromSourceColor(argbFromHex(color), [
    {
      name: 'succes',
      value: argbFromHex('#ff0000'),
      blend: true,
    },
    {
      name: 'info',
      value: argbFromHex('#ff0000'),
      blend: true,
    },
    {
      name: 'warning',
      value: argbFromHex('#ff0000'),
      blend: true,
    },
    {
      name: 'danger',
      value: argbFromHex('#ff0000'),
      blend: true,
    },
  ]);

  const setCssVar = (variable: string, hex: number) => {
    const toRGB = hexRgb(hexFromArgb(hex));
    document.documentElement.style.setProperty(
      `${variable}`,
      `${toRGB.red} ${toRGB.green} ${toRGB.blue}`
    );
  };

  const argb = theme.schemes;

  const colorGenerator = {
    // LIGHT
    primaryLight: setCssVar('--md-sys-color-primary-light', argb.light.primary),
    onPrimaryLight: setCssVar(
      '--md-sys-color-on-primary-light',
      argb.light.onPrimary
    ),
    primaryContainerLight: setCssVar(
      '--md-sys-color-primary-container-light',
      argb.light.primaryContainer
    ),
    onPrimaryContainerLight: setCssVar(
      '--md-sys-color-on-primary-container-light',
      argb.light.onPrimaryContainer
    ),
    secondaryLight: setCssVar(
      '--md-sys-color-secondary-light',
      argb.light.secondary
    ),
    onSecondaryLight: setCssVar(
      '--md-sys-color-on-secondary-light',
      argb.light.onSecondary
    ),
    secondaryContainerLight: setCssVar(
      '--md-sys-color-secondary-container-light',
      argb.light.secondaryContainer
    ),
    onSecondaryContainerLight: setCssVar(
      '--md-sys-color-on-secondary-container-light',
      argb.light.onSecondaryContainer
    ),
    tertiaryLight: setCssVar(
      '--md-sys-color-tertiary-light',
      argb.light.tertiary
    ),
    onTertiaryLight: setCssVar(
      '--md-sys-color-on-tertiary-light',
      argb.light.onTertiary
    ),
    tertiaryContainerLight: setCssVar(
      '--md-sys-color-tertiary-container-light',
      argb.light.tertiaryContainer
    ),
    onTertiaryContainerLight: setCssVar(
      '--md-sys-color-on-tertiary-container-light',
      argb.light.onTertiaryContainer
    ),
    errorLight: setCssVar('--md-sys-color-error-light', argb.light.error),
    onErrorLight: setCssVar(
      '--md-sys-color-on-error-light',
      argb.light.onError
    ),
    errorContainerLight: setCssVar(
      '--md-sys-color-error-container-light',
      argb.light.errorContainer
    ),
    onErrorContainerLight: setCssVar(
      '--md-sys-color-on-error-container-light',
      argb.light.onErrorContainer
    ),
    outlineLight: setCssVar('--md-sys-color-outline-light', argb.light.outline),
    backgroundLight: setCssVar(
      '--md-sys-color-background-light',
      argb.light.background
    ),
    onBackgroundLight: setCssVar(
      '--md-sys-color-on-background-light',
      argb.light.onBackground
    ),
    surfaceLight: setCssVar('--md-sys-color-surface-light', argb.light.surface),
    onSurfaceLight: setCssVar(
      '--md-sys-color-on-surface-light',
      argb.light.onSurface
    ),
    surfaceVariantLight: setCssVar(
      '--md-sys-color-surface-variant-light',
      argb.light.surfaceVariant
    ),
    onSurfaceVariantLight: setCssVar(
      '--md-sys-color-on-surface-variant-light',
      argb.light.onSurfaceVariant
    ),
    inverseSurfaceLight: setCssVar(
      '--md-sys-color-inverse-surface-light',
      argb.light.inverseSurface
    ),
    inverseOnSurfaceLight: setCssVar(
      '--md-sys-color-inverse-on-surface-light',
      argb.light.inverseOnSurface
    ),
    inversePrimaryLight: setCssVar(
      '--md-sys-color-inverse-primary-light',
      argb.light.inversePrimary
    ),
    shadowLight: setCssVar('--md-sys-color-shadow-light', argb.light.shadow),
    surfaceTintLight: setCssVar(
      '--md-sys-color-surface-tint-light',
      argb.light.surface
    ),
    outlineVariantLight: setCssVar(
      '--md-sys-color-outline-variant-light',
      argb.light.outlineVariant
    ),
    scrimLight: setCssVar('--md-sys-color-scrim-light', argb.light.scrim),

    // DARK
    primaryDark: setCssVar('--md-sys-color-primary-dark', argb.dark.primary),
    onPrimaryDark: setCssVar(
      '--md-sys-color-on-primary-dark',
      argb.dark.onPrimary
    ),
    primaryContainerDark: setCssVar(
      '--md-sys-color-primary-container-dark',
      argb.dark.primaryContainer
    ),
    onPrimaryContainerDark: setCssVar(
      '--md-sys-color-on-primary-container-dark',
      argb.dark.onPrimaryContainer
    ),
    secondaryDark: setCssVar(
      '--md-sys-color-secondary-dark',
      argb.dark.secondary
    ),
    onSecondaryDark: setCssVar(
      '--md-sys-color-on-secondary-dark',
      argb.dark.onSecondary
    ),
    secondaryContainerDark: setCssVar(
      '--md-sys-color-secondary-container-dark',
      argb.dark.secondaryContainer
    ),
    onSecondaryContainerDark: setCssVar(
      '--md-sys-color-on-secondary-container-dark',
      argb.dark.onSecondaryContainer
    ),
    tertiaryDark: setCssVar('--md-sys-color-tertiary-dark', argb.dark.tertiary),
    onTertiaryDark: setCssVar(
      '--md-sys-color-on-tertiary-dark',
      argb.dark.onTertiary
    ),
    tertiaryContainerDark: setCssVar(
      '--md-sys-color-tertiary-container-dark',
      argb.dark.tertiaryContainer
    ),
    onTertiaryContainerDark: setCssVar(
      '--md-sys-color-on-tertiary-container-dark',
      argb.dark.onTertiaryContainer
    ),
    errorDark: setCssVar('--md-sys-color-error-dark', argb.dark.error),
    onErrorDark: setCssVar('--md-sys-color-on-error-dark', argb.dark.onError),
    errorContainerDark: setCssVar(
      '--md-sys-color-error-container-dark',
      argb.dark.errorContainer
    ),
    onErrorContainerDark: setCssVar(
      '--md-sys-color-on-error-container-dark',
      argb.dark.onErrorContainer
    ),
    outlineDark: setCssVar('--md-sys-color-outline-dark', argb.dark.outline),
    backgroundDark: setCssVar(
      '--md-sys-color-background-dark',
      argb.dark.background
    ),
    onBackgroundDark: setCssVar(
      '--md-sys-color-on-background-dark',
      argb.dark.onBackground
    ),
    surfaceDark: setCssVar('--md-sys-color-surface-dark', argb.dark.surface),
    onSurfaceDark: setCssVar(
      '--md-sys-color-on-surface-dark',
      argb.dark.onSurface
    ),
    surfaceVariantDark: setCssVar(
      '--md-sys-color-surface-variant-dark',
      argb.dark.surfaceVariant
    ),
    onSurfaceVariantDark: setCssVar(
      '--md-sys-color-on-surface-variant-dark',
      argb.dark.onSurfaceVariant
    ),
    inverseSurfaceDark: setCssVar(
      '--md-sys-color-inverse-surface-dark',
      argb.dark.inverseSurface
    ),
    inverseOnSurfaceDark: setCssVar(
      '--md-sys-color-inverse-on-surface-dark',
      argb.dark.inverseOnSurface
    ),
    inversePrimaryDark: setCssVar(
      '--md-sys-color-inverse-primary-dark',
      argb.dark.inversePrimary
    ),
    shadowDark: setCssVar('--md-sys-color-shadow-dark', argb.dark.shadow),
    surfaceTintDark: setCssVar(
      '--md-sys-color-surface-tint-dark',
      argb.dark.surface
    ),
    outlineVariantDark: setCssVar(
      '--md-sys-color-outline-variant-dark',
      argb.dark.outlineVariant
    ),
    scrimDark: setCssVar('--md-sys-color-scrim-dark', argb.dark.scrim),
  };
};

// const color = theme.schemes;
// export const themeColors = (isLight: boolean) => {
//   const themeMode = {
//     md: {
//       sys: {
//         color: {
//           primary: {
//             default: isLight
//               ? hexFromArgb(color.light.primary)
//               : hexFromArgb(color.dark.primary),
//             light: hexFromArgb(color.light.primary),
//             dark: hexFromArgb(color.dark.primary),
//             container: {
//               default: isLight
//                 ? hexFromArgb(color.light.primaryContainer)
//                 : hexFromArgb(color.dark.primaryContainer),
//               light: hexFromArgb(color.light.primaryContainer),
//               dark: hexFromArgb(color.dark.primaryContainer),
//             },
//           },
//           secondary: {
//             default: isLight
//               ? hexFromArgb(color.light.secondary)
//               : hexFromArgb(color.dark.secondary),
//             light: hexFromArgb(color.light.secondary),
//             dark: hexFromArgb(color.dark.secondary),
//             container: {
//               default: isLight
//                 ? hexFromArgb(color.light.secondaryContainer)
//                 : hexFromArgb(color.dark.secondaryContainer),
//               light: hexFromArgb(color.light.secondaryContainer),
//               dark: hexFromArgb(color.dark.secondaryContainer),
//             },
//           },
//           tertiary: {
//             default: isLight
//               ? hexFromArgb(color.light.tertiary)
//               : hexFromArgb(color.dark.tertiary),
//             light: hexFromArgb(color.light.tertiary),
//             dark: hexFromArgb(color.dark.tertiary),
//             container: {
//               default: isLight
//                 ? hexFromArgb(color.light.tertiaryContainer)
//                 : hexFromArgb(color.dark.tertiaryContainer),
//               light: hexFromArgb(color.light.tertiaryContainer),
//               dark: hexFromArgb(color.dark.tertiaryContainer),
//             },
//           },
//           error: {
//             default: isLight
//               ? hexFromArgb(color.light.error)
//               : hexFromArgb(color.dark.error),
//             light: hexFromArgb(color.light.error),
//             dark: hexFromArgb(color.dark.error),
//             container: {
//               default: isLight
//                 ? hexFromArgb(color.light.errorContainer)
//                 : hexFromArgb(color.dark.errorContainer),
//               light: hexFromArgb(color.light.errorContainer),
//               dark: hexFromArgb(color.dark.errorContainer),
//             },
//           },
//           outline: {
//             default: isLight
//               ? hexFromArgb(color.light.outline)
//               : hexFromArgb(color.dark.outline),
//             light: hexFromArgb(color.light.outline),
//             dark: hexFromArgb(color.dark.outline),
//             variant: {
//               default: isLight
//                 ? hexFromArgb(color.light.outlineVariant)
//                 : hexFromArgb(color.dark.outlineVariant),
//               light: hexFromArgb(color.light.outlineVariant),
//               dark: hexFromArgb(color.dark.outlineVariant),
//             },
//           },
//           background: {
//             default: isLight
//               ? hexFromArgb(color.light.background)
//               : hexFromArgb(color.dark.background),
//             light: hexFromArgb(color.light.background),
//             dark: hexFromArgb(color.dark.background),
//           },
//           surface: {
//             default: isLight
//               ? hexFromArgb(color.light.surface)
//               : hexFromArgb(color.dark.surface),
//             light: hexFromArgb(color.light.surface),
//             dark: hexFromArgb(color.dark.surface),
//             variant: {
//               default: isLight
//                 ? hexFromArgb(color.light.surfaceVariant)
//                 : hexFromArgb(color.dark.surfaceVariant),
//               light: hexFromArgb(color.light.surfaceVariant),
//               dark: hexFromArgb(color.dark.surfaceVariant),
//             },
//             tint: {
//               default: isLight
//                 ? hexFromArgb(color.light.surface)
//                 : hexFromArgb(color.dark.surface),
//               light: hexFromArgb(color.light.surface),
//               dark: hexFromArgb(color.dark.surface),
//             },
//           },
//           inverse: {
//             primary: {
//               default: isLight
//                 ? hexFromArgb(color.light.inversePrimary)
//                 : hexFromArgb(color.dark.inversePrimary),
//               light: hexFromArgb(color.light.inversePrimary),
//               dark: hexFromArgb(color.dark.inversePrimary),
//             },
//             surface: {
//               default: isLight
//                 ? hexFromArgb(color.light.inverseSurface)
//                 : hexFromArgb(color.dark.inverseSurface),
//               light: hexFromArgb(color.light.inverseSurface),
//               dark: hexFromArgb(color.dark.inverseSurface),
//             },
//             on: {
//               surface: {
//                 default: isLight
//                   ? hexFromArgb(color.light.inverseOnSurface)
//                   : hexFromArgb(color.dark.inverseOnSurface),
//                 light: hexFromArgb(color.light.inverseOnSurface),
//                 dark: hexFromArgb(color.dark.inverseOnSurface),
//               },
//             },
//           },
//           shadow: {
//             default: isLight
//               ? hexFromArgb(color.light.shadow)
//               : hexFromArgb(color.dark.shadow),
//             light: hexFromArgb(color.light.shadow),
//             dark: hexFromArgb(color.dark.shadow),
//           },
//           scrim: {
//             default: isLight
//               ? hexFromArgb(color.light.scrim)
//               : hexFromArgb(color.dark.scrim),
//             light: hexFromArgb(color.light.scrim),
//             dark: hexFromArgb(color.dark.scrim),
//           },
//           on: {
//             primary: {
//               default: isLight
//                 ? hexFromArgb(color.light.onPrimary)
//                 : hexFromArgb(color.dark.onPrimary),
//               light: hexFromArgb(color.light.onPrimary),
//               dark: hexFromArgb(color.dark.onPrimary),
//               container: {
//                 default: isLight
//                   ? hexFromArgb(color.light.onPrimaryContainer)
//                   : hexFromArgb(color.dark.onPrimaryContainer),
//                 light: hexFromArgb(color.light.onPrimaryContainer),
//                 dark: hexFromArgb(color.dark.onPrimaryContainer),
//               },
//             },
//             secondary: {
//               default: isLight
//                 ? hexFromArgb(color.light.onSecondary)
//                 : hexFromArgb(color.dark.onSecondary),
//               light: hexFromArgb(color.light.onSecondary),
//               dark: hexFromArgb(color.dark.onSecondary),
//               container: {
//                 default: isLight
//                   ? hexFromArgb(color.light.onSecondaryContainer)
//                   : hexFromArgb(color.dark.onSecondaryContainer),
//                 light: hexFromArgb(color.light.onSecondaryContainer),
//                 dark: hexFromArgb(color.dark.onSecondaryContainer),
//               },
//             },
//             tertiary: {
//               default: isLight
//                 ? hexFromArgb(color.light.onTertiary)
//                 : hexFromArgb(color.dark.onTertiary),
//               light: hexFromArgb(color.light.onTertiary),
//               dark: hexFromArgb(color.dark.onTertiary),
//               container: {
//                 default: isLight
//                   ? hexFromArgb(color.light.onTertiaryContainer)
//                   : hexFromArgb(color.dark.onTertiaryContainer),
//                 light: hexFromArgb(color.light.onTertiaryContainer),
//                 dark: hexFromArgb(color.dark.onTertiaryContainer),
//               },
//             },
//             error: {
//               default: isLight
//                 ? hexFromArgb(color.light.onError)
//                 : hexFromArgb(color.dark.onError),
//               light: hexFromArgb(color.light.onError),
//               dark: hexFromArgb(color.dark.onError),
//               container: {
//                 default: isLight
//                   ? hexFromArgb(color.light.onErrorContainer)
//                   : hexFromArgb(color.dark.onErrorContainer),
//                 light: hexFromArgb(color.light.onErrorContainer),
//                 dark: hexFromArgb(color.dark.onErrorContainer),
//               },
//             },
//             background: {
//               default: isLight
//                 ? hexFromArgb(color.light.onBackground)
//                 : hexFromArgb(color.dark.onBackground),
//               light: hexFromArgb(color.light.onBackground),
//               dark: hexFromArgb(color.dark.onBackground),
//             },
//             surface: {
//               default: isLight
//                 ? hexFromArgb(color.light.onSurface)
//                 : hexFromArgb(color.dark.onSurface),
//               light: hexFromArgb(color.light.onSurface),
//               dark: hexFromArgb(color.dark.onSurface),
//               variant: {
//                 default: isLight
//                   ? hexFromArgb(color.light.onSurfaceVariant)
//                   : hexFromArgb(color.dark.onSurfaceVariant),
//                 light: hexFromArgb(color.light.onSurfaceVariant),
//                 dark: hexFromArgb(color.dark.onSurfaceVariant),
//               },
//             },
//           },
//         },
//       },
//     },
//   };

//   return themeMode;
// };
