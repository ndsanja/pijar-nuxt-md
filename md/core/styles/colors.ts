import { token } from '../tokens/tokens';
import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from '@material/material-color-utilities';

// Get the theme from a hex color
export const theme = themeFromSourceColor(argbFromHex('#0ea5e9'), [
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

const color = theme.schemes;
export const themeColors = (isLight: boolean) => {
  const themeMode = {
    md: {
      sys: {
        color: {
          primary: {
            default: isLight
              ? hexFromArgb(color.light.primary)
              : hexFromArgb(color.dark.primary),
            light: hexFromArgb(color.light.primary),
            dark: hexFromArgb(color.dark.primary),
            container: {
              default: isLight
                ? hexFromArgb(color.light.primaryContainer)
                : hexFromArgb(color.dark.primaryContainer),
              light: hexFromArgb(color.light.primaryContainer),
              dark: hexFromArgb(color.dark.primaryContainer),
            },
          },
          secondary: {
            default: isLight
              ? hexFromArgb(color.light.secondary)
              : hexFromArgb(color.dark.secondary),
            light: hexFromArgb(color.light.secondary),
            dark: hexFromArgb(color.dark.secondary),
            container: {
              default: isLight
                ? hexFromArgb(color.light.secondaryContainer)
                : hexFromArgb(color.dark.secondaryContainer),
              light: hexFromArgb(color.light.secondaryContainer),
              dark: hexFromArgb(color.dark.secondaryContainer),
            },
          },
          tertiary: {
            default: isLight
              ? hexFromArgb(color.light.tertiary)
              : hexFromArgb(color.dark.tertiary),
            light: hexFromArgb(color.light.tertiary),
            dark: hexFromArgb(color.dark.tertiary),
            container: {
              default: isLight
                ? hexFromArgb(color.light.tertiaryContainer)
                : hexFromArgb(color.dark.tertiaryContainer),
              light: hexFromArgb(color.light.tertiaryContainer),
              dark: hexFromArgb(color.dark.tertiaryContainer),
            },
          },
          error: {
            default: isLight
              ? hexFromArgb(color.light.error)
              : hexFromArgb(color.dark.error),
            light: hexFromArgb(color.light.error),
            dark: hexFromArgb(color.dark.error),
            container: {
              default: isLight
                ? hexFromArgb(color.light.errorContainer)
                : hexFromArgb(color.dark.errorContainer),
              light: hexFromArgb(color.light.errorContainer),
              dark: hexFromArgb(color.dark.errorContainer),
            },
          },
          outline: {
            default: isLight
              ? hexFromArgb(color.light.outline)
              : hexFromArgb(color.dark.outline),
            light: hexFromArgb(color.light.outline),
            dark: hexFromArgb(color.dark.outline),
            variant: {
              default: isLight
                ? hexFromArgb(color.light.outlineVariant)
                : hexFromArgb(color.dark.outlineVariant),
              light: hexFromArgb(color.light.outlineVariant),
              dark: hexFromArgb(color.dark.outlineVariant),
            },
          },
          background: {
            default: isLight
              ? hexFromArgb(color.light.background)
              : hexFromArgb(color.dark.background),
            light: hexFromArgb(color.light.background),
            dark: hexFromArgb(color.dark.background),
          },
          surface: {
            default: isLight
              ? hexFromArgb(color.light.surface)
              : hexFromArgb(color.dark.surface),
            light: hexFromArgb(color.light.surface),
            dark: hexFromArgb(color.dark.surface),
            variant: {
              default: isLight
                ? hexFromArgb(color.light.surfaceVariant)
                : hexFromArgb(color.dark.surfaceVariant),
              light: hexFromArgb(color.light.surfaceVariant),
              dark: hexFromArgb(color.dark.surfaceVariant),
            },
            tint: {
              default: isLight
                ? hexFromArgb(color.light.surface)
                : hexFromArgb(color.dark.surface),
              light: hexFromArgb(color.light.surface),
              dark: hexFromArgb(color.dark.surface),
            },
          },
          inverse: {
            primary: {
              default: isLight
                ? hexFromArgb(color.light.inversePrimary)
                : hexFromArgb(color.dark.inversePrimary),
              light: hexFromArgb(color.light.inversePrimary),
              dark: hexFromArgb(color.dark.inversePrimary),
            },
            surface: {
              default: isLight
                ? hexFromArgb(color.light.inverseSurface)
                : hexFromArgb(color.dark.inverseSurface),
              light: hexFromArgb(color.light.inverseSurface),
              dark: hexFromArgb(color.dark.inverseSurface),
            },
            on: {
              surface: {
                default: isLight
                  ? hexFromArgb(color.light.inverseOnSurface)
                  : hexFromArgb(color.dark.inverseOnSurface),
                light: hexFromArgb(color.light.inverseOnSurface),
                dark: hexFromArgb(color.dark.inverseOnSurface),
              },
            },
          },
          shadow: {
            default: isLight
              ? hexFromArgb(color.light.shadow)
              : hexFromArgb(color.dark.shadow),
            light: hexFromArgb(color.light.shadow),
            dark: hexFromArgb(color.dark.shadow),
          },
          scrim: {
            default: isLight
              ? hexFromArgb(color.light.scrim)
              : hexFromArgb(color.dark.scrim),
            light: hexFromArgb(color.light.scrim),
            dark: hexFromArgb(color.dark.scrim),
          },
          on: {
            primary: {
              default: isLight
                ? hexFromArgb(color.light.onPrimary)
                : hexFromArgb(color.dark.onPrimary),
              light: hexFromArgb(color.light.onPrimary),
              dark: hexFromArgb(color.dark.onPrimary),
              container: {
                default: isLight
                  ? hexFromArgb(color.light.onPrimaryContainer)
                  : hexFromArgb(color.dark.onPrimaryContainer),
                light: hexFromArgb(color.light.onPrimaryContainer),
                dark: hexFromArgb(color.dark.onPrimaryContainer),
              },
            },
            secondary: {
              default: isLight
                ? hexFromArgb(color.light.onSecondary)
                : hexFromArgb(color.dark.onSecondary),
              light: hexFromArgb(color.light.onSecondary),
              dark: hexFromArgb(color.dark.onSecondary),
              container: {
                default: isLight
                  ? hexFromArgb(color.light.onSecondaryContainer)
                  : hexFromArgb(color.dark.onSecondaryContainer),
                light: hexFromArgb(color.light.onSecondaryContainer),
                dark: hexFromArgb(color.dark.onSecondaryContainer),
              },
            },
            tertiary: {
              default: isLight
                ? hexFromArgb(color.light.onTertiary)
                : hexFromArgb(color.dark.onTertiary),
              light: hexFromArgb(color.light.onTertiary),
              dark: hexFromArgb(color.dark.onTertiary),
              container: {
                default: isLight
                  ? hexFromArgb(color.light.onTertiaryContainer)
                  : hexFromArgb(color.dark.onTertiaryContainer),
                light: hexFromArgb(color.light.onTertiaryContainer),
                dark: hexFromArgb(color.dark.onTertiaryContainer),
              },
            },
            error: {
              default: isLight
                ? hexFromArgb(color.light.onError)
                : hexFromArgb(color.dark.onError),
              light: hexFromArgb(color.light.onError),
              dark: hexFromArgb(color.dark.onError),
              container: {
                default: isLight
                  ? hexFromArgb(color.light.onErrorContainer)
                  : hexFromArgb(color.dark.onErrorContainer),
                light: hexFromArgb(color.light.onErrorContainer),
                dark: hexFromArgb(color.dark.onErrorContainer),
              },
            },
            background: {
              default: isLight
                ? hexFromArgb(color.light.onBackground)
                : hexFromArgb(color.dark.onBackground),
              light: hexFromArgb(color.light.onBackground),
              dark: hexFromArgb(color.dark.onBackground),
            },
            surface: {
              default: isLight
                ? hexFromArgb(color.light.onSurface)
                : hexFromArgb(color.dark.onSurface),
              light: hexFromArgb(color.light.onSurface),
              dark: hexFromArgb(color.dark.onSurface),
              variant: {
                default: isLight
                  ? hexFromArgb(color.light.onSurfaceVariant)
                  : hexFromArgb(color.dark.onSurfaceVariant),
                light: hexFromArgb(color.light.onSurfaceVariant),
                dark: hexFromArgb(color.dark.onSurfaceVariant),
              },
            },
          },
        },
      },
    },
  };

  return themeMode;
};
