import React, { useState } from "react";
import type InputProps from "./Input.props";
import EyeOpen from "../../../assets/icon/EyeOpen";
import EyeClose from "../../../assets/icon/EyeClose";

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  className,

  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className="relative">
      <div className={`relative flex  w-[340px] md:w-[730px] ${className}`}>
        <input
          className=" bg-white w-full px-5 py-2 border h-[57px] text-[#243A5E] rounded-[15px] border-[#7D97C0] focus:outline-0 focus-within:border-[#243A5E] text-inherit placeholder:text-[14px]"
          type={inputType}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2">
            {isPasswordVisible ? (
              <div onClick={togglePasswordVisibility}>
                <EyeOpen />
              </div>
            ) : (
              <div onClick={togglePasswordVisibility}>
                <EyeClose />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
