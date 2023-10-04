import React, { useState } from 'react';
import { useUserRegistration } from '../context/FormContext';
import eclipse from '../assets/eclipse.png'
import Input from './Input';
import { useValidation } from './Validation/useValidation';
import { Link } from 'react-router-dom'
import Button from './Button';
import succesImg from '../assets/success.svg';
import logo from '../assets/logo.svg';

import Stepper from './Stepper';



const Register = () => {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccessful] = useState(false)
  const { formData, setformData, sendformData } = useUserRegistration();
  const { textError, emailError, passwordError, passwordMatch, isValidEmail, isValidPassword, validateField } = useValidation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });

    validateField(name, value, formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendformData();
    setIsSuccessful(true)
  };

  const steps = ['personal information', 'location', 'Educational Qualifications'];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

console.log(formData);
  return (
    <div className="bg-whiterelative w-[100vw] h-[100vh] flex flex-col items-center  px-[22px]">
      <img src={eclipse} alt="eclipse" width="100%" className="hidden md:flex absolute bottom-0 left-0 max-w-[500px]" />

  { !isSuccess && (
  <>   <div className=" mt-[87px] mr-[75px] w-[100%] flex justify-end text-right">
        <img src={logo} alt='logo' />
      </div>

      <form onSubmit={handleSubmit} className="w-[100%] md:w-[724px] flex flex-col z-10 mt-[16px]">


        {step === 0 && (
          <>
            <div className="mb-[31px] text-center md:text-left">
              <p className="text-[16px] text-[#6A6969] font-[300] mb-[8px]">Are you a Doctor?</p>
              <h6 className="text-[#3C6AAC] font-[500] text-[40px]">Register Today</h6>
            </div>
            <Stepper step={step} />

            <Input type="text" value={formData.fullname} name="fullname" placeholder="Full Name" onchange={handleInputChange} error={textError} />
            <Input type="email" value={formData.email} name="email" placeholder="Email" onchange={handleInputChange} error={emailError} />
            <Input type="password" value={formData.password} name="password" placeholder="Password" onchange={handleInputChange} error={passwordError} />
            <Input type="password" value={formData.confirmPassword} name="confirmPassword" placeholder="Confirm Password" onchange={handleInputChange} error={passwordMatch} />
          </>
        )}

        {step === 1 && (
          <>
        <div className="mb-[31px] text-center md:text-left">
          <h6 className="text-[#3C6AAC] font-[500] text-[40px]">Your Location Details</h6>
        </div>

        <Stepper step={step} />

            <Input
              type="select"
              value={formData.country}
              name="country"
              selectOptions={[
                { value: 'Country of Residence', label: 'Country of Residence' },
                { value: 'Nigeria', label: 'Nigeria' },
              ]}
              onchange={handleInputChange} placeholder={'Country of Residence'}  // error={selectError}
            />

            <Input
              type="select"
              value={formData.city}
              name="city"
              selectOptions={[
                { value: 'City/State of Residence (e.g. Lekki,  Lagos)', label: 'City/State of Residence (e.g. Lekki,  Lagos)' },
                { value: 'Nigeria', label: 'Nigeria' },
              ]}
              onchange={handleInputChange} placeholder={'City/State of Residence (e.g. Lekki,  Lagos)'}  // error={selectError}
            />

          </>
        )}

        {step === 2 && (
          <>

<div className="mb-[31px] text-center md:text-left">
          <h6 className="text-[#3C6AAC] font-[500] text-[40px]">Educational Qualifications</h6>
        </div>

        <Stepper step={step} />

            <Input type="text" value={formData.university} name="university" placeholder="University  (e.g. Mountain Dew University, Enugu)" onchange={handleInputChange} error={textError} />

            <div className='flex w-[100%] flex-col md:flex-row gap-4'>
              <Input
                type="calendar"
                value={formData.specialization}
                name="specialization"
                onchange={handleInputChange} placeholder={'Specialization'}
                style={'flex-1'}
              />

              <Input
                type="text"
                value={formData.graduateYear}
                name="graduateYear"                     
                onchange={handleInputChange} placeholder={'Graduation Year'}
                style={'flex-1'}

              />
            </div>

            <Input type="text" value={formData.college} name="college" placeholder="Post Graduate College" onchange={handleInputChange} error={textError} />
            <Input type="text" value={formData.regnumber} name="regnumber" placeholder="Registeration number" onchange={handleInputChange} error={textError} />

          </>
        )}




        <div className="buttons flex justify-center md:justify-end md:mr-[-100px]">

          {step < steps.length - 1 && (
            <Button type="button" onclick={handleNext}>
              Next
            </Button>
          )}
          {step === steps.length - 1 && (
            <Button type="submit" >Register</Button>
          )}
        </div>
      </form>

      </>
   )   }

      {
        isSuccess && (
          <div className='h-[100vh] w-[100vw] flex flex-col gap-5 justify-center items-center'>
            <img src={succesImg} alt='successful' />

            <h1 className='text-[48px]'>Registration Successful!</h1>

            <Button type={'button'} onclick={() => { }}>Download App</Button>

            <span className='underline'> Back to homepage</span>
          </div>
        )
      }
    </div>
  );
}

export default Register;
