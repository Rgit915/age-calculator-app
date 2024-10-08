export const validateDate = (day, month, year) => {
  const errors = {};
  const currentYear = new Date().getFullYear();

  // Validate day
  if (!day || day < 1 || day > 31) {
    errors.day = 'Must be a valid day';
  }

  // Validate month
  if (!month || month < 1 || month > 12) {
    errors.month = 'Must be a valid month';
  }

  // Validate year
  if (!year || year < 1900 || year > currentYear) {
    errors.year = 'Must be in the past';
  }

  return errors;
};