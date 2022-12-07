export const specs = {
  layout: {
    height: '',
    shape: '',
    iconSize: '',
    paddingLeft: '',
    paddingRight: '',
    paddingLeftWithIcon: '',
    paddingRightWithIcon: '',
    paddingBetweenElement: '',
    labelTextAlignment: '',
  },
  design: {
    container: {
      color: '',
      shadowColor: '',
      elevation: '',
    },
    labelText: {
      color: '',
      font: '',
      lineHeight: '',
      size: '',
      tracking: '',
      weight: '',
    },
    icon: {
      color: '',
    },
  },
};

export interface ButtonSpecs {
  layout?: ButtonSpecsLayout;
  design?: {
    container?: ButtonSpecsDesignContainer;
    labelText?: ButtonSpecsDesignLabelText;
    icon?: ButtonSpecsDesignIcon;
  };
}

export interface ButtonSpecsLayout {
  height?: string;
  shape?: string;
  iconSize?: string;
  paddingLeft?: string;
  paddingRight?: string;
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
