export const animalAgeFormatting = (age) => {
  const numAge = typeof age === 'string' ? parseInt(age) : age;
  if (typeof numAge !== 'number' || numAge < 0 || isNaN(numAge)) return '';
  
  const lastDigit = numAge % 10;
  const lastTwoDigits = numAge % 100;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${numAge} лет`;
  }
  
  if (lastDigit === 1) {
    return `${numAge} год`;
  }
  
  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${numAge} года`;
  }
  
  return `${numAge} лет`;
}