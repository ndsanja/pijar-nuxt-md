import type { Config } from 'tailwindcss';
import { tokens } from './utils/md/tokens';
import { themeColors } from './utils/md/theme';
import { typography } from './md/themes/typography';
const defaultTheme = require('tailwindcss/defaultTheme');

const colorsMode = themeColors(true);
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
    },
    colors: { ...tokens, ...colorsMode },
  },
});
