import { FilledButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonFilledSpecs = (props: ButtonPropsType) => {
  const { color, endIcon, size, startIcon, variant, active, loading } = props;

  let btnColor = '';
  let btnColorActive = '';
  let btnColorLoading = '';

  switch (color) {
    case 'primary':
      btnColor = 'btn-filled-primary';
      btnColorActive = 'btn-filled-primary-active';
      btnColorLoading = 'btn-filled-primary-loading';
      break;
    case 'secondary':
      btnColor = 'btn-filled-secondary';
      btnColorActive = 'btn-filled-secondary-active';
      btnColorLoading = 'btn-filled-secondary-loading';
      break;
    case 'tertiary':
      btnColor = 'btn-filled-tertiary';
      btnColorActive = 'btn-filled-tertiary-active';
      btnColorLoading = 'btn-filled-tertiary-loading';
      break;
    case 'error':
      btnColor = 'btn-filled-error';
      btnColorActive = 'btn-filled-error-active';
      btnColorLoading = 'btn-filled-error-loading';
      break;

    default:
      btnColor = 'btn-filled';
      btnColorActive = 'btn-filled-active';
      btnColorLoading = 'btn-filled-loading';
      break;
  }

  const specs: FilledButtonSpecsType = {
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
