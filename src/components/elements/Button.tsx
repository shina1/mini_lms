import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

interface ButtonProps {
  icon?: IconType;
  text: string;
  type: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, text, type }) => {
  const buttonClasses = classNames(
    "hidden md:flex items-center gap-2 py-2 px-4 rounded-full border-none text-lg transition duration-300",
    {
      "bg-[#FF7606]/80 text-white": type === "primary",
      "bg-white border border-[#FF7606]/80 text-[#FF7606]/80":
        type === "secondary",
    }
  );

  return (
    <button className={buttonClasses}>
      {Icon && <Icon className="inline-block mr-2" size={25} />} {text}
    </button>
  );
};

export default Button;
