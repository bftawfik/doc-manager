export const selectedObjectFromArray = <T extends { id: number }>(
  array: T[]
) => {
  const selectedObject = array.reduce((prev, current) => {
    return { ...prev, [current.id]: true };
  }, {});
  return selectedObject;
};
