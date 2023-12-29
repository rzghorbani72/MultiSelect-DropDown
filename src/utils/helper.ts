export const selectedsList = (array: string[], item: string) => {
  const foundIndex = array.indexOf(item);
  if (foundIndex >= 0) {
    let newArray = [...array];
    newArray.splice(foundIndex, 1);
    return newArray;
  } else {
    return [item, ...array];
  }
};
