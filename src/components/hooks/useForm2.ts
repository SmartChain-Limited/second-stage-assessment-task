import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { ICountry, IState, ICity } from "country-state-city";

const useForm2 = (next: (prev: number) => void) => {
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState(State.getAllStates());
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState({
    country: "",
    state: "",
  });

  const [codes, setCodes] = useState<{
    countryCode: null | ICountry;
    stateCode: null | IState;
  }>({
    countryCode: null,
    stateCode: null,
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
    const filter = Country.getAllCountries().filter((c) =>
      c.name.includes(country)
    );
    setErrors({ ...errors, country: "" });
    setCountries(filter);
  };
  //   console.log(states);
  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    const filter = State.getAllStates().filter((c) => c.name.includes(state));
    setErrors({ ...errors, state: "" });
    setStates(filter);
  };
  const selectCountry = (c: any) => {
    setCountry(c.name);
    setCodes({ ...codes, countryCode: c });
  };

  const selectState = (s: any) => {
    setState(s.name);
    setCodes({ ...codes, stateCode: s });
  };

  const validateForm = () => {
    const newErrors: { country?: string; state?: string } = {};
    if (codes.countryCode === null) newErrors.country = "Required*";
    if (codes.stateCode === null) newErrors.state = "Required*";
    return newErrors;
  };

  const submit = () => {
    if (Object.keys(validateForm()).length > 0) {
    //   console.log(validateForm());
      setErrors({ ...errors, ...validateForm() });
    } else {
      localStorage.setItem("address", JSON.stringify({ country, state }));
      next(2);
    }
  };
  
  return {
    countries,
    country,
    errors,
    state,
    states,
    codes,
    submit,
    selectCountry,
    selectState,
    handleCountryChange,
    handleStateChange,
  };
};

export default useForm2;
