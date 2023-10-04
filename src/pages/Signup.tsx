import React, { useState } from "react";
import AuthLayout from "../ui/layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import Form1 from "../components/forms/Form1";
import Form2 from "../components/forms/Form2";
import Form3 from "../components/forms/Form3";
import Button from "../ui/utils/Button";

const Stage = ({ stage, active }: { stage: number; active: boolean }) => {
  return (
    <span
      className={`z-[1] rounded-full w-[23px] text-[#fff] h-[23px] ${
        active ? "bg-[#3C6AAC]" : "bg-[#DBDBDB]"
      } flex items-center justify-center`}
    >
      {stage}
    </span>
  );
};
const Stroke = ({ active }: { active: boolean }) => {
  return (
    <span
      className={`h-[5px] ${active ? "bg-[#3C6AAC]" : "bg-[#DBDBDB]"} w-full`}
    ></span>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);
  const next = (prev: number) => {
    if (prev < 3) setStage(prev + 1);
    else navigate("/success");
  };
  return (
    <AuthLayout stage={stage}>
      <div className="max-w-[435px] relative flex items-center justify-between w-full">
        <Stage active={true} stage={1} />
        <Stage active={stage > 1} stage={2} />
        <Stage active={stage > 2} stage={3} />
        <div className="flex items-center absolute w-full">
          <Stroke active={stage > 1} />
          <Stroke active={stage > 2} />
        </div>
      </div>
      <div className="w-full">
        {stage === 1 && <Form1 next={next} />}
        {stage === 2 && <Form2 next={next} />}
        {stage === 3 && <Form3 next={next} />}
      </div>
      
    </AuthLayout>
  );
};

export default Signup;
