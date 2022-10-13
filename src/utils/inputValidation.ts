export const inputValidation = (value: number | string) => {
  if (typeof value === 'number') {
    return value >= 0 ? Math.floor(value) : null;
  }

  if (typeof value === 'string') {
    const trimmedValue = value.trim();

    return trimmedValue.length ? trimmedValue : null;
  }

  return null;
};
