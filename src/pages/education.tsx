import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    university: "",
    specialization: "",
    graduationYear: "",
    postgraduateCollege: "",
    registrationNumber: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    console.log("Form Data Submitted:", formData);
    navigate("/Result");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ position: "absolute", top: "70px", right: "20px" }}>
        <div className="w-[149px] h-[42px] text-center text-blue-800 text-3xl font-medium font-['Konnect']">
          healthXP
        </div>
      </div>

      <div className="w-[282px] h-[150px] fixed top-40 left-50 [font-family:'Graphik-Medium',Helvetica] font-medium text-blue-800 text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        Educational Qualifications
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

      <div className="w-[724px] h-[80px] relative">
        <div className="w-[724px] h-[57px] left-0 top-0 absolute">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
          <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
          <input
            type="text"
            className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
            placeholder="Unviversity (e.g Mountain Dew)"
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-[324px] h-[80px] relative">
          <div className="w-[324px] h-[55px]  top-0 absolute">
            <div className="w-[324px] h-[55px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[296.74px] h-[24.12px] left-[18.87px] top-[15.44px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <select className="w-[324px] h-[55px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[18.87px] text-neutral-700 text-sm font-normal font-['SF Pro Display']">
              <option value="" disabled selected>
                Select specialization
              </option>
              <option value="option1">Computer Science</option>
              <option value="option2">Electrical Engineering</option>
              <option value="option1">Medicine</option>
              <option value="option2">Political Science</option>
              <option value="option1">MedLab</option>
              <option value="option2">Public Health</option>
            </select>
          </div>
        </div>

        <div className="w-[324px] h-[80px] relative">
          {/* Date Selector */}
          <div className="w-[324px] h-[55px] left-20 top-0 absolute">
            <div className="w-[324px] h-[55px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[296.74] h-[24.12px] left-[22.60px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <select className="w-[324px] h-[55px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[18.87px] text-neutral-700 text-sm font-normal font-['SF Pro Display']">
              <option value="" disabled selected>
                Year of Graduation
              </option>
              <option value="option1">2000</option>
              <option value="option2">2001</option>
              <option value="option1">2002</option>
              <option value="option2">2003</option>
              <option value="option1">2004</option>
              <option value="option2">2005</option>
              <option value="option2">2006</option>
              <option value="option2">2007</option>
              <option value="option2">2008</option>
              <option value="option2">2009</option>
              <option value="option2">2010</option>
              <option value="option2">2011</option>
              <option value="option2">2012</option>
              <option value="option2">2013</option>
              <option value="option2">2014</option>
              <option value="option2">2015</option>
              <option value="option2">2016</option>
              <option value="option2">2017</option>
              <option value="option2">2018</option>
              <option value="option2">2019</option>
              <option value="option2">2020</option>
              <option value="option2">2021</option>
              <option value="option2">2022</option>
              <option value="option2">2023</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-[724px] h-[80px] relative">
        <div className="w-[724px] h-[57px] left-0 top-0 absolute">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
          <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
          <input
            type="text"
            className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
            placeholder="Post Graduate College"
          />
        </div>
      </div>

      <div className="w-[724px] h-[150px] relative ">
        <div className="w-[724px] h-[57px] left-0 top-0 absolute">
          <div className="w-[724px] h-[57px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
          <div className="w-[663.08px] h-[25px] left-[42.17px] top-[16px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
          <input
            type="text"
            className="w-[724px] h-[57px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[42.17px] text-neutral-700 text-sm font-normal font-['SF Pro Display']"
            placeholder="Enter registration number"
          />
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "160px",
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
          onClick={handleSubmit}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-[5px] w-[236px] h-[50px] px-[100px] items-center gap-2.5 inline-flex ">
          Register
        </button>
      </div>
    </form>
  );
};

export default Education;
