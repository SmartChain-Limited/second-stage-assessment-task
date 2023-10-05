import { User } from "./user";

interface FormContextProps {
    formData: User;
  setformData: React.Dispatch<React.SetStateAction<User>>;
  sendformData: () => Promise<void>;
}

export type {
	FormContextProps
}