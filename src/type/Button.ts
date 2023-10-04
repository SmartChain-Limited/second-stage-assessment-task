import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    type: "button" | "submit" | "reset";
    onclick?: MouseEventHandler<HTMLButtonElement>;
  }

  export type {
    ButtonProps
  }