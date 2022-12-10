import { createTheme } from '~~/md/createTheme';
import { ElevatedButtonSpecsType, ButtonPropsType } from '../../../types';
import { defaultButtonElevatedSpecs } from './defaultElevated';

const theme = createTheme();
const overrideSpecs = theme.components.button.variant.elevated;

type Specs = {
  props?: ElevatedButtonSpecsType;
};

export const buttonElevatedSpecs = (specs: Specs, props: ButtonPropsType) => {
  const { color, endIcon, startIcon, size, variant, active } = props;
  const defaultSpecs = defaultButtonElevatedSpecs({
    color,
    endIcon,
    size,
    startIcon,
    variant,
  });
  const buttonElevatedSpecs: ElevatedButtonSpecsType = {
    container: tw(`
      ${defaultSpecs.container}
      ${overrideSpecs?.container}
      ${specs.props?.container}
      `),
    labelText: tw(`
      ${defaultSpecs.labelText}
      ${overrideSpecs?.labelText}
      ${specs.props?.labelText}
      `),
    icon: tw(`
      ${defaultSpecs.icon}
      ${overrideSpecs?.icon}
      ${specs.props?.icon}
      `),
  };

  return buttonElevatedSpecs;
};
