export const formatDate = (date: unknown) => {
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  if (typeof date === 'string') {
    const newDate = new Date(date);
    const month = padTo2Digits(newDate.getMonth() + 1);
    const year = newDate.getFullYear();

    return [month, year].join('.');
  }

  return null;
};
