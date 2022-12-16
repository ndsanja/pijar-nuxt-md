import { FilledButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonFilledSpecs = (props: ButtonPropsType) => {
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

  const specs: FilledButtonSpecsType = {
    container: tw(`
    group/container
    btn
    filled
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
