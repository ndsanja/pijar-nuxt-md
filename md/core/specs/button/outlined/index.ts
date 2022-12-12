import { createTheme } from '../../../createTheme';
import {
  OutlinedButtonSpecsType,
  ButtonPropsType,
} from '../../../types/button';
import { defaultButtonOutlinedSpecs } from './defaultOutlined';

const theme = createTheme();
const overrideSpecs = theme.components.button.variant.filled;

type Specs = {
  props?: OutlinedButtonSpecsType;
};

export const buttonOutlinedSpecs = (specs: Specs, props: ButtonPropsType) => {
  const { color, endIcon, startIcon, size, variant, active, loading } = props;
  const defaultSpecs = defaultButtonOutlinedSpecs({
    color,
    endIcon,
    size,
    startIcon,
    variant,
    active,
    loading,
  });
  const buttonOutlinedSpecs: OutlinedButtonSpecsType = {
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

  return buttonOutlinedSpecs;
};
