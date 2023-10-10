import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
  {
    name: "USA",
    states: ["New York", "California", "Texas", "Colorado", "Utah"],
  },
  {
    name: "Canada",
    states: [
      "Ontario",
      "British Columbia",
      "Quebec",
      "Alberta",
      "Nova Scotia",
      "Manitoba",
    ],
  },
  {
    name: "Nigeria",
    states: ["Lagos", "Abuja", "Delta", "Portharcourt", "Edo", "Kano"],
  },
  {
    name: "England",
    states: [
      "London",
      "Manchester",
      "Reading",
      "Blackpool",
      "Edinburgh",
      "Birmingham",
    ],
  },
  {
    name: "Spain",
    states: [
      "Barcelona",
      "Madrid",
      "Mallorca",
      "Seville",
      "Valencia",
      "Aragon",
    ],
  },
  {
    name: "Germany",
    states: ["Bayern", "Bremen", "Hamburg", "Berlin", "Sachsen", "Hessen"],
  },
];

const Location = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Event handler for selecting a country
  const handleCountryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
  };

  // Event handler for selecting a state
  const handleStateChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Education");
  };

  return (
    <div>
      <div style={{ position: "absolute", top: "70px", right: "20px" }}>
        <div className="w-[149px] h-[42px] text-center text-blue-800 text-3xl font-medium font-['Konnect']">
          healthXP
        </div>
      </div>
      <div className="w-[282px] h-[150px] fixed top-40 left-130 [font-family:'Graphik-Medium',Helvetica] font-medium text-blue-800 text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        Your Location Details
      </div>
      <form>
        <div className="w-[324px] h-[80px] relative">
          <div className="w-[324px] h-[55px] left-0 top-0 absolute">
            <div className="w-[324px] h-[55px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[296.74px] h-[24.12px] left-[18.87px] top-[15.44px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <select
              onChange={handleCountryChange}
              className="w-[324px] h-[55px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[18.87px] text-neutral-700 text-sm font-normal font-['SF Pro Display']">
              <option value="" selected>
                Country of Residence
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
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

        {/* State dropdown (visible by default) */}
        <div className="w-[324px] h-[80px] relative">
          <div className="w-[324px] h-[55px] left-0 top-0 absolute">
            <div className="w-[324px] h-[55px] left-0 top-0 absolute bg-white rounded-[15px] border border-slate-400" />
            <div className="w-[296.74px] h-[24.12px] left-[18.87px] top-[15.44px] absolute text-neutral-400 text-sm font-normal font-['SF Pro Display']"></div>
            <select
              onChange={handleStateChange}
              className="w-[324px] h-[55px] left-0 top-0 absolute bg-transparent border-none outline-none pl-[18.87px] text-neutral-700 text-sm font-normal font-['SF Pro Display']">
              <option value="" selected>
                Select State
              </option>
              {selectedCountry &&
                countries
                  .find((country) => country.name === selectedCountry)
                  ?.states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
            </select>
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

export default Location;
