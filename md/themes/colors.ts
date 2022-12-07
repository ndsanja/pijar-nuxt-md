import { token } from '~~/md/tokens/tokens';

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
            default: isLight ? '#7D5260' : '#EFB8C8',
            light: '#7D5260',
            dark: '#EFB8C8',
            container: {
              default: isLight ? '#FFD8E4' : '#633B48',
              light: '#FFD8E4',
              dark: '#633B48',
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
              default: isLight ? '#CAC4D0' : '#49454F',
              light: '#CAC4D0',
              dark: '#49454F',
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
              default: isLight ? '#6750A4' : '#D0BCFF',
              light: '#6750A4',
              dark: '#D0BCFF',
            },
          },
          inverse: {
            default: isLight ? '#D0BCFF' : '#6750A4',
            primary: {
              light: '#D0BCFF',
              dark: '#6750A4',
            },
            surface: {
              default: isLight ? '#313033' : '#E6E1E5',
              light: '#313033',
              dark: '#E6E1E5',
            },
            on: {
              surface: {
                default: isLight ? '#F4EFF4' : '#313033',
                light: '#F4EFF4',
                dark: '#313033',
              },
            },
          },
          shadow: {
            default: isLight ? '#000000' : '#000000',
            light: '#000000',
            dark: '#000000',
          },
          scrim: {
            default: isLight ? '#000000' : '#000000',
            light: '#000000',
            dark: '#000000',
          },
          on: {
            primary: {
              default: isLight ? color.primary[100] : color.primary[20],
              light: color.primary[100],
              dark: color.primary[20],
            },
            container: {
              default: isLight ? color.primary[10] : color.primary[90],
              light: color.primary[10],
              dark: color.primary[90],
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
              default: isLight ? '#FFFFFF' : '#492532',
              light: '#FFFFFF',
              dark: '#492532',
              container: {
                default: isLight ? '#31111D' : '#FFD8E4',
                light: '#31111D',
                dark: '#FFD8E4',
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
