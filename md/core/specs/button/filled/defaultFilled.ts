import { bgColors } from '../../../utils/bgColors';
import { textColors } from '../../../utils/textColors';
import { FilledButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonFilledSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;

  const bgColor = bgColors(color);
  const textColor = textColors(color);

  let bgDisabledSpecs =
    'disabled:bg-on-surface-light/[.12] dark:disabled:bg-on-surface-dark/[.12]';
  let textDisabledSpecs =
    'group-disabled/container:text-on-surface-light/[.38] dark:group-disabled/container:text-on-surface-dark/[.38]';

  const specs: FilledButtonSpecsType = {
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

    ${active ? bgColor.bgContainerActiveSpecs : bgColor.bgMainSpecs}
    ${loading ? bgColor.bgContainerLoadingSpecs : ''}
    ${bgColor.bgOnMainHoveredSpecs}
    ${bgColor.bgOnMainFocusedSpecs}
    ${bgColor.bgOnMainPressedSpecs}
    ${bgDisabledSpecs}
   
    
    disabled:cursor-not-allowed
    
    after:absolute
    
    
    focus:after:inset-0
    active:after:inset-0
    
    hover:after:opacity-state-hover
    focus:after:opacity-state-focus
    active:after:opacity-20
    
    shadow-elevation-0-light dark:shadow-elevation-0-dark
    disabled:shadow-elevation-0-light dark:disabled:shadow-elevation-0-dark
    hover:shadow-elevation-1-light dark:hover:shadow-elevation-1-dark
    focus:shadow-elevation-0-light dark:focus:shadow-elevation-0-dark
    active:shadow-elevation-0-light dark:active:shadow-elevation-0-dark

    shadow-shadow-light/20 dark:shadow-shadow-dark/20
    `),

    labelText: tw(`
    text-center
    font-brand
    text-label-large
    tracking-label-large
    leading-label-large
    font-label-large
    ${active ? textColor.textOnContainerActiveSpecs : textColor.textOnMainSpecs}
    ${loading ? textColor.textOnContainerLoadingSpecs : ''}
    ${textDisabledSpecs}
    `),

    icon: tw(`
    text-lg
    ${active ? textColor.textOnContainerActiveSpecs : textColor.textOnMainSpecs}
    ${loading ? textColor.textOnContainerLoadingSpecs : ''}
    ${textDisabledSpecs}
    `),
  };

  return specs;
};
