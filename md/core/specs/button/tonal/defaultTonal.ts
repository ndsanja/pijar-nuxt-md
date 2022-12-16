import { TonalButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonTonalSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;

  let btnColor = '';

  switch (color) {
    case 'primary':
      btnColor = 'color-primary';
      break;
    case 'secondary':
      btnColor = 'color-secondary';
      break;
    case 'tertiary':
      btnColor = 'color-tertiary';
      break;
    case 'error':
      btnColor = 'color-error';
      break;

    default:
      btnColor = '';
      break;
  }

  const specs: TonalButtonSpecsType = {
    container: tw(`
    group/container
    Button
    variant-tonal
    ${startIcon ? 'icon-start' : ''}
    ${endIcon ? 'icon-end' : ''}
    ${btnColor}
    ${active ? '--active' : ''}
    ${loading ? '--loading' : ''}
    `),

    labelText: tw(`
    Button__label
    `),

    icon: tw(`
    Button__icon
    `),
  };

  return specs;
};
