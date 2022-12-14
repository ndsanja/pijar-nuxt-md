import { bgColors } from '../../../utils/bgColors';
import { textColors } from '../../../utils/textColors';
import { stateColors } from '../../../utils/stateColors';
import { outlineColors } from '../../../utils/outlineColors';

import {
  OutlinedButtonSpecsType,
  ButtonPropsType,
} from '../../../types/button';

export const defaultButtonOutlinedSpecs = (props: ButtonPropsType) => {
  const { active, color, endIcon, loading, size, startIcon, variant } = props;

  const bgColor = bgColors(color);
  const textColor = textColors(color);
  const outlineColor = outlineColors(color);

  let outlineDisabledSpecs =
    'disabled:outline-on-surface-light/[.12] dark:disabled:outline-on-surface-dark/[.12]';
  let textDisabledSpecs =
    'group-disabled/container:text-on-surface-light/[.38] dark:group-disabled/container:text-on-surface-dark/[.38]';

  const specs: OutlinedButtonSpecsType = {
    container: tw(`
    group/container

    relative
    overflow-hidden

    inline-flex
    items-center
    justify-center
    
    h-10
    ${startIcon ? 'pr-6' : endIcon ? 'pl-6' : 'px-6'}
    ${startIcon ? 'pl-4' : ''}
    ${endIcon ? 'pr-4' : ''}
    space-x-2
    rounded-full
    outline outline-1
    outline-outline-light dark:outline-outline-dark
    
    ${active ? bgColor.bgContainerActiveSpecs : ''}
    ${loading ? outlineColor.outlineContainerLoadingSpecs : ''}
    ${bgColor.bgMainHoveredSpecs}
    ${bgColor.bgMainFocusedSpecs}
    ${bgColor.bgMainPressedSpecs}
    ${outlineDisabledSpecs}
    
    disabled:cursor-not-allowed

    after:absolute
    hover:after:inset-0
    focus:after:inset-0
    active:after:inset-0

    hover:after:opacity-state-hover
    focus:after:opacity-state-focus
    active:after:opacity-20

    shadow-elevation-0-light dark:shadow-elevation-0-dark
    shadow-shadow-light/20 dark:shadow-shadow-dark/20
    `),

    labelText: tw(`
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large

    ${active ? textColor.textOnContainerActiveSpecs : textColor.textMainSpecs}
    ${loading ? textColor.textOnContainerLoadingSpecs : ''}
    ${textDisabledSpecs}
    `),

    icon: tw(`
    text-lg
    ${active ? textColor.textOnContainerActiveSpecs : textColor.textMainSpecs}
    ${loading ? textColor.textOnContainerLoadingSpecs : ''}
    ${textDisabledSpecs}
    `),
  };

  return specs;
};
