export const getRandomColor = (colors?: string[]): string => {
  const defaultColors = [
    "#FFFFFF",
    "#F2F2F2",
    "#CCCCCC",
    "#999999",
    "#FF6666",
    "#66CC66",
    "#6666FF",
    "#FFFF66",
    "#FF66FF",
    "#66FFFF",
  ];
  const colorArray = colors && colors.length > 0 ? colors : defaultColors;
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
};
