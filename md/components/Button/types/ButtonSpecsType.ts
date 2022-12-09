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
    text?: {
      container?: string;
      labelText?: string;
      icon?: string;
    };
  };
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
