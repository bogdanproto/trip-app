export const handleFieldsErr = (fields: any, callback: any) => {
  let isError = false;
  const arrKeys = Object.keys(fields) as Array<keyof typeof fields>;

  arrKeys.forEach((key: any) => {
    if (fields[key] === '') {
      isError = true;
      callback((prevFieldsErr: any) => ({
        ...prevFieldsErr,
        [key]: `Field ${key} is required`,
      }));
    } else {
      callback((prevFieldsErr: any) => ({
        ...prevFieldsErr,
        [key]: '',
      }));
    }
  });

  if (fields.startDate && fields.endDate) {
    const isDateCorrect =
      new Date(fields.endDate).getTime() - new Date(fields.startDate).getTime();
    if (isDateCorrect < 0) {
      isError = true;
      callback((prevFieldsErr: any) => ({
        ...prevFieldsErr,
        endDate: 'End date cannot be less than the Start date.',
      }));
    } else {
      callback((prevFieldsErr: any) => ({
        ...prevFieldsErr,
        endDate: '',
      }));
    }
  }

  return isError;
};
