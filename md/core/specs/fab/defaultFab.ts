import { FabPropsType, FabSpecsType } from '../../types/fab';
import { bgColors } from '../../utils/bgColors';
import { stateColors } from '../../utils/stateColors';
import { textColors } from '../../utils/textColors';

export const defaultFabSpecs = (props: FabPropsType) => {
  const { color, icon, size, active, loading } = props;

  const bgColor = bgColors(color);
  const textColor = textColors(color);
  const stateColor = stateColors(color);

  let bgDisabledSpecs =
    'disabled:bg-on-surface-light/[.12] dark:disabled:bg-on-surface-dark/[.12]';
  let textDisabledSpecs =
    'group-disabled/container:text-on-surface-light/[.38] dark:group-disabled/container:text-on-surface-dark/[.38]';

  const specs: FabSpecsType = {
    container: tw(`
    group/container

    relative
    overflow-hidden

    inline-flex
    items-center
    justify-center
    
    h-14
    w-14
    rounded-[16px]
    m-4
    
    ${size === 'small' ? 'h-10' : ''}
    ${size === 'medium' ? 'h-14' : ''}
    ${size === 'large' ? 'h-24' : ''}

    ${size === 'small' ? 'w-10' : ''}
    ${size === 'medium' ? 'w-14' : ''}
    ${size === 'large' ? 'w-24' : ''}
    
    ${size === 'small' ? 'rounded-[12px]' : ''}
    ${size === 'medium' ? 'rounded-[16px]' : ''}
    ${size === 'large' ? 'rounded-[28px]' : ''}

    ${size === 'small' ? '!m-4' : ''}
    ${size === 'medium' ? '!m-4' : ''}
    ${size === 'large' ? '!m-4' : ''}
 
    ${active ? bgColor.bgMainActiveSpecs : bgColor.bgContainerSpecs}
    ${loading ? bgColor.bgMainLoadingSpecs : ''}
    ${stateColor.stateMainSpecs}
    ${bgColor.bgOnContainerHoveredSpecs}
    ${bgColor.bgOnContainerFocusedSpecs}
    ${bgColor.bgOnContainerPressedSpecs}
    ${bgDisabledSpecs}
 
    disabled:cursor-not-allowed
    
    after:absolute
    hover:after:inset-0
    focus:after:inset-0
    active:after:inset-0
    
    hover:after:opacity-state-hover
    focus:after:opacity-state-focus
    active:after:opacity-20
    
    !shadow-elevation-3-light dark:!shadow-elevation-3-dark
    disabled:!shadow-elevation-0-light dark:disabled:!shadow-elevation-0-dark
    hover:!shadow-elevation-4-light dark:hover:!shadow-elevation-4-dark
    focus:!shadow-elevation-3-light dark:focus:!shadow-elevation-3-dark
    active:!shadow-elevation-3-light dark:active:!shadow-elevation-3-dark

    shadow-shadow-light/[0]
    dark:shadow-shadow-dark/[0]
    `),

    //

    icon: tw(`
    text-xl
    ${size === 'small' ? 'text-2xl' : ''}
    ${size === 'medium' ? 'text-2xl' : ''}
    ${size === 'large' ? 'text-4xl' : ''}
      
    ${active ? textColor.textOnMainActiveSpecs : textColor.textOnContainerSpecs}
    ${loading ? textColor.textOnMainLoadingSpecs : ''}
    ${textDisabledSpecs}
    `),
  };

  return specs;
};
