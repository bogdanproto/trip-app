export const validateDateForm = () => {
  const restrictedDate = new Date();
  restrictedDate.setDate(restrictedDate.getDate() + 15);

  const minDate = new Date().toISOString().split('T')[0];
  const maxDate = restrictedDate.toISOString().split('T')[0];

  return { minDate, maxDate };
};
