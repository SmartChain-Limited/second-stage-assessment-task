import React from "react";
import Button from "../../ui/utils/Button";
import { Select } from "../../ui/utils/Input";
import useForm2 from "../hooks/useForm2";

const Form2 = ({ next }: { next: (prev: number) => void }) => {
  const {
    countries,
    country,
    errors,
    state,
    states,
    codes,
    submit,
    selectCountry,
    selectState,
    handleCountryChange,
    handleStateChange,
  } = useForm2(next);

  return (
    <div className="flex flex-col gap-[24px] z-[9999]">
      <div className="flex flex-col gap-[24px] min-h-[374px]">
        <Select
          list={countries}
          value={country}
          name={"country"}
          placeholder={"Select country"}
          error={errors.country}
          handleChange={handleCountryChange}
          handleSelect={selectCountry}
        />
        <Select
          list={states.filter(
            (s) => s.countryCode === codes.countryCode?.isoCode
          )}
          value={state}
          name={"state"}
          placeholder={"Select state"}
          error={errors.state}
          handleChange={handleStateChange}
          handleSelect={selectState}
        />
      </div>
      <div className="flex sm:justify-end justify-center">
        <Button action={submit} className={"w-[246px] h-[58px]"}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Form2;
