export const textWithCommaSeprator = <T extends { name: string }[]>(arr: T) =>
  arr.map((item, ndx) => item.name + (ndx < arr.length - 1 ? ", " : ""));
