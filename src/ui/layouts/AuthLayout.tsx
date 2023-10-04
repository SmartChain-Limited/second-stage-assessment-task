import React, { ReactNode } from "react";
import logo from "../../assets/logo.png";
import vector from "../../assets/authFrame.png";
interface Iauth {
  children?: ReactNode;
  stage: number;
}

const AuthLayout = ({ children, stage }: Iauth) => {
  return (
    <div className="flex flex-col  items-center h-full relative bg-[#F8F9FE] w-full min-h-[872px] py-[72px] sm:px-[75px] px-[22px]">
      <div className="flex sm:justify-end justify-center w-full">
        <img src={logo} className="w-[156px] h-[57px]" alt="" />
      </div>
      <div className="sm:absolute hidden bottom-0 left-0   ">
        <img src={vector} className="w-[674px] " alt="" />
      </div>
      <div className="flex flex-col gap-[35px] max-w-[724px] w-full items-center">
        <div className="flex flex-col gap-[8px] w-full sm:items-start items-center">
          <span className="text-[16px] text-[#6A6969]">Are you a Doctor?</span>
          <span className="text-[#3C6AAC] sm:text-[40px] text-[24px] font-[500] sm:text-start text-center">
            {stage === 1 && "Register Today"}
            {stage === 2 && "Your Location Details"}
            {stage === 3 && "Educational Qualifications"}
          </span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
