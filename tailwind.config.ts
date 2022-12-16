import type { Config } from 'tailwindcss';
import { typography } from './md/core/styles/typography';
import { elevation } from './md/core/styles/elevation';
import { md } from './md/plugin';
const defaultTheme = require('tailwindcss/defaultTheme');

const srcDir = '.';

export default <Partial<Config>>(<unknown>{
  content: [
    `${srcDir}/md/**/*.{vue,js,ts}`,
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(var(--md-sys-color-primary-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-primary-dark) / <alpha-value>)',
          container: {
            light:
              'rgb(var(--md-sys-color-primary-container-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-primary-container-dark) / <alpha-value>)',
          },
        },
        secondary: {
          light: 'rgb(var(--md-sys-color-secondary-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-secondary-dark) / <alpha-value>)',
          container: {
            light:
              'rgb(var(--md-sys-color-secondary-container-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-secondary-container-dark) / <alpha-value>)',
          },
        },
        tertiary: {
          light: 'rgb(var(--md-sys-color-tertiary-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-tertiary-dark) / <alpha-value>)',
          container: {
            light:
              'rgb(var(--md-sys-color-tertiary-container-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-tertiary-container-dark) / <alpha-value>)',
          },
        },
        error: {
          light: 'rgb(var(--md-sys-color-error-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-error-dark) / <alpha-value>)',
          container: {
            light:
              'rgb(var(--md-sys-color-error-container-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-error-container-dark) / <alpha-value>)',
          },
        },
        outline: {
          light: 'rgb(var(--md-sys-color-outline-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-outline-dark) / <alpha-value>)',
          variant: {
            light:
              'rgb(var(--md-sys-color-outline-variant-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-outline-variant-dark) / <alpha-value>)',
          },
        },
        background: {
          light: 'rgb(var(--md-sys-color-background-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-background-dark) / <alpha-value>)',
        },
        surface: {
          light: 'rgb(var(--md-sys-color-surface-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-surface-dark) / <alpha-value>)',
          variant: {
            light:
              'rgb(var(--md-sys-color-surface-variant-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-surface-variant-dark) / <alpha-value>)',
          },
          tint: {
            light:
              'rgb(var(--md-sys-color-surface-tint-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-surface-tint-dark) / <alpha-value>)',
          },
        },
        inverse: {
          primary: {
            light: 'rgb(var(--md-sys-color-inverse-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-inverse-dark) / <alpha-value>)',
          },
          surface: {
            light:
              'rgb(var(--md-sys-color-inverse-surface-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-inverse-surface-dark) / <alpha-value>)',
          },
          on: {
            surface: {
              light:
                'rgb(var(--md-sys-color-inverse-on-surface-light) / <alpha-value>)',
              dark: 'rgb(var(--md-sys-color-inverse-on-surface-dark) / <alpha-value>)',
            },
          },
        },
        shadow: {
          light: 'rgb(var(--md-sys-color-shadow-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-shadow-dark) / <alpha-value>)',
        },
        scrim: {
          light: 'rgb(var(--md-sys-color-scrim-light) / <alpha-value>)',
          dark: 'rgb(var(--md-sys-color-scrim-dark) / <alpha-value>)',
        },
        on: {
          primary: {
            light: 'rgb(var(--md-sys-color-on-primary-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-on-primary-dark) / <alpha-value>)',
            container: {
              light:
                'rgb(var(--md-sys-color-on-primary-container-light) / <alpha-value>)',
              dark: 'rgb(var(--md-sys-color-on-primary-container-dark) / <alpha-value>)',
            },
          },
          secondary: {
            light:
              'rgb(var(--md-sys-color-on-secondary-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-on-secondary-dark) / <alpha-value>)',
            container: {
              light:
                'rgb(var(--md-sys-color-on-secondary-container-light) / <alpha-value>)',
              dark: 'rgb(var(--md-sys-color-on-secondary-container-dark) / <alpha-value>)',
            },
          },
          tertiary: {
            light: 'rgb(var(--md-sys-color-on-tertiary-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-on-tertiary-dark) / <alpha-value>)',
            container: {
              light:
                'rgb(var(--md-sys-color-on-tertiary-container-light) / <alpha-value>)',
              dark: 'rgb(var(--md-sys-color-on-tertiary-container-dark) / <alpha-value>)',
            },
          },
          error: {
            light: 'rgb(var(--md-sys-color-on-error-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-on-error-dark) / <alpha-value>)',
            container: {
              light:
                'rgb(var(--md-sys-color-on-error-container-light) / <alpha-value>)',
              dark: 'rgb(var(--md-sys-color-on-error-container-dark) / <alpha-value>)',
            },
          },
          background: {
            light:
              'rgb(var(--md-sys-color-on-background-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-on-background-dark) / <alpha-value>)',
          },
          surface: {
            light: 'rgb(var(--md-sys-color-on-surface-light) / <alpha-value>)',
            dark: 'rgb(var(--md-sys-color-on-surface-dark) / <alpha-value>)',
            variant: {
              light:
                'rgb(var(--md-sys-color-on-surface-variant-light) / <alpha-value>)',
              dark: 'rgb(var(--md-sys-color-on-surface-variant-dark) / <alpha-value>)',
            },
          },
        },
      },

      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        brand: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        'display-large': typography.md.sys.typescale.display.large.weight,
        'display-medium': typography.md.sys.typescale.display.medium.weight,
        'display-small': typography.md.sys.typescale.display.small.weight,

        'headline-large': typography.md.sys.typescale.headline.large.weight,
        'headline-medium': typography.md.sys.typescale.headline.medium.weight,
        'headline-small': typography.md.sys.typescale.headline.small.weight,

        'body-large': typography.md.sys.typescale.body.large.weight,
        'body-medium': typography.md.sys.typescale.body.medium.weight,
        'body-small': typography.md.sys.typescale.body.small.weight,

        'label-large': typography.md.sys.typescale.label.large.weight,
        'label-medium': typography.md.sys.typescale.label.medium.weight,
        'label-small': typography.md.sys.typescale.label.small.weight,
        'title-large': typography.md.sys.typescale.title.large.weight,

        'title-medium': typography.md.sys.typescale.title.medium.weight,
        'title-small': typography.md.sys.typescale.title.small.weight,
      },
      fontSize: {
        'display-large': typography.md.sys.typescale.display.large.size,
        'display-medium': typography.md.sys.typescale.display.medium.size,
        'display-small': typography.md.sys.typescale.display.small.size,

        'headline-large': typography.md.sys.typescale.headline.large.size,
        'headline-medium': typography.md.sys.typescale.headline.medium.size,
        'headline-small': typography.md.sys.typescale.headline.small.size,

        'body-large': typography.md.sys.typescale.body.large.size,
        'body-medium': typography.md.sys.typescale.body.medium.size,
        'body-small': typography.md.sys.typescale.body.small.size,

        'label-large': typography.md.sys.typescale.label.large.size,
        'label-medium': typography.md.sys.typescale.label.medium.size,
        'label-small': typography.md.sys.typescale.label.small.size,

        'title-large': typography.md.sys.typescale.title.large.size,
        'title-medium': typography.md.sys.typescale.title.medium.size,
        'title-small': typography.md.sys.typescale.title.small.size,
      },

      lineHeight: {
        'display-large':
          typography.md.sys.typescale.display.large['line-height'],
        'display-medium':
          typography.md.sys.typescale.display.medium['line-height'],
        'display-small':
          typography.md.sys.typescale.display.small['line-height'],

        'headline-large':
          typography.md.sys.typescale.headline.large['line-height'],
        'headline-medium':
          typography.md.sys.typescale.headline.medium['line-height'],
        'headline-small':
          typography.md.sys.typescale.headline.small['line-height'],

        'body-large': typography.md.sys.typescale.body.large['line-height'],
        'body-medium': typography.md.sys.typescale.body.medium['line-height'],
        'body-small': typography.md.sys.typescale.body.small['line-height'],

        'label-large': typography.md.sys.typescale.label.large['line-height'],
        'label-medium': typography.md.sys.typescale.label.medium['line-height'],
        'label-small': typography.md.sys.typescale.label.small['line-height'],

        'title-large': typography.md.sys.typescale.title.large['line-height'],
        'title-medium': typography.md.sys.typescale.title.medium['line-height'],
        'title-small': typography.md.sys.typescale.title.small['line-height'],
      },
      letterSpacing: {
        'display-large': typography.md.sys.typescale.display.large.tracking,
        'display-medium': typography.md.sys.typescale.display.medium.tracking,
        'display-small': typography.md.sys.typescale.display.small.tracking,

        'headline-large': typography.md.sys.typescale.headline.large.tracking,
        'headline-medium': typography.md.sys.typescale.headline.medium.tracking,
        'headline-small': typography.md.sys.typescale.headline.small.tracking,

        'body-large': typography.md.sys.typescale.body.large.tracking,
        'body-medium': typography.md.sys.typescale.body.medium.tracking,
        'body-small': typography.md.sys.typescale.body.small.tracking,

        'label-large': typography.md.sys.typescale.label.large.tracking,
        'label-medium': typography.md.sys.typescale.label.medium.tracking,
        'label-small': typography.md.sys.typescale.label.small.tracking,

        'title-large': typography.md.sys.typescale.title.large.tracking,
        'title-medium': typography.md.sys.typescale.title.medium.tracking,
        'title-small': typography.md.sys.typescale.title.small.tracking,
      },
      boxShadow: {
        'elevation-0-light': elevation.md.sys.elevation.level[0].light,
        'elevation-1-light': elevation.md.sys.elevation.level[1].light,
        'elevation-2-light': elevation.md.sys.elevation.level[2].light,
        'elevation-3-light': elevation.md.sys.elevation.level[3].light,
        'elevation-4-light': elevation.md.sys.elevation.level[4].light,
        'elevation-5-light': elevation.md.sys.elevation.level[5].light,
        'elevation-0-dark': elevation.md.sys.elevation.level[0].dark,
        'elevation-1-dark': elevation.md.sys.elevation.level[1].dark,
        'elevation-2-dark': elevation.md.sys.elevation.level[2].dark,
        'elevation-3-dark': elevation.md.sys.elevation.level[3].dark,
        'elevation-4-dark': elevation.md.sys.elevation.level[4].dark,
        'elevation-5-dark': elevation.md.sys.elevation.level[5].dark,
      },
      opacity: {
        'state-hover': '.08',
        'state-focus': '.12',
        'state-pressed': '.12',
        'state-dragged': '.16',
      },
    },
  },
});
