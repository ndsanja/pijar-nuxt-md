import type { Config } from 'tailwindcss';
import { tokens } from './utils/md/tokens';
import { themeColors } from './utils/md/theme';
const defaultTheme = require('tailwindcss/defaultTheme');

const colorsMode = themeColors(true);

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: { ...tokens, ...colorsMode },
    },
  },
};
