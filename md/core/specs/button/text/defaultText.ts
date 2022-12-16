import { TextButtonSpecsType, ButtonPropsType } from '../../../types/button';

export const defaultButtonTextSpecs = (props: ButtonPropsType) => {
  const { active, color, endIcon, loading, size, startIcon, variant } = props;

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
  const specs: TextButtonSpecsType = {
    container: tw(`
    group/container
    Button
    variant-text
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
