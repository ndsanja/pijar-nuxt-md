import { createTheme } from '../../createTheme';
import { FabPropsType, FabSpecsType } from '../../types/fab';
import { defaultFabSpecs } from './defaultFab';

const theme = createTheme();
const overrideSpecs = theme.components.fab;

export const fabSpecs = (props: FabPropsType) => {
  const { color, icon, size, active, loading, specs } = props;
  const defaultSpecs = defaultFabSpecs({
    color,
    size,
    active,
    loading,
    icon,
    specs,
  });
  const fabSpecs: FabSpecsType = {
    container: tw(`
      ${defaultSpecs.container}
      ${overrideSpecs?.container}
      ${specs?.container}
      `),
    icon: tw(`
      ${defaultSpecs.icon}
      ${overrideSpecs?.icon}
      ${specs?.icon}
      `),
  };

  return fabSpecs;
};
