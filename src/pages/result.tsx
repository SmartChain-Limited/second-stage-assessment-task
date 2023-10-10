import React from "react";
import { Link } from "react-router-dom";

const Result: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 h-96 relative bg-white rounded-3xl">
        <div className="w-96 h-96 relative bg-white rounded-3xl">
          <div className="left-[100px] top-[55px] absolute text-slate-700 text-4xl font-normal font-['SF Pro Display']">
            Registration Successful!
          </div>
          <div className="w-72 h-64 left-[434px] top-[154px] absolute">
            <div className="w-72 h-64 left-0 top-0 absolute">
              <div className="w-44 h-52 left-[57.15px] top-[42.58px] absolute">
                <div className="w-40 h-48 left-[-0px] top-[17.01px] absolute"></div>
              </div>
              <div className="w-72 h-32 left-0 top-0 absolute">
                <div className="w-5 h-5 left-[212.91px] top-0 absolute"></div>
                <div className="w-7 h-6 left-[272.07px] top-[98.40px] absolute"></div>
                <div className="w-7 h-7 left-0 top-[85.40px] absolute"></div>
              </div>
            </div>
          </div>
          <div className="left-[45px] top-[200px] absolute">
            <button
              className="text-white text-base px-24 py-5 left-[50%] top-[50%] bg-blue-800 font-medium font-['SF Pro Display'] rounded text-center"
              style={{ cursor: "pointer" }}>
              Download App
            </button>
          </div>

          <div className="left-[120px] top-[300px] absolute text-blue-800 text-base font-medium font-['SF Pro Display']">
            <Link to="/">Back to homepage</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
