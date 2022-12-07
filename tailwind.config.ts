import type { Config } from 'tailwindcss';
import { tokens } from './utils/md/tokens';
import { themeColors } from './utils/md/theme';
const defaultTheme = require('tailwindcss/defaultTheme');

const colorsMode = themeColors(true);
const srcDir = '.';

export default <Partial<Config>>{
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
      },
      colors: { ...tokens, ...colorsMode },
    },
  },
};
