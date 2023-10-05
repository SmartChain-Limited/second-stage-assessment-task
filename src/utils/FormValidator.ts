// utils/formValidation.ts

export const validateInfoForm = (formData: any, setFormErrors: Function) => {
  let isValid = true;
  const errors: any = {};

  // Validation for Full Name
  if (!formData.fullName.trim()) {
    errors.fullName = "Full Name is required";
    isValid = false;
  }

  // Validation for Email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = "Invalid email address";
    isValid = false;
  }

  // Validation for Phone Number
  if (!formData.phoneNumber.trim()) {
    errors.phoneNumber = "Phone Number is required";
    isValid = false;
  }

  // Validation for Password
  if (!formData.password.trim()) {
    errors.password = "Password is required";
    isValid = false;
  }

  // Validation for Confirm Password
  if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = "Confirm Password is required";
    isValid = false;
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

// Location Validation

export const validateLocationForm = (
  residenceValue: string,
  cityValue: string,
  setFormErrors: Function
) => {
  let isValid = true;
  const errors = { residence: "", city: "" };

  if (!residenceValue) {
    errors.residence = "Country of Residence is required.";
    isValid = false;
  }

  if (!cityValue) {
    errors.city = "City/State of Residence is required.";
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};
