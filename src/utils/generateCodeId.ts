export const generateCodeId = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max + 1 - min));
