import React, { ChangeEvent, useState } from "react";
import Dropdown from "../shared/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import Logo from "../shared/Logo/Logo";
import Danger from "../../assets/icon/Danger";
import { validateLocationForm } from "../../utils/FormValidator";
import { cityOptions, countryOptions } from "../../utils/data";

interface LocationProps {
  onSubmit: Function;
}

const Location: React.FC<LocationProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [residenceValue, setResidenceValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [formErrors, setFormErrors] = useState<{
    residence: string;
    city: string;
  }>({
    residence: "",
    city: "",
  });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateLocationForm(residenceValue, cityValue, setFormErrors)) {
      onSubmit();
      navigate(`/step3`);
    }
  };

  const handleResidenceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setResidenceValue(e.target.value);
    setFormErrors({ ...formErrors, residence: "" });
  };

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCityValue(e.target.value);
    setFormErrors({ ...formErrors, city: "" });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:w-[1200px] ">
        <div className="flex flex-col items-center justify-center lg:w-[1200px] ">
          <Logo />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[1200px] ">
        <p className="font-normal  text-[40px] text-[#3C6AAC] md:ml-[16rem]">
          Your Location Details
        </p>
      </div>
      <div>
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col gap-6 items-center justify-center mt-[10rem]"
        >
          <Dropdown
            options={countryOptions}
            onChange={handleResidenceChange}
            dropdownValue={residenceValue}
            className={formErrors.residence ? "border-red-500" : ""}
          />
          {formErrors.residence && (
            <div className="flex gap-2 items-center ml-[-9rem] text-[10px] text-[#EB3223] md:ml-[-34rem]">
              <Danger />
              {formErrors.residence}
            </div>
          )}

          <Dropdown
            options={cityOptions}
            onChange={handleCityChange}
            dropdownValue={cityValue}
            className={formErrors.city ? "border-red-500" : ""}
          />
          {formErrors.city && (
            <div className="flex gap-2 items-center ml-[-9rem] text-[10px] text-[#EB3223] md:ml-[-34rem]">
              <Danger />
              {formErrors.city}
            </div>
          )}

          <div className="ml-[130px] mt-[12rem] lg:ml-[970px]">
            <button className="text-white flex items-center justify-center w-[236px] bg-[#3C6AAC] h-[58px]">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Location;
