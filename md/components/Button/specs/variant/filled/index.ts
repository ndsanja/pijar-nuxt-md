import { createTheme } from '~~/md/createTheme';
import { FilledButtonSpecsType, ButtonPropsType } from '../../../types';
import { defaultButtonFilledSpecs } from './defaultFilled';

const theme = createTheme();
const overrideSpecs = theme.components.button.variant.filled;

type Specs = {
  props?: FilledButtonSpecsType;
};

export const buttonFilledSpecs = (specs: Specs, props: ButtonPropsType) => {
  const { color, endIcon, startIcon, size, variant, active, loading } = props;
  const defaultSpecs = defaultButtonFilledSpecs({
    color,
    endIcon,
    size,
    startIcon,
    variant,
    active,
    loading,
  });
  const buttonFilledSpecs: FilledButtonSpecsType = {
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

  return buttonFilledSpecs;
};
