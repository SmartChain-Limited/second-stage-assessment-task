import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Buttons: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <Buttons
      ClassName="!font-medium ![font-family:'Graphik-Medium',Helvetica]"
      property1="fill"
      property2="normal"
      text="Next"
    />
  );
};

export default Buttons;
