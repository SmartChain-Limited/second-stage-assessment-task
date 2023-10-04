import React, { useState } from "react";
import { Input, PasswordInput } from "../../ui/utils/Input";
import Button from "../../ui/utils/Button";
import userForm1 from "../hooks/userForm1";

const Form1 = ({ next }: { next: (prev: number) => void }) => {
  const { form, errors, handleChange, submit } = userForm1(next);

  return (
    <div className="flex flex-col gap-[24px]">
      <Input
        name="full_name"
        value={form.full_name}
        placeholder="Full Name"
        error={errors.full_name}
        handleChange={handleChange}
        type="text"
      />
      <Input
        name="email"
        value={form.email}
        placeholder="Email"
        error={errors.email}
        handleChange={handleChange}
        type="email"
      />
      <Input
        name="phone"
        value={form.phone}
        placeholder="Phone Number"
        error={errors.phone}
        handleChange={handleChange}
        type="number"
      />
      <PasswordInput
        name="password"
        value={form.password}
        placeholder="Password"
        error={errors.password}
        handleChange={handleChange}
      />
      <PasswordInput
        name="confirm_password"
        value={form.confirm_password}
        placeholder="Confirm Password"
        error={errors.confirm_password}
        handleChange={handleChange}
      />
      <div className="flex sm:justify-end justify-center">
        <Button action={submit} className={"w-[246px] h-[58px]"}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Form1;
