import { buttonElevatedSpecs } from './elevated';
import { buttonFilledSpecs } from './filled';
import { buttonOutlinedSpecs } from './outlined';
import { ButtonPropsType, ButtonType } from '../../types/button';
import { buttonTonalSpecs } from './tonal';
import { buttonTextSpecs } from './text';

export const buttonSpecs = (props: ButtonPropsType) => {
  const buttonElevated = buttonElevatedSpecs(
    { props: props.specs?.variant?.elevated },
    {
      active: props.active,
      color: props.color,
      startIcon: props.startIcon,
      endIcon: props.endIcon,
      variant: props.variant,
      loading: props.loading,
      size: props.size,
    }
  );
  const buttonFilled = buttonFilledSpecs(
    { props: props.specs?.variant?.filled },
    {
      active: props.active,
      color: props.color,
      startIcon: props.startIcon,
      endIcon: props.endIcon,
      variant: props.variant,
      loading: props.loading,
      size: props.size,
    }
  );
  const buttonOutlined = buttonOutlinedSpecs(
    { props: props.specs?.variant?.filled },
    {
      active: props.active,
      color: props.color,
      startIcon: props.startIcon,
      endIcon: props.endIcon,
      variant: props.variant,
      loading: props.loading,
      size: props.size,
    }
  );
  const buttonTonal = buttonTonalSpecs(
    { props: props.specs?.variant?.filled },
    {
      active: props.active,
      color: props.color,
      startIcon: props.startIcon,
      endIcon: props.endIcon,
      variant: props.variant,
      loading: props.loading,
      size: props.size,
    }
  );
  const buttonText = buttonTextSpecs(
    { props: props.specs?.variant?.filled },
    {
      active: props.active,
      color: props.color,
      startIcon: props.startIcon,
      endIcon: props.endIcon,
      variant: props.variant,
      loading: props.loading,
      size: props.size,
    }
  );

  let buttonVariant: ButtonType = {};
  switch (props.variant) {
    case 'elevated':
      buttonVariant = buttonElevated;
      break;
    case 'filled':
      buttonVariant = buttonFilled;
      break;
    case 'outlined':
      buttonVariant = buttonOutlined;
      break;
    case 'tonal':
      buttonVariant = buttonTonal;
      break;
    case 'text':
      buttonVariant = buttonText;
      break;
    default:
      buttonVariant = buttonFilled;
      break;
  }

  const buttonSpecs: ButtonType = {
    container: buttonVariant.container,
    labelText: buttonVariant.labelText,
    icon: buttonVariant.icon,
  };

  return buttonSpecs;
};
