export const getRandomNumber = (min: number, max: number, excludeMin: number, excludeMax: number) => {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (num >= excludeMin && num <= excludeMax);
  return num;
};
