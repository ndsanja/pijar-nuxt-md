import { ElevatedButtonSpecsType } from '../../../types/ButtonSpecsType';
import { defaultButtonElevatedSpecs } from './default';

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
};

type Specs = {
  override?: ElevatedButtonSpecsType;
  props?: ElevatedButtonSpecsType;
};

export const buttonElevatedSpecs = (specs: Specs, props: Props) => {
  const { color, endIcon, startIcon, size, variant } = props;
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

  return buttonElevatedSpecs;
};
