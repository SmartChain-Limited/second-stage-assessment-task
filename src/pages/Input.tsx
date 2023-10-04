import React, { useState } from 'react';
import errorIcon from '../assets/errorIcon.svg';
import Visibility from '../assets/Visibility';
import { InputProps } from '../type/Input';

const Input = ({ type, value, name, placeholder, onchange, error, selectOptions, style }: InputProps) => {
  const [visibility, toggleVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date

  const handleToggleVisibility = () => {
    toggleVisibility(!visibility);
  };


  return (
    <div className={`h-[80px] mb-[10px]  ${style}`}>
      <div
        className={`bg-white pl-[42px] border border-1 border-[${error ? '#EB3223' : '#7D97C0'}] rounded-[15px] flex flex-row items-center`}
        style={{
          borderColor: error ? '#EB3223' : '#7D97C0',
        }}
      >
        {type === 'select' ? (
          <select
            value={value}
            name={name}
            onChange={onchange}
            className={`w-[100%] focus:outline-0 rounded-[15px] w-[100%] py-[16px] placeholder-[#243A5E] text-[#ACACAC] ${style}`}
            >
       {selectOptions && selectOptions.map((option) => (
  <option key={option.value} value={option.value}>
    {option.label}
  </option>
))}
          </select>
        ) : 

        // type === 'calendar' ? (
        //     <input
        //     type='date'
        //     value={value}
        //     name={name}
        //       selected={selectedDate}
        //       onChange={handleDateChange}
        //       className={`w-[100%] focus:outline-0 rounded-[15px] w-[100%] py-[16px] placeholder-[#243A5E] text-[${error ? '#EB3223' : '#243A5E'}]`}
        //     />

        // )
        
         (
          <>
            <input
              type={visibility ? 'email' || 'text' : type}
              value={value}
              name={name}
              placeholder={placeholder}
              onChange={onchange}
              className={`w-[100%] focus:outline-0 rounded-[15px] w-[100%] py-[16px] placeholder-[#243A5E] text-[${error ? '#EB3223' : '#243A5E'}]`}
            />

            {type === 'password' && (
              <div onClick={handleToggleVisibility} className="pr-5">
                {visibility ? <Visibility /> : <Visibility />}
              </div>
            )}
          </>
        )}
      </div>

      {error ? (
        <p className="inline-flex gap-2 text-[#EB3223] text-[10px] pl-[21px] mt-2">
          <img src={errorIcon} alt="error" />
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
