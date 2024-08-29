export const validateDate = (day, month, year) => {
  const errors = {};
  const currentYear = new Date().getFullYear();

  // Validate day
  if (!day || day < 1 || day > 31) {
    errors.day = 'Must be a valid day';
  }

  // Validate month
  if (!month || month < 1 || month >= 12) {
    errors.month = 'Must be a valid month';
  }

  // Validate year
  if (!year || year < 1900 || year > currentYear) {
    errors.year = 'Must be in the past';
  }

  // Validate the complete date
  if (day && month && year) {
    const date = new Date(`${year}-${month}-${day}`);
    // Check if the date is actually valid
    if (date.getDate() !== parseInt(day) || date.getMonth() + 1 !== parseInt(month) || date.getFullYear() !== parseInt(year)) {
      errors.date = 'Please enter a valid date';
    }
  }

  return errors;
};