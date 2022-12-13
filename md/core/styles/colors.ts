import { token } from '../tokens/tokens';

const color = token.md.ref.palette;

export const themeColors = (isLight: boolean) => {
  const themeMode = {
    md: {
      sys: {
        color: {
          primary: {
            default: isLight ? color.primary[40] : color.primary[80],
            light: color.primary[40],
            dark: color.primary[80],
            container: {
              default: isLight ? color.primary[90] : color.primary[30],
              light: color.primary[90],
              dark: color.primary[30],
            },
          },
          secondary: {
            default: isLight ? color.secondary[40] : color.secondary[80],
            light: color.secondary[40],
            dark: color.secondary[80],
            container: {
              default: isLight ? color.secondary[90] : color.secondary[30],
              light: color.secondary[90],
              dark: color.secondary[30],
            },
          },
          tertiary: {
            default: isLight ? color.tertiary[40] : color.tertiary[80],
            light: color.tertiary[40],
            dark: color.tertiary[80],
            container: {
              default: isLight ? color.tertiary[90] : color.tertiary[30],
              light: color.tertiary[90],
              dark: color.tertiary[30],
            },
          },
          error: {
            default: isLight ? color.error[40] : color.error[80],
            light: color.error[40],
            dark: color.error[80],
            container: {
              default: isLight ? color.error[90] : color.error[30],
              light: color.error[90],
              dark: color.error[30],
            },
          },
          outline: {
            default: isLight
              ? color['neutral-variant'][50]
              : color['neutral-variant'][60],
            light: color['neutral-variant'][50],
            dark: color['neutral-variant'][60],
            variant: {
              default: isLight
                ? color['neutral-variant'][80]
                : color['neutral-variant'][30],
              light: color['neutral-variant'][80],
              dark: color['neutral-variant'][30],
            },
          },
          background: {
            default: isLight ? color.neutral[99] : color.neutral[10],
            light: color.neutral[99],
            dark: color.neutral[10],
          },
          surface: {
            default: isLight ? color.neutral[99] : color.neutral[10],
            light: color.neutral[99],
            dark: color.neutral[10],
            variant: {
              default: isLight
                ? color['neutral-variant'][90]
                : color['neutral-variant'][30],
              light: color['neutral-variant'][90],
              dark: color['neutral-variant'][30],
            },
            tint: {
              default: isLight ? color.primary[40] : color.primary[80],
              light: color.primary[40],
              dark: color.primary[80],
            },
          },
          inverse: {
            primary: {
              default: isLight ? color.primary[80] : color.primary[40],
              light: color.primary[80],
              dark: color.primary[40],
            },
            surface: {
              default: isLight ? color.neutral[20] : color.neutral[40],
              light: color.neutral[20],
              dark: color.neutral[40],
            },
            on: {
              surface: {
                default: isLight ? color.neutral[95] : color.neutral[20],
                light: color.neutral[95],
                dark: color.neutral[20],
              },
            },
          },
          shadow: {
            default: isLight ? color.neutral[0] : color.neutral[90],
            light: color.neutral[0],
            dark: color.neutral[90],
          },
          scrim: {
            default: isLight ? color.neutral[0] : color.neutral[0],
            light: color.neutral[0],
            dark: color.neutral[0],
          },
          on: {
            primary: {
              default: isLight ? color.primary[100] : color.primary[20],
              light: color.primary[100],
              dark: color.primary[20],
              container: {
                default: isLight ? color.primary[10] : color.primary[90],
                light: color.primary[10],
                dark: color.primary[90],
              },
            },
            secondary: {
              default: isLight ? color.secondary[100] : color.secondary[20],
              light: color.secondary[100],
              dark: color.secondary[20],
              container: {
                default: isLight ? color.secondary[10] : color.secondary[90],
                light: color.secondary[10],
                dark: color.secondary[90],
              },
            },
            tertiary: {
              default: isLight ? color.tertiary[100] : color.tertiary[20],
              light: color.tertiary[100],
              dark: color.tertiary[20],
              container: {
                default: isLight ? color.tertiary[10] : color.tertiary[90],
                light: color.tertiary[10],
                dark: color.tertiary[90],
              },
            },
            error: {
              default: isLight ? color.error[100] : color.error[20],
              light: color.error[100],
              dark: color.error[20],

              container: {
                default: isLight ? color.error[10] : color.error[90],
                light: color.error[10],
                dark: color.error[90],
              },
            },
            background: {
              default: isLight ? color.neutral[10] : color.neutral[90],
              light: color.neutral[10],
              dark: color.neutral[90],
            },
            surface: {
              default: isLight ? color.neutral[10] : color.neutral[90],
              light: color.neutral[10],
              dark: color.neutral[90],
              variant: {
                default: isLight
                  ? color['neutral-variant'][30]
                  : color['neutral-variant'][80],
                light: color['neutral-variant'][30],
                dark: color['neutral-variant'][80],
              },
            },
          },
        },
      },
    },
  };

  return themeMode;
};
