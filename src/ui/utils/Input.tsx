import React, { useEffect, useState } from "react";
import caution from "../../assets/danger.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiSolidChevronDown } from "react-icons/bi";
import { ICountry, IState, ICity } from "country-state-city";

interface Iinput {
  name: string;
  placeholder: string;
  value: string;
  type?: string;
  error: string;
  list?: any[];
  obj?: ICountry | IState | ICity;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect?: (e: IState | ICountry | any) => void;
}

interface ISelect {
  name: string;
  placeholder: string;
  value: string;
  type?: string;
  error: string;
  list?: any[];
  obj?: ICountry | IState | ICity;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: IState | ICountry | any) => void;
}

export const Input = ({
  name,
  placeholder,
  value,
  error,
  type,
  handleChange,
}: Iinput) => {
  const ui =
    error === ""
      ? "border-[#243A5E] text-[#243A5E] outline-none"
      : "border-[#EB3223] text-[#EB3223] outline-[#EB3223]";
  return (
    <div className="z-[9999] flex h-[73px] flex-col justify-between w-full">
      <input
        placeholder={placeholder}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        inputMode="numeric"
        className={`h-[57px] w-full rounded-[15px] sm:px-[42px] px-[22px] border  bg-[#fff] ${ui}`}
      />
      {error !== "" && (
        <span className="text-[#EB3223] ml-[27px] gap-[8px] text-[10px] items-center flex ">
          <img src={caution} alt="" />
          {error}
        </span>
      )}
    </div>
  );
};

export const PasswordInput = ({
  name,
  placeholder,
  value,
  error,
  handleChange,
}: Iinput) => {
  const [type, setType] = useState("password");

  const ui =
    error === ""
      ? "border-[#243A5E] text-[#243A5E] outline-none"
      : "border-[#EB3223] text-[#EB3223] outline-[#EB3223]";

  return (
    <div className=" flex h-[73px] relative flex-col justify-between w-full">
      <input
        placeholder={placeholder}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        inputMode="numeric"
        className={`h-[57px] z-50 w-full rounded-[15px] sm:px-[42px] px-[22px] border  bg-[#fff] ${ui}`}
      />
      <span className="absolute right-[19px] top-[16px]">
        {type === "password" ? (
          <AiOutlineEye
            onClick={() => setType("text")}
            className="cursor-pointer text-[24px]"
          />
        ) : (
          <AiOutlineEyeInvisible
            onClick={() => setType("password")}
            className="cursor-pointer text-[24px]"
          />
        )}
      </span>
      {error !== "" && (
        <span className="text-[#EB3223] ml-[27px] gap-[8px] text-[10px] items-center flex ">
          <img src={caution} alt="" />
          {error}
        </span>
      )}
    </div>
  );
};

export const Select = ({
  list,
  placeholder,
  value,
  error,
  name,
  handleChange,
  handleSelect,
}: ISelect) => {
  const [toggle, setToggle] = useState(value !== "");

  const select = (item: IState | ICountry) => {
    setToggle(false);
    handleSelect(item);
  };

  const ui =
    error === ""
      ? "border-[#243A5E] text-[#243A5E] outline-none"
      : "border-[#EB3223] text-[#EB3223] outline-[#EB3223]";

  useEffect(() => {
    if (value !== "") setToggle(true);
    else setToggle(false);
  }, [value]);

  return (
    <div className=" flex h-[73px] relative flex-col justify-between w-full">
      <input
        placeholder={placeholder}
        onChange={handleChange}
        type={"text"}
        name={name}
        value={value}
        inputMode="numeric"
        className={`h-[57px] w-full rounded-[15px] sm:px-[42px] px-[22px] border  bg-[#fff] ${ui}`}
      />
      <span className="absolute right-[19px] top-[16px]">
        <BiSolidChevronDown className="cursor-pointer text-[24px]" />
      </span>

      {error !== "" && (
        <span className="text-[#EB3223] ml-[27px] gap-[8px] text-[10px] items-center flex ">
          <img src={caution} alt="" />
          {error}
        </span>
      )}

      {toggle && (
        <div
          style={{ zIndex: 9999999999 }}
          className="flex flex-col z-[99999999999] rounded-[8px] top-[60px] h-fit w-full max-h-[300px] overflow-y-scroll absolute bg-[#fff] p-3"
        >
          {list?.map((l, n) => (
            <span className=" cursor-pointer" onClick={() => select(l)} key={n}>
              {l.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
