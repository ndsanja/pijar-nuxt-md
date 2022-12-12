import type { Config } from 'tailwindcss';
import { themeColors } from './md/core/styles/colors';
import { typography } from './md/core/styles/typography';
import { elevation } from './md/core/styles/elevation';
const defaultTheme = require('tailwindcss/defaultTheme');

const colorsMode = themeColors(true).md.sys.color;
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
          light: colorsMode.primary.light,
          dark: colorsMode.primary.dark,
          container: {
            light: colorsMode.primary.container.light,
            dark: colorsMode.primary.container.dark,
          },
        },
        secondary: {
          light: colorsMode.secondary.light,
          dark: colorsMode.secondary.dark,
          container: {
            light: colorsMode.secondary.container.light,
            dark: colorsMode.secondary.container.dark,
          },
        },
        tertiary: {
          light: colorsMode.tertiary.light,
          dark: colorsMode.tertiary.dark,
          container: {
            light: colorsMode.tertiary.container.light,
            dark: colorsMode.tertiary.container.dark,
          },
        },
        error: {
          light: colorsMode.error.light,
          dark: colorsMode.error.dark,
          container: {
            light: colorsMode.error.container.light,
            dark: colorsMode.error.container.dark,
          },
        },
        outline: {
          light: colorsMode.outline.light,
          dark: colorsMode.outline.dark,
          variant: {
            light: colorsMode.outline.variant.light,
            dark: colorsMode.outline.variant.dark,
          },
        },
        background: {
          light: colorsMode.background.light,
          dark: colorsMode.background.dark,
        },
        surface: {
          light: colorsMode.surface.light,
          dark: colorsMode.surface.dark,
          variant: {
            light: colorsMode.surface.variant.light,
            dark: colorsMode.surface.variant.dark,
          },
          tint: {
            light: colorsMode.surface.tint.light,
            dark: colorsMode.surface.tint.dark,
          },
        },
        inverse: {
          primary: {
            light: colorsMode.inverse.primary.light,
            dark: colorsMode.inverse.primary.dark,
          },
          surface: {
            light: colorsMode.inverse.surface.light,
            dark: colorsMode.inverse.surface.dark,
          },
          on: {
            surface: {
              light: colorsMode.inverse.on.surface.light,
              dark: colorsMode.inverse.on.surface.dark,
            },
          },
        },
        shadow: {
          light: colorsMode.shadow.light,
          dark: colorsMode.shadow.dark,
        },
        scrim: {
          light: colorsMode.scrim.light,
          dark: colorsMode.scrim.dark,
        },
        on: {
          primary: {
            light: colorsMode.on.primary.light,
            dark: colorsMode.on.primary.dark,
            container: {
              light: colorsMode.on.primary.container.light,
              dark: colorsMode.on.primary.container.dark,
            },
          },
          secondary: {
            light: colorsMode.on.secondary.light,
            dark: colorsMode.on.secondary.dark,
            container: {
              light: colorsMode.on.secondary.container.light,
              dark: colorsMode.on.secondary.container.dark,
            },
          },
          tertiary: {
            light: colorsMode.on.tertiary.light,
            dark: colorsMode.on.tertiary.dark,
            container: {
              light: colorsMode.on.tertiary.container.light,
              dark: colorsMode.on.tertiary.container.dark,
            },
          },
          error: {
            light: colorsMode.on.error.light,
            dark: colorsMode.on.error.dark,
            container: {
              light: colorsMode.on.error.container.light,
              dark: colorsMode.on.error.container.dark,
            },
          },
          background: {
            light: colorsMode.on.background.light,
            dark: colorsMode.on.background.dark,
          },
          surface: {
            light: colorsMode.on.surface.light,
            dark: colorsMode.on.surface.dark,
            variant: {
              light: colorsMode.on.surface.variant.light,
              dark: colorsMode.on.surface.variant.dark,
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
