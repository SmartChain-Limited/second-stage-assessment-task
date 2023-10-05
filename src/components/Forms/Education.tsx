import React, { ChangeEvent, useState } from "react";
import Input from "../shared/Input/Input";
import Dropdown from "../shared/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import Logo from "../shared/Logo/Logo";
import Danger from "../../assets/icon/Danger";
import DateInput from "../shared/dateInput/DateInput";
import { specializationOptions } from "../../utils/data";

interface EducationProps {
  onSubmit: Function;
}

const Education: React.FC<EducationProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [residenceValue, setResidenceValue] = useState("");

  const [formData, setFormData] = useState({
    university: "",
    residence: "",
    date: "",
    postGraduateCollege: "",
    registrationNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    university: "",
    residence: "",
    date: "",
    postGraduateCollege: "",
    registrationNumber: "",
  });

  const validateForm = () => {
    let isValid = true;
    const errors: any = {};

    if (!formData.university.trim()) {
      errors.university = "University is required.";
      isValid = false;
    }

    if (!residenceValue) {
      errors.residence = "Country of Residence is required.";
      isValid = false;
    }

    if (!formData.date.trim()) {
      errors.date = "Date is required.";
      isValid = false;
    }

    if (!formData.postGraduateCollege.trim()) {
      errors.postGraduateCollege = "Post Graduate College is required.";
      isValid = false;
    }

    if (!formData.registrationNumber.trim()) {
      errors.registrationNumber = "Registration Number is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleResidenceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setResidenceValue(e.target.value);
    setFormErrors({ ...formErrors, residence: "" });
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit();
      navigate(`/success`);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:w-[1200px] ">
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[1200px] ">
        <p className="font-normal text-[40px] text-[#3C6AAC] md:ml-[16rem]">
          Educational Qualifications
        </p>
      </div>
      <div>
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col gap-6 mt-[6rem] items-center justify-center"
        >
          <Input
            name="university"
            placeholder="University"
            value={formData.university}
            onChange={onInputChange}
            className={formErrors.university ? "border-red-500" : ""}
          />
          {formErrors.university && (
            <div className="flex gap-2 items-center ml-[-12rem] text-[10px] text-[#EB3223] md:ml-[-34rem]">
              <Danger />
              {formErrors.university}
            </div>
          )}

          <div className="flex flex-row gap-4 w-[354px] md:w-[724px]">
            <div>
              <Dropdown
                options={specializationOptions}
                onChange={handleResidenceChange}
                dropdownValue={residenceValue}
                className={` w-[150px] md:w-[324px] ${
                  formErrors.residence ? "border-red-500" : ""
                }`}
              />
              {formErrors.residence && (
                <div className=" mt-6 ml-4 whitespace-nowrap flex gap-2 items-center text-[10px] text-[#EB3223] md:ml-6">
                  <Danger />
                  {formErrors.residence}
                </div>
              )}
            </div>

            <div>
              <DateInput
                name="date"
                placeholder="Year of graduation"
                value={formData.date}
                onChange={onInputChange}
                className={`w-[150px] md:w-[324px] ${
                  formErrors.date ? "border-red-500" : ""
                }`}
              />
              {formErrors.date && (
                <div className=" mt-6 whitespace-nowrap  flex gap-2 items-center text-[10px] text-[#EB3223]  ">
                  <Danger />
                  {formErrors.date}
                </div>
              )}
            </div>
          </div>

          <Input
            name="postGraduateCollege"
            placeholder="Post Graduate College"
            value={formData.postGraduateCollege}
            onChange={onInputChange}
            className={`${
              formErrors.postGraduateCollege ? "border-red-500" : ""
            }`}
          />
          {formErrors.postGraduateCollege && (
            <div className="flex gap-2 items-center ml-[-8.2rem] text-[10px] text-[#EB3223]  md:ml-[-31rem]">
              <Danger />
              {formErrors.postGraduateCollege}
            </div>
          )}

          <Input
            name="registrationNumber"
            placeholder="Registration Number"
            value={formData.registrationNumber}
            onChange={onInputChange}
            className={formErrors.registrationNumber ? "border-red-500" : ""}
          />
          {formErrors.registrationNumber && (
            <div className="flex gap-2 items-center ml-[-9rem] text-[10px] text-[#EB3223]  md:ml-[-32rem]">
              <Danger /> {formErrors.registrationNumber}
            </div>
          )}

          <div className="ml-[130px] mt-[5rem] lg:ml-[970px]">
            <button
              type="submit"
              className="text-white flex items-center justify-center w-[236px] bg-[#3C6AAC] h-[58px]"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Education;
