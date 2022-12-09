import { ButtonSpecs } from '../types/buttonSpecsType';

type Specs = {
  default: ButtonSpecs;
  override?: ButtonSpecs;
  props?: ButtonSpecs;
};

export const buttonSpecs = (specs: Specs) => {
  const buttonSpecs: ButtonSpecs = {
    layout: {
      height: specs.override?.layout?.height
        ? specs.override?.layout?.height
        : specs.props?.layout?.height
        ? specs.props?.layout?.height
        : specs.default.layout?.height,
      shape: specs.override?.layout?.shape
        ? specs.override?.layout?.shape
        : specs.props?.layout?.shape
        ? specs.props.layout?.shape
        : specs.default.layout?.shape,
      paddingRightLeft: specs.override?.layout?.paddingRightLeft
        ? specs.override?.layout?.paddingRightLeft
        : specs.props?.layout?.paddingRightLeft
        ? specs.props?.layout?.paddingRightLeft
        : specs.default.layout?.paddingRightLeft,
      paddingLeftWithIcon: specs.override?.layout?.paddingLeftWithIcon
        ? specs.override?.layout?.paddingLeftWithIcon
        : specs.props?.layout?.paddingLeftWithIcon
        ? specs.props?.layout?.paddingLeftWithIcon
        : specs.default.layout?.paddingLeftWithIcon,
      paddingRightWithIcon: specs.override?.layout?.paddingRightWithIcon
        ? specs.override?.layout?.paddingRightWithIcon
        : specs.props?.layout?.paddingRightWithIcon
        ? specs.props?.layout?.paddingRightWithIcon
        : specs.default.layout?.paddingRightWithIcon,
      paddingBetweenElement: specs.override?.layout?.paddingBetweenElement
        ? specs.override?.layout?.paddingBetweenElement
        : specs.props?.layout?.paddingBetweenElement
        ? specs.props?.layout?.paddingBetweenElement
        : specs.default.layout?.paddingBetweenElement,
      labelTextAlignment: specs.override?.layout?.labelTextAlignment
        ? specs.override?.layout?.labelTextAlignment
        : specs.props?.layout?.labelTextAlignment
        ? specs.props?.layout?.labelTextAlignment
        : specs.default.layout?.labelTextAlignment,
      iconSize: specs.override?.layout?.iconSize
        ? specs.override?.layout?.iconSize
        : specs.props?.layout?.iconSize
        ? specs.props?.layout?.iconSize
        : specs.default.layout?.iconSize,
    },

    design: {
      container: {
        color: specs.override?.design?.container?.color
          ? specs.override?.design?.container?.color
          : specs.props?.design?.container?.color
          ? specs.props?.design?.container?.color
          : specs.default?.design?.container?.color,
        elevation: specs.override?.design?.container?.elevation
          ? specs.override?.design?.container?.elevation
          : specs.props?.design?.container?.elevation
          ? specs.props?.design?.container?.elevation
          : specs.default?.design?.container?.elevation,
        shadowColor: specs.override?.design?.container?.shadowColor
          ? specs.override?.design?.container?.shadowColor
          : specs.props?.design?.container?.shadowColor
          ? specs.props?.design?.container?.shadowColor
          : specs.default?.design?.container?.shadowColor,
      },
      labelText: {
        color: specs.override?.design?.labelText?.color
          ? specs.override?.design?.labelText?.color
          : specs.props?.design?.labelText?.color
          ? specs.props?.design?.labelText?.color
          : specs.default?.design?.labelText?.color,
        font: specs.override?.design?.labelText?.font
          ? specs.override?.design?.labelText?.font
          : specs.props?.design?.labelText?.font
          ? specs.props?.design?.labelText?.font
          : specs.default?.design?.labelText?.font,
        size: specs.override?.design?.labelText?.size
          ? specs.override?.design?.labelText?.size
          : specs.props?.design?.labelText?.size
          ? specs.props?.design?.labelText?.size
          : specs.default?.design?.labelText?.size,
        weight: specs.override?.design?.labelText?.weight
          ? specs.override?.design?.labelText?.weight
          : specs.props?.design?.labelText?.weight
          ? specs.props?.design?.labelText?.weight
          : specs.default?.design?.labelText?.weight,
        lineHeight: specs.override?.design?.labelText?.lineHeight
          ? specs.override?.design?.labelText?.lineHeight
          : specs.props?.design?.labelText?.lineHeight
          ? specs.props?.design?.labelText?.lineHeight
          : specs.default?.design?.labelText?.lineHeight,
        tracking: specs.override?.design?.labelText?.tracking
          ? specs.override?.design?.labelText?.tracking
          : specs.props?.design?.labelText?.tracking
          ? specs.props?.design?.labelText?.tracking
          : specs.default?.design?.labelText?.tracking,
      },
      icon: {
        color: specs.override?.design?.icon?.color
          ? specs.override?.design?.icon?.color
          : specs.props?.design?.icon?.color
          ? specs.props?.design?.icon?.color
          : specs.default?.design?.icon?.color,
      },
    },
  };

  return buttonSpecs;
};
