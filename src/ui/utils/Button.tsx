import React, { ReactNode } from "react";

interface Ibtn {
  children: ReactNode;
  action: () => void;
  className: string;
}
const Button = ({ children, action, className }: Ibtn) => {
  return (
    <span onClick={action}  className={className+ " z-[1] flex items-center justify-center text-[16px] rounded-[5px] text-[#fff] bg-[#3C6AAC] cursor-pointer"}>
      {children}
    </span>
  );
};

export default Button;
