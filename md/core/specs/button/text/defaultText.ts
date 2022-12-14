import { TextButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonTextSpecs = (props: ButtonPropsType) => {
  const { active, color, endIcon, loading, size, startIcon, variant } = props;

  let btnColor = '';
  let btnColorActive = '';
  let btnColorLoading = '';

  switch (color) {
    case 'primary':
      btnColor = 'btn-text-primary';
      btnColorActive = 'btn-text-primary-active';
      btnColorLoading = 'btn-text-primary-loading';
      break;
    case 'secondary':
      btnColor = 'btn-text-secondary';
      btnColorActive = 'btn-text-secondary-active';
      btnColorLoading = 'btn-text-secondary-loading';
      break;
    case 'tertiary':
      btnColor = 'btn-text-tertiary';
      btnColorActive = 'btn-text-tertiary-active';
      btnColorLoading = 'btn-text-tertiary-loading';
      break;
    case 'error':
      btnColor = 'btn-text-error';
      btnColorActive = 'btn-text-error-active';
      btnColorLoading = 'btn-text-error-loading';
      break;

    default:
      btnColor = 'btn-text';
      btnColorActive = 'btn-text-active';
      btnColorLoading = 'btn-text-loading';
      break;
  }
  const specs: TextButtonSpecsType = {
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
