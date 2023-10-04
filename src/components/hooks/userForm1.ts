import { useState } from "react";

interface Iform {
  full_name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirm_password?: string;
}

const userForm1 = (next: (prev: number) => void) => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const strongPassword = (password: string) => {
    const strength = new RegExp(
      "(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    return strength.test(password);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value === "") setErrors({ ...errors, [name]: "Required*" });
    else if (name === "email" && !validateEmail(value))
      setErrors({ ...errors, [name]: "Email is not valid*" });
    else if (name === "phone" && value.length !== 11)
      setErrors({ ...errors, [name]: "Phone number is invalid*" });
    else if (name === "password" && !strongPassword(value))
      setErrors({
        ...errors,
        [name]:
          "Password must contain one uppercase, one lowercase, one symbol, and one number*",
      });
    else if (name === "confirm_password" && value !== form.password)
      setErrors({ ...errors, [name]: "Passwords do not match*" });
    else setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors: Iform = {};
    const { full_name, email, phone, password, confirm_password } = form;
    // console.log(form);
    if (full_name === "") newErrors.full_name = "Required*";
    else if (full_name.split(" ").length < 2) {
      console.log(full_name.split(" "));
      errors.full_name = "Enter your full name*";
    }
    if (email === "") errors.email = "Required*";
    else if (!validateEmail(email)) errors.email = "Email is invalid*";
    if (phone === "") newErrors.phone = "Required*";
    else if (phone.length !== 11) newErrors.phone = "Phone is invalid*";
    if (password === "") newErrors.password = "Required*";
    else if (!strongPassword(password))
      newErrors.password =
        "Password must contain one uppercase, one lowercase, one symbol, and one number*";
    if (confirm_password === "") newErrors.confirm_password = "Required*";
    else if (password !== confirm_password)
      newErrors.confirm_password = "Passwords do not match*";
    return newErrors;
  };

  const submit = () => {
    if (Object.keys(validateForm()).length > 0) {
      console.log(validateForm());
      setErrors({ ...errors, ...validateForm() });
    } else {
      localStorage.setItem("user", JSON.stringify(form));
      next(1);
    }
  };
  return { form, errors, handleChange, validateEmail, submit };
};

export default userForm1;
