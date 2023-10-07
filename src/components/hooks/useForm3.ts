import React, { useState } from "react";
import { SendRegitrationForm } from "../../Helper/Backend";

const useForm3 = (next: (prev: number) => void) => {
  const [form, setForm] = useState({
    university: "",
    specialization: "",
    gaduation_date: "",
    reg_number: "",
  });
  const [errors, setErrors] = useState({
    university: "",
    specialization: "",
    gaduation_date: "",
    reg_number: "",
  });
  const [loading, setLoading] = useState(false);
  const specialization = [
    { name: "phyics" },
    { name: "maths" },
    { name: "chemisty" },
    { name: "biology" },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value === "") setErrors({ ...errors, [name]: "Required*" });
    else setErrors({ ...errors, [name]: "" });
  };

  const handleSpecialization = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, specialization: e.target.value });
  };
  const handleSelect = (v: { name: string }) => {
    setForm({ ...form, specialization: v.name });
  };
  const validateForm = () => {
    const newErrors: {
      university?: string;
      specialization?: string;
      gaduation_date?: string;
      reg_number?: string;
    } = {};
    if (form.gaduation_date === "") newErrors.gaduation_date = "Required*";
    if (form.university === "") newErrors.university = "Required*";
    if (form.specialization === "") newErrors.specialization = "Required*";
    if (form.reg_number === "") newErrors.reg_number = "Required*";
    return newErrors;
  };
  const submit = async () => {
    if (Object.keys(validateForm()).length > 0) {
      setErrors({ ...errors, ...validateForm() });
    } else {
      const user = JSON.parse(localStorage.user);
      const address = JSON.parse(localStorage.address);
      localStorage.setItem("education", JSON.stringify(form));
      setLoading(true);
      //  if(res.message ==="Registration sucessful")
      try {
        const res = await SendRegitrationForm({ ...user, ...address, ...form });
        console.log(res);
        // setLoading(false);
        next(3);
      } catch (err) {
        throw err;
      }
      setLoading(false);
    }
  };

  return {
    form,
    errors,
    specialization,
    loading,
    handleChange,
    handleSpecialization,
    handleSelect,
    submit,
  };
};

export default useForm3;
