export const tw = (classes?: string) => {
  return [
    classes
      ?.trim()
      .split(' ')
      .map((e) => e.trim().replaceAll(',', ''))
      .filter((e) => e !== '')
      .join(' '),
    ' ',
  ]?.join(' ');
};
