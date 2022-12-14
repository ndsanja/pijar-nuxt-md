import { TonalButtonSpecsType, ButtonPropsType } from '../../../types/button';
import { bgColors } from '../../../utils/bgColors';
import { textColors } from '../../../utils/textColors';

export const defaultButtonTonalSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;

  let btnColor = '';
  let btnColorActive = '';
  let btnColorLoading = '';

  switch (color) {
    case 'primary':
      btnColor = 'btn-tonal-primary';
      btnColorActive = 'btn-tonal-primary-active';
      btnColorLoading = 'btn-tonal-primary-loading';
      break;
    case 'secondary':
      btnColor = 'btn-tonal-secondary';
      btnColorActive = 'btn-tonal-secondary-active';
      btnColorLoading = 'btn-tonal-secondary-loading';
      break;
    case 'tertiary':
      btnColor = 'btn-tonal-tertiary';
      btnColorActive = 'btn-tonal-tertiary-active';
      btnColorLoading = 'btn-tonal-tertiary-loading';
      break;
    case 'error':
      btnColor = 'btn-tonal-error';
      btnColorActive = 'btn-tonal-error-active';
      btnColorLoading = 'btn-tonal-error-loading';
      break;

    default:
      btnColor = 'btn-tonal';
      btnColorActive = 'btn-tonal-active';
      btnColorLoading = 'btn-tonal-loading';
      break;
  }

  const specs: TonalButtonSpecsType = {
    container: tw(`
    group/container
    btn
    ${startIcon ? 'btn-start-icon' : ''}
    ${endIcon ? 'btn-end-icon' : ''}
    ${btnColor}
    ${active ? btnColorActive : ''}
    ${loading ? btnColorLoading : ''}
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
