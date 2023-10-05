import { ChevronDown } from "../../../assets/icon/ChevronDown";
import type { DropdownProps } from "./Dropdown.props";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  dropdownValue,
  onChange,
  className,
  required,
}) => {
  return (
    <div
      className={`apply relative flex items-center h-[57px]  w-[340px] md:w-[730px]  ${className}`}
    >
      <select
        className={`text-[#ACACAC] w-full z-10 bg-transparent border border-[#7D97C0] px-5 py-0 my-3 h-full cursor-pointer rounded-[15px] appearance-none focus:outline-none ${
          dropdownValue ? "text-[#243A5E]" : ""
        } ${className}`}
        value={dropdownValue}
        onChange={onChange}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        className={`relative mr-auto top-[6px] right-12 transform -translate-y-1/2`}
      >
        {ChevronDown}
      </div>
    </div>
  );
};

export default Dropdown;
