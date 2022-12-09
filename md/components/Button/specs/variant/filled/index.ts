import { FilledButtonSpecsType } from '../../../types/ButtonSpecsType';
import { defaultButtonFilledSpecs } from './default';

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
};

type Specs = {
  override?: FilledButtonSpecsType;
  props?: FilledButtonSpecsType;
};

export const buttonFilledSpecs = (specs: Specs, props: Props) => {
  const { color, endIcon, startIcon, size, variant } = props;
  const defaultSpecs = defaultButtonFilledSpecs({
    color,
    endIcon,
    size,
    startIcon,
    variant,
  });
  const buttonFilledSpecs: FilledButtonSpecsType = {
    container: tw(`
      ${defaultSpecs.container}
      ${specs.override?.container}
      ${specs.props?.container}
      `),
    labelText: tw(`
      ${defaultSpecs.labelText}
      ${specs.override?.labelText}
      ${specs.props?.labelText}
      `),
    icon: tw(`
      ${defaultSpecs.icon}
      ${specs.override?.icon}
      ${specs.props?.icon}
      `),
  };

  return buttonFilledSpecs;
};
