import React from "react";
import type DateInputProps from "./DateInput.props";
import Calendar from "../../../assets/calendar.svg";

const DateInput: React.FC<DateInputProps> = ({
  name,
  placeholder,
  type,
  className,

  ...rest
}) => {
  return (
    <div className="relative">
      <div className={`relative flex  w-[340px] md:w-[730px] ${className}`}>
        <input
          className=" bg-white w-full px-5 py-2 border h-[57px] text-[#243A5E] rounded-[15px] border-[#7D97C0] focus:outline-0 focus-within:border-[#243A5E] text-inherit placeholder:text-[14px]"
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </div>
      <div className={`absolute bottom-4 right-4`}>
        <img src={Calendar} />
      </div>
    </div>
  );
};

export default DateInput;
