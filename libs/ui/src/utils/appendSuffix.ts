export const appendSuffix = (suffix: string, value: string | undefined) =>
  value ? `${value}-${suffix}` : '';
