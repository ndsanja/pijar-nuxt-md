import { ButtonSpecs } from '../types/buttonSpecsType';

type Props = {
  variant?: 'filled' | 'tonal' | 'bordered' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
};

export const overrideButtonSpecs = (props: Props) => {
  const { color, endIcon, startIcon, size, variant } = props;
  const overrideButtonSpecs: ButtonSpecs = {};

  return overrideButtonSpecs;
};
