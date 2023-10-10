import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { MyContextProvider } from "./context/MyContext";
import root from "./tailwind.css";
import Signup from "./pages/signup";
import Education from "./pages/education";
import Location from "./pages/location";
import Result from "./pages/result";

const PageWrapper: React.FC = ({ children }) => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper>
            <Signup />
          </PageWrapper>
        }
      />
      <Route
        path="/Location"
        element={
          <PageWrapper>
            <Location />
          </PageWrapper>
        }
      />
      <Route
        path="/Education"
        element={
          <PageWrapper>
            <Education />
          </PageWrapper>
        }
      />
      <Route
        path="/Result"
        element={
          <PageWrapper>
            <Result />
          </PageWrapper>
        }
      />
    </Routes>
  );
};

export default App;
