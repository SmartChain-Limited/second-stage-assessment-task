import React, { ChangeEvent, useState } from "react";
import Input from "../shared/Input/Input";
import { useNavigate } from "react-router-dom";
import Logo from "../shared/Logo/Logo";
import Danger from "../../assets/icon/Danger";
import { validateInfoForm } from "../../utils/FormValidator";

interface InfoProps {
  onSubmit: Function;
}

const Info: React.FC<InfoProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Use e.currentTarget.value to access the input's value property
    const { name, value } = e.currentTarget;

    // Update the form data state
    setFormData({ ...formData, [name]: value });

    // Clear the corresponding error message when the input changes
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateInfoForm(formData, setFormErrors)) {
      onSubmit();
      navigate(`/step2`);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:w-[1200px] ">
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[1200px] lg:ml-[-7rem]">
        <h1 className="text-[#6A6969] font-light lg:ml-[-7rem]">
          Are you a Doctor?
        </h1>

        <p className="font-normal text-[40px] text-[#3C6AAC]">Register Today</p>
      </div>
      <div>
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col gap-6 items-center justify-center mt-14"
        >
          <Input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={onInputChange}
            className={formErrors.fullName ? "border-[#EB3223]" : ""}
          />
          {formErrors.fullName && (
            <div className="flex gap-2 items-center ml-[-13rem] text-[10px] text-[#EB3223] md:ml-[-37rem]">
              <Danger />
              {formErrors.fullName}
            </div>
          )}

          <Input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={onInputChange}
            className={formErrors.email ? "border-[#EB3223]" : ""}
          />
          {formErrors.email && (
            <div className="flex gap-2 items-center ml-[-15rem] text-[10px] text-[#EB3223] md:ml-[-39rem]">
              <Danger />
              {formErrors.email}
            </div>
          )}

          <Input
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={onInputChange}
            className={formErrors.phoneNumber ? "border-[#EB3223]" : ""}
          />
          {formErrors.phoneNumber && (
            <div className="flex gap-2 items-center ml-[-12rem] text-[10px] text-[#EB3223] md:ml-[-36rem]">
              <Danger />
              {formErrors.phoneNumber}
            </div>
          )}

          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={onInputChange}
            className={formErrors.password ? "border-[#EB3223]" : ""}
          />
          {formErrors.password && (
            <div className="flex gap-2 items-center ml-[-14rem] text-[10px] text-[#EB3223] md:ml-[-38rem]">
              <Danger />
              {formErrors.password}
            </div>
          )}

          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={onInputChange}
            className={formErrors.confirmPassword ? "border-[#EB3223]" : ""}
          />
          {formErrors.confirmPassword && (
            <div className="flex gap-2 items-center ml-[-12rem] text-[10px] text-[#EB3223] md:ml-[-36rem]">
              <Danger />
              {formErrors.confirmPassword}
            </div>
          )}

          <div className="">
            <button
              type="submit"
              className="text-white flex items-center justify-center w-[236px] bg-[#3C6AAC] h-[58px] ml-[130px] mt-10 lg:ml-[970px]"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;
