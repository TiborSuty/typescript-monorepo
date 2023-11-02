/**
 * @description Sometimes, TypeScript doesn't have the whole context for the system you're working within.
 * When that happens, you can use this function to align the types with the system as you know it to be.
 *
 * */
export const mustFind = <T>(predicate: (t: T) => boolean, array: T[]): T => {
  const item = array.find(predicate);
  if (!item) throw new Error('Item not found');
  return item;
};
