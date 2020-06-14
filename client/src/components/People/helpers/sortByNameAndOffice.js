//First sort by office then sort by name

export const sortByNameAndOffice = arr => {
  // eslint-disable-next-line
  return arr.sort((item1, item2) => {
    if (item1.office > item2.office) return 1;
    if (item1.office < item2.office) return -1;
    if (item1.name > item2.name) return 1;
    if (item1.name < item2.name) return -1;
  });
};
