import { ChangeEvent } from "react";

interface StepperProps {
    step : number;
}
interface SelectOption {
    value: string;
    label: string;
  }


interface InputProps {
    type: 'text' | 'email' | 'password' | 'select' | 'date'; 
    value: string;
    name: string;
    placeholder?: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    error?: string | null;
    selectOptions?: SelectOption[] | undefined; 
    style? : string
  }

  export type {
	InputProps, StepperProps
}

