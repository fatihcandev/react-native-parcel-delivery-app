const validatePhoneNumber = (phoneNumber: string): boolean => {
  return phoneNumber.charAt(0) === '+' && phoneNumber.length > 12;
};

export default validatePhoneNumber;
