import { TextButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonTextSpecs = (props: ButtonPropsType) => {
  const { active, color, endIcon, loading, size, startIcon, variant } = props;

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
  const specs: TextButtonSpecsType = {
    container: tw(`
    group/container
    btn
    text
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
