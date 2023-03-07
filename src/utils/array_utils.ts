export const removeElemByIndex = <T>(a: T[], index: number): T[] => {
  return [...a.slice(0, index), ...a.slice(index + 1)];
};
