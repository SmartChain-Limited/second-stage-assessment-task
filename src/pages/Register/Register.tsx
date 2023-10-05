import React, { useEffect, useState } from 'react';
import { useUserRegistration } from '../../context/FormContext';
import eclipse from '../../assets/eclipse.png';
import Input from '../Input';
import { useValidation } from '../../utils/Validation/useValidation';
import { Link } from 'react-router-dom';
import Button from '../Button';
import succesImg from '../../assets/success.svg';
import logo from '../../assets/logo.svg';
import './Register.css';
import Stepper from '../Stepper';

const Register = () => {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccessful] = useState(false);
  const { formData, setformData, sendformData } = useUserRegistration();
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const {
    fullnameError,
    universityError,
    collegeError,
    emailError,
    passwordError,
    passwordMatch,
    selectError,
    dateError,
    regError,
    isValidEmail,
    isValidPassword,
    validateField,
  } = useValidation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });

    validateField(name, value, formData);
  };

  useEffect(() => {
    const isCurrentStageValid = () => {
      switch (step) {
        case 0:
          return formData.fullname !== '' && formData.email !== '' && formData.password !== '' && formData.confirmPassword !== '';
        case 1:
          return formData.country !== '' && selectError === '' ;
        case 2:
          return formData.university !== '' && formData.college !== '' && formData.specialization !== '' && formData.graduateYear !== '' && formData.regnumber !== '';
        default:
          return false;
      }
    };

    setIsNextDisabled(!isCurrentStageValid());
  }, [step, fullnameError, emailError, passwordError, passwordMatch, selectError, universityError, collegeError, dateError, regError]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendformData();
    setIsSuccessful(true);
  };

  const steps = ['personal information', 'location', 'Educational Qualifications'];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };
  
  console.log(formData);
  return (
    <div className="bg-whiterelative w-[100vw]  flex flex-col items-center  px-[22px] pb-10 md:pb-0">
      <img src={eclipse} alt="eclipse" width="100%" className="hidden md:flex absolute bottom-0 left-0 max-w-[500px]" />

      {!isSuccess && (
        <>
          <div className=" pt-[40px] mr-[75px] w-[100%] flex justify-end text-right">
            <img src={logo} alt="logo" />
          </div>

          <form onSubmit={handleSubmit} className="w-[100%] md:w-[724px] flex flex-col z-10 mt-[16px] pb-10 xl:pb-0">
            {step === 0 && (
              <>
                <div className="mb-[31px] text-center md:text-left">
                  <p className="text-[16px] text-[#6A6969] font-[300] mb-[8px]">Are you a Doctor?</p>
                  <h6 className="text-[#3C6AAC] font-[500] text-[40px]">Register Today</h6>
                </div>
                <Stepper step={step} />

                <Input type="text" value={formData.fullname} name="fullname" placeholder="Full Name" onchange={handleInputChange} error={fullnameError} />
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
                  onchange={handleInputChange}
                  error={selectError}
                />

                <Input
                  type="select"
                  value={formData.city}
                  name="city"
                  selectOptions={[
                    { value: 'City/State of Residence (e.g. Lekki, Lagos)', label: 'City/State of Residence (e.g. Lekki, Lagos)' },
                    { value: 'Lekki', label: 'Lekki' },
                  ]}
                  onchange={handleInputChange}
                />
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-[31px] text-center md:text-left">
                  <h6 className="text-[#3C6AAC] font-[500] text-[40px]">Educational Qualifications</h6>
                </div>

                <Stepper step={step} />

                <Input type="text" value={formData.university} name="university" placeholder="University  (e.g. Mountain Dew University, Enugu)" onchange={handleInputChange} error={universityError} />

                <div className="flex w-[100%] flex-col md:flex-row gap-4">
                  <Input type="select" value={formData.specialization}
                   name="specialization" onchange={handleInputChange}
                    placeholder={'Specialization'} style={'flex-1'}
                    selectOptions={[
                      { value: 'Specialization', label: 'Specialization' },
                      { value: 'Midewifery', label: 'Midewifery' },
                    ]}/>
                  <Input type="date" value={formData.graduateYear} name="graduateYear" onchange={handleInputChange} placeholder={'Graduation Year'} style={'flex-1'} error={dateError} />
                </div>

                <Input type="text" value={formData.college} name="college" placeholder="Post Graduate College" onchange={handleInputChange} error={collegeError} />
                <Input type="text" value={formData.regnumber} name="regnumber" placeholder="Registration number" onchange={handleInputChange} error={regError} />
              </>
            )}

            <div className="buttons flex justify-center md:justify-end xl:mr-[-100px] mt-20 md:mt-5">
              {step < steps.length - 1 && (
          <Button type="button" onclick={handleNext} disabled={isNextDisabled}>
          Next
                </Button>
              )}
              {step === steps.length - 1 && (
                <Button type="submit"  >Register</Button>
              )}
            </div>
          </form>
        </>
      )}

      {isSuccess && (
        <div className="h-[100vh] w-[100vw] flex flex-col gap-5 justify-center items-center">
          <img src={succesImg} alt="successful" />
          <h1 className="sm:text-[48px]">Registration Successful!</h1>
          <Button type={'button'} onclick={() => { }}>Download App</Button>
          <span className="underline">Back to homepage</span>
        </div>
      )}
    </div>
  );
};

export default Register;
