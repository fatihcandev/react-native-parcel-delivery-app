const validatePhoneNumber = (phoneNumber: string): boolean => {
  return phoneNumber.charAt(0) !== '0' && phoneNumber.length > 9;
};

export default validatePhoneNumber;
