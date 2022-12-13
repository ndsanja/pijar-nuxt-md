import { createTheme } from '../../../createTheme';
import { TonalButtonSpecsType, ButtonPropsType } from '../../../types/button';
import { defaultButtonTonalSpecs } from './defaultTonal';

const theme = createTheme();
const overrideSpecs = theme.components.button.variant.filled;

type Specs = {
  props?: TonalButtonSpecsType;
};

export const buttonTonalSpecs = (specs: Specs, props: ButtonPropsType) => {
  const { color, endIcon, startIcon, size, variant, active, loading } = props;
  const defaultSpecs = defaultButtonTonalSpecs({
    color,
    endIcon,
    size,
    startIcon,
    variant,
    active,
    loading,
  });
  const buttonTonalSpecs: TonalButtonSpecsType = {
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

  return buttonTonalSpecs;
};
