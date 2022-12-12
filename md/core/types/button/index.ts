export type ButtonPropsType = {
  variant?: 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  startIcon?: any;
  endIcon?: any;
  active?: boolean;
  loading?: boolean;
  specs?: ButtonSpecsType;
};

export type ButtonSpecsType = {
  variant?: {
    base?: {
      container?: string;
      labelText?: string;
      icon?: string;
    };
    filled?: FilledButtonSpecsType;
    elevated?: {
      container?: string;
      labelText?: string;
      icon?: string;
    };
    tonal?: {
      container?: string;
      labelText?: string;
      icon?: string;
    };
    outlined?: {
      container?: string;
      labelText?: string;
      icon?: string;
    };
    text?: {
      container?: string;
      labelText?: string;
      icon?: string;
    };
  };
};

export type ButtonType = {
  container?: string;
  labelText?: string;
  icon?: string;
};

export type FilledButtonSpecsType = {
  container?: string;
  labelText?: string;
  icon?: string;
};

export type ElevatedButtonSpecsType = {
  container?: string;
  labelText?: string;
  icon?: string;
};

export type OutlinedButtonSpecsType = {
  container?: string;
  labelText?: string;
  icon?: string;
};
