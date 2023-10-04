interface ValidationHook {
    textError: string;
    emailError: string;
    passwordError: string;
    passwordMatch: string;
    isValidEmail: (email: string) => boolean;
    isValidPassword: (password: string) => boolean;
    validateField: (name: string, value: string, formData: FormData) => void;
  }
  
  export type {
    ValidationHook
  }