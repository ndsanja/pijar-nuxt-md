import { TonalButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonTonalSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;

  let btnColor = '';

  switch (color) {
    case 'primary':
      btnColor = 'primary';
      break;
    case 'secondary':
      btnColor = 'secondary';
      break;
    case 'tertiary':
      btnColor = 'tertiary';
      break;
    case 'error':
      btnColor = 'error';
      break;

    default:
      btnColor = '';
      break;
  }

  const specs: TonalButtonSpecsType = {
    container: tw(`
    group/container
    btn
    tonal
    ${startIcon ? 'start-icon' : ''}
    ${endIcon ? 'end-icon' : ''}
    ${btnColor}
    ${active ? 'active' : ''}
    ${loading ? 'loading' : ''}
    `),

    labelText: tw(`
    btn-label
    `),

    icon: tw(`
    btn-icon
    `),
  };

  return specs;
};
