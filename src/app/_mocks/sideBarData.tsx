const handleButtonClick = (id: number) => {
  // eslint-disable-next-line no-console
  console.log(id);
};
export const databaseMenu = [
  {
    id: 1,
    title: "Holding",
    handler: () => handleButtonClick(1),
  },
  {
    id: 2,
    title: "Investmennts",
    handler: () => handleButtonClick(2),
  },
  {
    id: 3,
    title: "The MarQ",
    handler: () => handleButtonClick(3),
  },
  {
    id: 4,
    title: "Technology",
    handler: () => handleButtonClick(4),
  },
];
export const filesMenu = [
  {
    id: 1,
    title: "PDF",
    handler: () => handleButtonClick(1),
  },
  {
    id: 2,
    title: "Word",
    handler: () => handleButtonClick(2),
  },
  {
    id: 3,
    title: "Excel",
    handler: () => handleButtonClick(3),
  },
  {
    id: 4,
    title: "Powerpoint",
    handler: () => handleButtonClick(4),
  },
];
export const tagsMenu = [
  {
    id: 1,
    title: "Finantial",
    handler: () => handleButtonClick(1),
  },
  {
    id: 2,
    title: "Bills",
    handler: () => handleButtonClick(2),
  },
  {
    id: 3,
    title: "Informative",
    handler: () => handleButtonClick(3),
  },
  {
    id: 4,
    title: "contract",
    handler: () => handleButtonClick(4),
  },
  {
    id: 5,
    title: "new",
    handler: () => handleButtonClick(4),
  },
];
