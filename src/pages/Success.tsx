import React from "react";
import vector from "../assets/success.png";
import Button from "../ui/utils/Button";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col gap-[46px] min-h-screen justify-center items-center">
      <img className="sm:w-[229px] w-[149px]" src={vector} alt="" />
      <span className="text-[#243A5E] sm:text-[40px] text-[24px] text-center">
        Registration Successful!
      </span>
      <Button action={() => {}} className={"sm:w-[302px] w-[262px] h-[59px]"}>
        Download App
      </Button>
      <Link to={"/"} className="text-[#243A5E] text-[16px]">
        Back to homepage
      </Link>
    </div>
  );
};

export default Success;
