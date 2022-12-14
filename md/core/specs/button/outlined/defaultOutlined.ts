import {
  OutlinedButtonSpecsType,
  ButtonPropsType,
} from '../../../types/button';

export const defaultButtonOutlinedSpecs = (props: ButtonPropsType) => {
  const { active, color, endIcon, loading, size, startIcon, variant } = props;

  let btnColor = '';
  let btnColorActive = '';
  let btnColorLoading = '';

  switch (color) {
    case 'primary':
      btnColor = 'btn-outlined-primary';
      btnColorActive = 'btn-outlined-primary-active';
      btnColorLoading = 'btn-outlined-primary-loading';
      break;
    case 'secondary':
      btnColor = 'btn-outlined-secondary';
      btnColorActive = 'btn-outlined-secondary-active';
      btnColorLoading = 'btn-outlined-secondary-loading';
      break;
    case 'tertiary':
      btnColor = 'btn-outlined-tertiary';
      btnColorActive = 'btn-outlined-tertiary-active';
      btnColorLoading = 'btn-outlined-tertiary-loading';
      break;
    case 'error':
      btnColor = 'btn-outlined-error';
      btnColorActive = 'btn-outlined-error-active';
      btnColorLoading = 'btn-outlined-error-loading';
      break;

    default:
      btnColor = 'btn-outlined';
      btnColorActive = 'btn-outlined-active';
      btnColorLoading = 'btn-outlined-loading';
      break;
  }
  const specs: OutlinedButtonSpecsType = {
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
