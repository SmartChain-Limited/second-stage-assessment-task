import type { ChangeEvent } from "react";

interface OptionType {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: OptionType[];
  dropdownValue: string;
  required?: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
