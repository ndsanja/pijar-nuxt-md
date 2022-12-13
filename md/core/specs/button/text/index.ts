import { createTheme } from '../../../createTheme';
import { TextButtonSpecsType, ButtonPropsType } from '../../../types/button';
import { defaultButtonTextSpecs } from './defaultText';

const theme = createTheme();
const overrideSpecs = theme.components.button.variant.filled;

type Specs = {
  props?: TextButtonSpecsType;
};

export const buttonTextSpecs = (specs: Specs, props: ButtonPropsType) => {
  const { color, endIcon, startIcon, size, variant, active, loading } = props;
  const defaultSpecs = defaultButtonTextSpecs({
    color,
    endIcon,
    size,
    startIcon,
    variant,
    active,
    loading,
  });
  const buttonTextSpecs: TextButtonSpecsType = {
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

  return buttonTextSpecs;
};
