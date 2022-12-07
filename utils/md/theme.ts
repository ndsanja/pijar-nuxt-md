export const themeColors = (isLight: boolean) => {
  const themeMode = {
    md: {
      sys: {
        color: {
          primary: {
            default: isLight ? '#6750A4' : '#D0BCFF',
            light: '#6750A4',
            dark: '#D0BCFF',
            container: {
              default: isLight ? '#EADDFF' : '#4F378B',
              light: '#EADDFF',
              dark: '#4F378B',
            },
          },
          secondary: {
            default: isLight ? '#625B71' : '#CCC2DC',
            light: '#625B71',
            dark: '#CCC2DC',
            container: {
              default: isLight ? '#E8DEF8' : '#4A4458',
              light: '#E8DEF8',
              dark: '#4A4458',
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
            default: isLight ? '#B3261E' : '#F2B8B5',
            light: '#B3261E',
            dark: '#F2B8B5',
            container: {
              default: isLight ? '#F9DEDC' : '#8C1D18',
              light: '#F9DEDC',
              dark: '#8C1D18',
            },
          },
          outline: {
            default: isLight ? '#79747E' : '#938F99',
            light: '#79747E',
            dark: '#938F99',
            variant: {
              default: isLight ? '#CAC4D0' : '#49454F',
              light: '#CAC4D0',
              dark: '#49454F',
            },
          },
          background: {
            default: isLight ? '#FFFBFE' : '#1C1B1F',
            light: '#FFFBFE',
            dark: '#1C1B1F',
          },
          surface: {
            default: isLight ? '#FFFBFE' : '#1C1B1F',
            light: '#FFFBFE',
            dark: '#1C1B1F',
            variant: {
              default: isLight ? '#E7E0EC' : '#49454F',
              light: '#E7E0EC',
              dark: '#49454F',
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
              default: isLight ? '#FFFFFF' : '#381E72',
              light: '#FFFFFF',
              dark: '#381E72',
            },
            container: {
              default: isLight ? '#21005D' : '#EADDFF',
              light: '#21005D',
              dark: '#EADDFF',
            },
            secondary: {
              default: isLight ? '#FFFFFF' : '#332D41',
              light: '#FFFFFF',
              dark: '#332D41',
              container: {
                default: isLight ? '#1D192B' : '#E8DEF8',
                light: '#1D192B',
                dark: '#E8DEF8',
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
              default: isLight ? '#FFFFFF' : '#601410',
              light: '#FFFFFF',
              dark: '#601410',

              container: {
                default: isLight ? '#410E0B' : '#F9DEDC',
                light: '#410E0B',
                dark: '#F9DEDC',
              },
            },
            background: {
              default: isLight ? '#1C1B1F' : '#E6E1E5',
              light: '#1C1B1F',
              dark: '#E6E1E5',
            },
            surface: {
              default: isLight ? '#1C1B1F' : '#E6E1E5',
              light: '#1C1B1F',
              dark: '#E6E1E5',
              variant: {
                default: isLight ? '#49454F' : '#CAC4D0',
                light: '#49454F',
                dark: '#CAC4D0',
              },
            },
          },
        },
      },
    },
  };

  return themeMode;
};
