// RegistrationContext.tsx
import React, { useContext, useState, ReactNode } from 'react';
import { SendRegitrationForm } from '../Helper/Backend';
import { Response } from '../type/Response';
import { User } from '../type/user';
import { FormContextProps } from '../type/Form';



const UserRegistrationContext = React.createContext<FormContextProps | undefined>(undefined);

export function useUserRegistration(): FormContextProps {
  const context = useContext(UserRegistrationContext);
  if (context === undefined) {
    throw new Error('useUserRegistration must be used within a RegistrationProvider');
  }
  return context;
}

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [formData, setformData] = useState<User>({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    college: '',
    country: '',
    city: '',
    specialization: '',
    graduateYear: '',
    regnumber: '',
});

const sendformData = async () => {
    try {
      const response: Response = await SendRegitrationForm(formData);
      if (response.error) {
        // console.error('Registration error:', response.message);
      } else {
        // console.log('Registration success:', response.message);
      }
    } catch (error) {
    }
  };

  return (
    <UserRegistrationContext.Provider value={{ formData, setformData, sendformData }}>
      {children}
    </UserRegistrationContext.Provider>
  );
}
