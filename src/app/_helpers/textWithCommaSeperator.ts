export const textWithCommaSeprator = <T extends { title: string }[]>(arr: T) =>
  arr.map((item, ndx) => item.title + (ndx < arr.length - 1 ? ", " : ""));
