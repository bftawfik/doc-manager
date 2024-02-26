export const dateFormmater = (
  date: string,
  separator: string,
  format: string
) => {
  if (!format || !separator || format !== "en-UK") return new Date(date);

  const dateArray = date.split(separator);
  return new Date(
    [dateArray[1], dateArray[0], ...dateArray.slice(2)].join(separator)
  );
};
