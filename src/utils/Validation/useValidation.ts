import { useState } from 'react';
import { User } from '../../type/user';

export function useValidation() {
  const [fullnameError, setFullnameError] = useState('');
  const [universityError, setUniversityError] = useState('');
  const [collegeError, setCollegeError] = useState(''); 
   const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatch, setPasswordMatchError] = useState('');
  const [selectError, setSelectError] = useState('');
  const [dateError, setDateError] = useState('');
  const [regError, setRegError] = useState('');

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
          setFullnameError('Fullname is required');
        } else {
          setFullnameError('');
        }
      } else
      if (name === 'university') {
        if (value === '') {
          setUniversityError('university is required');
        } else {
          setUniversityError('');
        }
      } else
      if (name === 'college') {
        if (value === '') {
          setCollegeError('college is required');
        } else {
          setCollegeError('');
        }
      } else
      if (name === 'specialization') {
        if (value === 'Specialization') {
          setSelectError('Please select a Specialization');
        } else {
          setSelectError('');
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
      } else if (name === 'country') {
        if (value === 'Country of Residence') {
          setSelectError('Please select a country');
        } else {
          setSelectError('');
        }
     
      } else if (name === 'graduateYear') {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!datePattern.test(value)) {
          setDateError('Invalid date format (yyyy-mm-dd)');
        } else {
          setDateError('');
        }
      }
      else if (name === 'regnumber') {
        if (value === '') {
          setRegError('Invalid Reg Number');
        } else {
          setRegError('');
        }
      }
          };
          

          return {
            regError,
            fullnameError,
            universityError,
            collegeError,
            emailError,
            passwordError,
            passwordMatch,
            selectError,
            dateError,
            isValidEmail,
            isValidPassword,
            validateField,
          };}
