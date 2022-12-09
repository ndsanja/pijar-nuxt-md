export interface ButtonSpecs {
  layout?: ButtonSpecsLayout;
  design?: {
    container?: ButtonSpecsDesignContainer;
    labelText?: ButtonSpecsDesignLabelText;
    icon?: ButtonSpecsDesignIcon;
  };
  state?: {
    disabled?: {
      container?: ButtonSpecsStateDisabledContainer;
      labelText?: ButtonSpecsStateDisabledLabelText;
      icon?: ButtonSpecsStateDisabledLabelText;
    };
    hovered?: {
      container?: ButtonSpecsStateHoveredContainer;
      labelText?: ButtonSpecsStateHoveredLabelText;
      icon?: ButtonSpecsStateHoveredLabelText;
    };
    focused?: {
      container?: ButtonSpecsStateFocusedContainer;
      labelText?: ButtonSpecsStateFocusedLabelText;
      icon?: ButtonSpecsStateFocusedLabelText;
    };
    pressed?: {
      container?: ButtonSpecsStatePressedContainer;
      labelText?: ButtonSpecsStatePressedLabelText;
      icon?: ButtonSpecsStatePressedLabelText;
    };
  };
}

export interface ButtonSpecsLayout {
  height?: string;
  shape?: string;
  iconSize?: string;
  paddingRightLeft?: string;
  paddingLeftWithIcon?: string;
  paddingRightWithIcon?: string;
  paddingBetweenElement?: string;
  labelTextAlignment?: string;
}

export interface ButtonSpecsDesignContainer {
  color?: string;
  shadowColor?: string;
  elevation?: string;
}
export interface ButtonSpecsDesignLabelText {
  color?: string;
  font?: string;
  lineHeight?: string;
  size?: string;
  tracking?: string;
  weight?: string;
}
export interface ButtonSpecsDesignIcon {
  color?: string;
}

//Disabled
export interface ButtonSpecsStateDisabledContainer {
  color?: string;
  elevation?: string;
  opacity?: string;
}
export interface ButtonSpecsStateDisabledLabelText {
  color?: string;
  opacity?: string;
}
export interface ButtonSpecsStateDisabledIcon {
  color?: string;
  opacity?: string;
}

//Hovered
export interface ButtonSpecsStateHoveredContainer {
  color?: string;
  elevation?: string;
  opacity?: string;
}
export interface ButtonSpecsStateHoveredLabelText {
  color?: string;
}
export interface ButtonSpecsStateHoveredIcon {
  color?: string;
}

//Focused
export interface ButtonSpecsStateFocusedContainer {
  color?: string;
  elevation?: string;
  opacity?: string;
}
export interface ButtonSpecsStateFocusedLabelText {
  color?: string;
}
export interface ButtonSpecsStateFocusedIcon {
  color?: string;
}

//Pressed
export interface ButtonSpecsStatePressedContainer {
  color?: string;
  elevation?: string;
  opacity?: string;
}
export interface ButtonSpecsStatePressedLabelText {
  color?: string;
}
export interface ButtonSpecsStatePressedIcon {
  color?: string;
}
