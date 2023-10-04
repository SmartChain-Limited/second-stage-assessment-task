// RegistrationContext.tsx
import React, { useContext, useState, ReactNode } from 'react';
import { SendRegitrationForm } from '../Helper/Backend';
import { Response } from '../type/Response';
import { User } from '../type/user';



interface UserRegistrationContextProps {
    formData: User;
  setformData: React.Dispatch<React.SetStateAction<User>>;
  sendformData: () => Promise<void>;
}

const UserRegistrationContext = React.createContext<UserRegistrationContextProps | undefined>(undefined);

export function useUserRegistration(): UserRegistrationContextProps {
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
    //   console.error('An error occurred while sending registration data:', error);
    }
  };

  return (
    <UserRegistrationContext.Provider value={{ formData, setformData, sendformData }}>
      {children}
    </UserRegistrationContext.Provider>
  );
}
