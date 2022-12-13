export type FabPropsType = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'surface';
  icon?: any;
  active?: boolean;
  loading?: boolean;
  specs?: FabSpecsType;
};

export type FabSpecsType = {
  container?: string;
  icon?: string;
};

export type FabType = {
  container?: string;
  icon?: string;
};
