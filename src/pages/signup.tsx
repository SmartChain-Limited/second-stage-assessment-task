import React, { useState } from "react";
import { SendRegitrationForm } from "../Helper/Backend";
import { useNavigate } from "react-router-dom";
import Textfield from "../components/textfield";
import Buttons from "../components/button";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [registrationForm, setRegistrationForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Location");
  };

  return (
    <div>
      <div style={{ position: "absolute", top: "70px", right: "20px" }}>
        <div className="w-[149px] h-[42px] text-center text-blue-800 text-3xl font-medium font-['Konnect']">
          healthXP
        </div>
      </div>

      <div className="w-[130px] h-[30px]">
        <div className="fixed top-30 left-200 [font-family:'Graphik-Light',Helvetica] font-light text-[#6a6868] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
          Are you a Doctor?
        </div>
      </div>
      <div className="w-[282px] h-[150px]">
        <div className="fixed top-30 left-200 [font-family:'Graphik-Medium',Helvetica] font-medium text-blue-800 text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Register Today
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          marginBottom: "20px",
          marginLeft: "20px",
        }}>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            marginBottom: "20px",
            marginLeft: "20px",
          }}>
          <div className="w-96 h-96 relative opacity-50 left-[290.17px] top-[76px]">
            <div className="w-96 h-96 left-0 top-0 absolute bg-blue-400 rounded-full opacity-50" />
            <div className="w-72 h-72 left-[12%] top-[12%] absolute bg-blue-300 rounded-full opacity-50" />
            <div className="w-48 h-48 left-[24%] top-[24%] absolute bg-blue-200 rounded-full opacity-50" />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-[724px] h-[80px] relative ">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute">
            <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute  text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <input
              type="text"
              className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="w-[724px] h-[80px] relative ">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute">
            <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <input
              type="text"
              className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="w-[724px] h-[80px] relative ">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute">
            <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <input
              type="text"
              className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="w-[724px] h-[80px] relative ">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute">
            <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <input
              type="password"
              className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="w-[724px] h-[80px] relative ">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute">
            <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <input
              type="password"
              className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "60px",
            right: "400px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "100%",
            padding: "20px",
          }}>
          <button
            style={{ cursor: "pointer" }}
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-[5px] w-[236px] h-[50px] px-[100px]  items-center gap-2.5 inline-flex "
            onClick={handleSubmit} // Call the handleSubmit function
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
