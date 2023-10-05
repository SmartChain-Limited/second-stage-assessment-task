import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Info from "./components/Forms/Info";
import Location from "./components/Forms/Location";
import Education from "./components/Forms/Education";
import SuccessImg from "../src/assets/images/success.png";
import BottomImg from "../src/assets/images/bottom.png";
import PageIndicator from "./components/shared/pageIndicator/Pageindicator";
import { SendRegitrationForm } from "./Helper/Backend";
import { User } from "./type/user";

const registrationForm = [
  {
    title: "1",
    component: Info,
  },
  {
    title: "2",
    component: Location,
  },
  {
    title: "3",
    component: Education,
  },
];

const App = (): JSX.Element => {
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  const nextForm = () => {
    if (activeFormIndex < registrationForm.length - 1) {
      setActiveFormIndex(activeFormIndex + 1);
    }
  };

  const handleRegistrationSubmit = async (formData: User) => {
    try {
      // Simulate sending the registration form data to the backend
      await SendRegitrationForm(formData);

      // If successful, navigate to the next form
      nextForm();
    } catch (error) {
      // Handle the error (e.g., display an error message to the user)
      console.error("Registration failed:", error);
    }
  };

  return (
    <Router>
      <div className="h-[100vh] w-[100vw] mt-[60px] md:w-full">
        <Routes>
          {registrationForm.map((step, index) => (
            <Route
              key={index}
              path={`/step${index + 1}`}
              element={
                <div>
                  <div className="absolute mt-[10rem] left-[10rem] flex flex-col items-center justify-center lg:w-[1200px]  ">
                    <PageIndicator
                      currentPage={activeFormIndex + 1}
                      totalPage={registrationForm.length}
                    />
                  </div>
                  <step.component
                    onSubmit={(formData: User) => {
                      handleRegistrationSubmit(formData);
                    }}
                  />
                  <div className="hidden md:block">
                    {" "}
                    {/* This will hide the image on mobile screens */}
                    <img src={BottomImg} className="mt-[-27rem]" />
                  </div>
                </div>
              }
            />
          ))}

          <Route path="/success" element={<SuccessPage />} />

          <Route path="/*" element={<Navigate to="/step1" />} />
        </Routes>
      </div>
    </Router>
  );
};

const SuccessPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <img src={SuccessImg} alt="Success" />

        <p className="text-[#243A5E]">Registration Successful!</p>

        <button className="text-white flex items-center justify-center w-[236px] bg-[#3C6AAC] h-[58px]">
          Download App
        </button>

        <p className="text-[#3C6AAC]">Back to homepage</p>
      </div>
    </div>
  );
};

export default App;
