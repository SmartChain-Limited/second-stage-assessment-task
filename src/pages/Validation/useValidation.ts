import { useState } from 'react';
import { User } from '../../type/user';

export function useValidation() {
    const [textError, setTextError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordMatch, setPasswordMatchError] = useState('');

    const isValidEmail = (email: string): boolean => {
        const isValid = /\S+@\S+\.\S+/.test(email);
        return isValid;
    };

    const isValidPassword = (password: string): boolean => {
        if (password.length < 8) {
          return false;
        }
      
        const containsNumber = /\d/.test(password);
        return containsNumber;
      };



    const validateField = (name: string, value: string, formData: User): void => {
            if (name === 'fullname') {
              if (value === '') {
                setTextError('Fullname is required');
              } else {
                setTextError('');
              }
            } else if (name === 'email') {
              if (value === '') {
                setEmailError('Email is required');
              } else if (!isValidEmail(value)) {
                setEmailError('Invalid Email');
              } else {
                setEmailError('');
              }
            } else if (name === 'password') {
              if (value === '') {
                setPasswordError('Password is required');
              } else if (!isValidPassword(value)) {
                setPasswordError('Password must be 8 or more characters and contain at least one number');
              } else {
                setPasswordError('');
              }
            } else if (name === 'confirmPassword') {
              if (value === '') {
                setPasswordMatchError('Confirm password is required');
              } else if (value !== formData.password) {
                setPasswordMatchError('Passwords do not match');
              } else {
                setPasswordMatchError('');
              }
            }
          };
          

    return { textError, emailError, passwordError, passwordMatch, isValidEmail, isValidPassword, validateField };
}
